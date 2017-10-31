import { EventAggregator } from 'events/EventAggregator';
import { NewBackgroundTexture } from 'events/input-data/NewBackgroundTexture';
import { NewHeightMap } from 'events/input-data/NewHeightMap';
import { NewLightColor } from 'events/input-data/NewLightColor';
import { NewLightVersorType } from 'events/input-data/NewLightVersorType';
import { NewNormalMap } from 'events/input-data/NewNormalMap';

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

    this.eventAggregator.dispatchEvent(new NewBackgroundTexture(downloadedImageData[0]));
    this.eventAggregator.dispatchEvent(new NewNormalMap(downloadedImageData[1]));
    this.eventAggregator.dispatchEvent(new NewHeightMap(downloadedImageData[2]));
    this.eventAggregator.dispatchEvent(new NewLightColor(configuration.presetLightColor));
    this.eventAggregator.dispatchEvent(new NewLightVersorType(LightVersorType.Constant));
  }
}
