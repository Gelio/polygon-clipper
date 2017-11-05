import { EventAggregator } from 'events/EventAggregator';
import { LoadingFinishedEvent } from 'events/ui/LoadingFinishedEvent';
import { LoadingStartedEvent } from 'events/ui/LoadingStartedEvent';

interface ImageDownloaderDependencies {
  eventAggregator: EventAggregator;
}

export class ImageDownloader {
  private readonly eventAggregator: EventAggregator;

  constructor(dependencies: ImageDownloaderDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
  }

  public async imageToImageData(image: HTMLImageElement): Promise<ImageData> {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Cannot get 2d drawing canvas context');
    }

    if (!this.isImageDownloaded(image)) {
      await this.waitForImage(image);
    }

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    context.drawImage(image, 0, 0);

    return context.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
  }

  private isImageDownloaded(image: HTMLImageElement) {
    if (!image.complete) {
      return false;
    }

    if (image.naturalWidth === 0) {
      return false;
    }

    return true;
  }

  private waitForImage(image: HTMLImageElement) {
    this.dispatchLoadingStartedEvent();

    return new Promise((resolve, reject) => {
      const dispatchLoadingFinishedEvent = this.dispatchLoadingFinishedEvent.bind(this);

      function onLoad() {
        image.removeEventListener('load', onLoad);
        image.removeEventListener('error', onError);
        dispatchLoadingFinishedEvent();
        resolve();
      }

      function onError() {
        image.removeEventListener('load', onLoad);
        image.removeEventListener('error', onError);
        dispatchLoadingFinishedEvent();
        reject();
      }

      image.addEventListener('load', onLoad);
      image.addEventListener('error', onError);
    });
  }

  private dispatchLoadingStartedEvent() {
    this.eventAggregator.dispatchEvent(new LoadingStartedEvent());
  }

  private dispatchLoadingFinishedEvent() {
    this.eventAggregator.dispatchEvent(new LoadingFinishedEvent());
  }
}
