import { Color } from 'common/Color';
import { LightVersorType } from 'common/LightVersorType';
import { Polygon } from 'common/Polygon';

import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightVersorTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';


interface PolygonFillerDependencies {
  eventAggregator: EventAggregator;
  canvas: HTMLCanvasElement;
}

interface AppFillData {
  backgroundTexture: ImageData;
  heightMap: ImageData;
  lightColor: Color;
  lightVersorType: LightVersorType;
  normalMap: ImageData;
}

export class PolygonFiller {
  private readonly eventAggregator: EventAggregator;
  private readonly canvas: HTMLCanvasElement;
  private renderingContext: CanvasRenderingContext2D;

  private readonly fillData: AppFillData = {
    backgroundTexture: new ImageData(1, 1),
    heightMap: new ImageData(1, 1),
    lightColor: new Color(0, 0, 0),
    lightVersorType: LightVersorType.Constant,
    normalMap: new ImageData(1, 1)
  };

  constructor(dependencies: PolygonFillerDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.canvas = dependencies.canvas;

    this.onNewBackgroundTexture = this.onNewBackgroundTexture.bind(this);
    this.onNewHeightMap = this.onNewHeightMap.bind(this);
    this.onNewLightColor = this.onNewLightColor.bind(this);
    this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
    this.onNewNormalMap = this.onNewNormalMap.bind(this);
  }

  public injectCanvasRenderingContext(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
  }

  public init() {
    const eventAggregator = this.eventAggregator;

    eventAggregator.addEventListener(
      NewBackgroundTextureEvent.eventType,
      this.onNewBackgroundTexture
    );
    eventAggregator.addEventListener(NewHeightMapEvent.eventType, this.onNewHeightMap);
    eventAggregator.addEventListener(NewLightColorEvent.eventType, this.onNewLightColor);
    eventAggregator.addEventListener(NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
    eventAggregator.addEventListener(NewNormalMapEvent.eventType, this.onNewNormalMap);
  }

  public destroy() {
    const eventAggregator = this.eventAggregator;

    eventAggregator.removeEventListener(
      NewBackgroundTextureEvent.eventType,
      this.onNewBackgroundTexture
    );
    eventAggregator.removeEventListener(NewHeightMapEvent.eventType, this.onNewHeightMap);
    eventAggregator.removeEventListener(NewLightColorEvent.eventType, this.onNewLightColor);
    eventAggregator.removeEventListener(
      NewLightVersorTypeEvent.eventType,
      this.onNewLightVersorType
    );
    eventAggregator.removeEventListener(NewNormalMapEvent.eventType, this.onNewNormalMap);
  }

  public fillPolygon(polygon: Polygon) {
    console.log('Filling polygon', polygon);
    console.log(this.fillData);
  }

  private onNewBackgroundTexture(event: NewBackgroundTextureEvent) {
    this.fillData.backgroundTexture = event.payload;
    event.handled = true;
  }

  private onNewHeightMap(event: NewHeightMapEvent) {
    this.fillData.heightMap = event.payload;
    event.handled = true;
  }

  private onNewLightColor(event: NewLightColorEvent) {
    this.fillData.lightColor = event.payload;
    event.handled = true;
  }

  private onNewLightVersorType(event: NewLightVersorTypeEvent) {
    this.fillData.lightVersorType = event.payload;
    event.handled = true;
  }

  private onNewNormalMap(event: NewNormalMapEvent) {
    this.fillData.normalMap = event.payload;
    event.handled = true;
  }
}
