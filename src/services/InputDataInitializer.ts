import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightPositionRadiusEvent,
  NewLightTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

import { configuration } from 'configuration';

import { Layer } from 'common/Layer';
import { LightType } from 'common/LightType';
import { LineProperties } from 'common/LineProperties';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

import { ImageDownloader } from 'services/ImageDownloader';
import { Service } from 'services/Service';

interface InputDataInitializerDependencies {
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
  polygonLayer: Layer;
}

export class InputDataInitializer implements Service {
  private readonly eventAggregator: EventAggregator;
  private readonly imageDownloader: ImageDownloader;
  private readonly polygonLayer: Layer;

  constructor(dependencies: InputDataInitializerDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;
    this.polygonLayer = dependencies.polygonLayer;
  }

  public async init() {
    this.addInitialPolygons();

    const imagesToDownload: HTMLImageElement[] = [];

    const backgroundTextureImage = new Image();
    backgroundTextureImage.src = configuration.presetBackgroundTextures[0];

    const normalMapImage = new Image();
    normalMapImage.src = configuration.presetNormalMaps[0];

    const heightMapImage = new Image();
    heightMapImage.src = configuration.presetHeightMaps[0];

    imagesToDownload.push(backgroundTextureImage, normalMapImage, heightMapImage);

    const downloadedImageData = await Promise.all(
      imagesToDownload.map(image => this.imageDownloader.imageToImageData(image))
    );

    this.eventAggregator.dispatchEvent(new NewBackgroundTextureEvent(downloadedImageData[0]));
    this.eventAggregator.dispatchEvent(new NewNormalMapEvent(downloadedImageData[1]));
    this.eventAggregator.dispatchEvent(new NewHeightMapEvent(downloadedImageData[2]));
    this.eventAggregator.dispatchEvent(new NewLightColorEvent(configuration.presetLightColor));
    this.eventAggregator.dispatchEvent(
      new NewLightPositionRadiusEvent(configuration.movingLight.defaultRadius)
    );
    this.eventAggregator.dispatchEvent(new NewLightTypeEvent(LightType.Constant));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }

  public destroy() {
    // Nothing to destroy here
  }

  private addInitialPolygons() {
    const points1 = [
      new Point(94, 93),
      new Point(69, 386),
      new Point(190, 525),
      new Point(664, 364)
    ];
    const polygon1 = new Polygon(points1, LineProperties.getDefault());

    const points2 = [
      new Point(777, 142),
      new Point(700, 50),
      new Point(433, 34),
      new Point(404, 156),
      new Point(527, 263),
      new Point(750, 350)
    ];
    const polygon2 = new Polygon(points2, LineProperties.getDefault());

    this.polygonLayer.paths.push(polygon1, polygon2);
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
  }
}
