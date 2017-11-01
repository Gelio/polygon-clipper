export class ImageDownloader {
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
    return new Promise((resolve, reject) => {
      function onLoad() {
        image.removeEventListener('load', onLoad);
        image.removeEventListener('error', onError);
        resolve();
      }

      function onError() {
        image.removeEventListener('load', onLoad);
        image.removeEventListener('error', onError);
        reject();
      }

      image.addEventListener('load', onLoad);
      image.addEventListener('error', onError);
    });
  }
}
