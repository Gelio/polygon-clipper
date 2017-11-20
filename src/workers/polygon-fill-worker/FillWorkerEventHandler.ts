import { FillWorkerState } from 'workers/polygon-fill-worker/FillWorkerState';
import { VectorMapPreparer } from 'workers/polygon-fill-worker/VectorMapPreparer';

import { AppEvent } from 'events/AppEvent';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewHeightMapIntensityEvent,
  NewLightColorEvent,
  NewLightPositionEvent,
  NewLightTypeEvent,
  NewMousePositionEvent,
  NewNormalMapEvent,
  NewNormalMapTypeEvent
} from 'events/input-data';

import { Point } from 'common/Point';
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
    [NewNormalMapEvent.eventType]: this.onNewNormalMap,
    [NewHeightMapIntensityEvent.eventType]: this.onNewHeightMapIntensity,
    [NewMousePositionEvent.eventType]: this.onNewMousePosition,
    [NewNormalMapTypeEvent.eventType]: this.onNewNormalMapType
  };

  constructor(dependencies: FillWorkerEventHandlerDependencies) {
    this.state = dependencies.state;
    this.vectorMapPreparer = dependencies.vectorMapPreparer;
  }

  public canInitialize() {
    if (this.state.initializationValue === 511) {
      this.state.initializationValue = 1023;

      return true;
    }

    return false;
  }

  public hasInitialized() {
    return this.state.initializationValue === 1023;
  }

  public handleEvent(event: AppEvent) {
    this.handlers[event.eventType].call(this, event);

    if (this.canInitialize()) {
      this.vectorMapPreparer.performInitialPreparation();
    }
  }

  // tslint:disable no-bitwise
  private onNewBackgroundTexture(event: NewBackgroundTextureEvent) {
    this.state.appFillData.backgroundTexture = event.payload;
    this.state.initializationValue |= 1;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareTextureVectors();
      this.vectorMapPreparer.prepareTextureVectorsWithLightColor();
    }
  }

  private onNewHeightMap(event: NewHeightMapEvent) {
    this.state.appFillData.heightMap = event.payload;
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
  }

  private onNewLightType(event: NewLightTypeEvent) {
    this.state.lightType = event.payload;
    this.state.initializationValue |= 16;
  }

  private onNewNormalMap(event: NewNormalMapEvent) {
    this.state.appFillData.normalMap = event.payload;
    this.state.initializationValue |= 32;

    this.state.normalMapCenter = new Point(
      this.state.appFillData.normalMap.width / 2,
      this.state.appFillData.normalMap.height / 2
    ).floor();

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareNormalVectors();
      this.vectorMapPreparer.prepareBumpVectors();
      this.vectorMapPreparer.applyBumpVectors();
    }
  }

  private onNewHeightMapIntensity(event: NewHeightMapIntensityEvent) {
    this.state.appFillData.heightMapIntensity = event.payload;
    this.state.initializationValue |= 64;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.prepareBumpVectors();
      this.vectorMapPreparer.applyBumpVectors();
    }
  }

  private onNewMousePosition(event: NewMousePositionEvent) {
    this.state.mousePosition = new Point(event.payload.x, event.payload.y);
    this.state.initializationValue |= 128;
  }

  private onNewNormalMapType(event: NewNormalMapTypeEvent) {
    this.state.normalMapType = event.payload;
    this.state.initializationValue |= 256;

    if (this.hasInitialized()) {
      this.vectorMapPreparer.applyBumpVectors();
    }
  }
  // tslint:enable no-bitwise
}
