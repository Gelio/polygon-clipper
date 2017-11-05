import { FillWorkerState } from 'workers/polygon-fill-worker/FillWorkerState';
import { VectorMapPreparer } from 'workers/polygon-fill-worker/VectorMapPreparer';

import { AppEvent } from 'events/AppEvent';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightPositionEvent,
  NewLightTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';

import { Vector3 } from 'common/Vector3';

interface FillWorkerEventHandlerDependencies {
  state: FillWorkerState;
  vectorMapPreparer: VectorMapPreparer;
}
type EventHandler = (event: AppEvent) => void;

export class FillWorkerEventHandler {
  private readonly state: FillWorkerState;
  private readonly vectorMapPreparer: VectorMapPreparer;
  private readonly handlers: { [eventType: string]: EventHandler } = {
    [NewBackgroundTextureEvent.eventType]: this.onNewBackgroundTexture,
    [NewHeightMapEvent.eventType]: this.onNewHeightMap,
    [NewLightColorEvent.eventType]: this.onNewLightColor,
    [NewLightPositionEvent.eventType]: this.onNewLightPosition,
    [NewLightTypeEvent.eventType]: this.onNewLightType,
    [NewNormalMapEvent.eventType]: this.onNewNormalMap
  };

  constructor(dependencies: FillWorkerEventHandlerDependencies) {
    this.state = dependencies.state;
    this.vectorMapPreparer = dependencies.vectorMapPreparer;
  }

  public canInitialize() {
    if (this.state.initializationValue === 63) {
      this.state.initializationValue = 127;

      return true;
    }

    return false;
  }

  public hasInitialized() {
    return this.state.initializationValue === 127;
  }

  public handleEvent(event: AppEvent) {
    this.handlers[event.eventType].call(this, event);

    if (this.canInitialize()) {
      this.vectorMapPreparer.performInitialPreparation();
    }
  }

  // tslint:disable no-bitwise
  private onNewBackgroundTexture(event: NewBackgroundTextureEvent) {
    this.state.appFillData.backgroundTexture = this.resizeImageDataToCanvasSize(event.payload);
    this.state.initializationValue |= 1;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareTextureVectors();
      this.vectorMapPreparer.prepareTextureVectorsWithLightColor();
    }
  }

  private onNewHeightMap(event: NewHeightMapEvent) {
    this.state.appFillData.heightMap = this.resizeImageDataToCanvasSize(event.payload);
    this.state.initializationValue |= 2;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareBumpVectors();
      this.vectorMapPreparer.applyBumpVectors();
    }
  }

  private onNewLightColor(event: NewLightColorEvent) {
    const { x, y, z } = event.payload;
    this.state.appFillData.lightColor = new Vector3(x, y, z);
    this.state.initializationValue |= 4;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareTextureVectorsWithLightColor();
    }
  }

  private onNewLightPosition(event: NewLightPositionEvent) {
    const { x, y, z } = event.payload;
    this.state.lightPosition = new Vector3(x, y, z);
    this.state.initializationValue |= 8;

    if (this.canInitialize()) {
      this.vectorMapPreparer.performInitialPreparation();
    }
  }

  private onNewLightType(event: NewLightTypeEvent) {
    this.state.lightType = event.payload;
    this.state.initializationValue |= 16;
  }

  private onNewNormalMap(event: NewNormalMapEvent) {
    this.state.appFillData.normalMap = this.resizeImageDataToCanvasSize(event.payload);
    this.state.initializationValue |= 32;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareNormalVectors();
      this.vectorMapPreparer.prepareBumpVectors();
      this.vectorMapPreparer.applyBumpVectors();
    }
  }
  // tslint:enable no-bitwise

  private resizeImageDataToCanvasSize(imageData: ImageData) {
    const { canvasWidth, canvasHeight } = this.state;
    const resizedImageData = new ImageData(canvasWidth, canvasHeight);

    for (let x = 0; x < canvasWidth; x += 1) {
      const imageDataX = x % imageData.width;

      for (let y = 0; y < canvasHeight; y += 1) {
        const imageDataY = y % imageData.height;

        const imageDataIndex = (imageDataX + (imageDataY * imageData.width)) * 4;
        const resizedImageDataIndex = (x + (y * canvasWidth)) * 4;

        // TODO: possibly introduce incrementing instead of simple addition
        resizedImageData.data[resizedImageDataIndex] = imageData.data[imageDataIndex];
        resizedImageData.data[resizedImageDataIndex + 1] = imageData.data[imageDataIndex + 1];
        resizedImageData.data[resizedImageDataIndex + 2] = imageData.data[imageDataIndex + 2];
        resizedImageData.data[resizedImageDataIndex + 3] = imageData.data[imageDataIndex + 3];
      }
    }

    return resizedImageData;
  }
}
