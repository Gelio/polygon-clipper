import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightVersorTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';

import { configuration } from 'configuration';

import { ImageDownloader } from 'common/ImageDownloader';
import { LightVersorType } from 'common/LightVersorType';

interface InputDataInitializerDependencies {
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
}

export class InputDataInitializer {
  private readonly eventAggregator: EventAggregator;
  private readonly imageDownloader: ImageDownloader;

  constructor(dependencies: InputDataInitializerDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;
  }

  public async init() {
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
    this.eventAggregator.dispatchEvent(new NewLightVersorTypeEvent(LightVersorType.Constant));
  }
}
