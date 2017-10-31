export class ImageDownloader {
  public imageToUint8Array(image: HTMLImageElement): Promise<Uint8Array> {
    if (!image.src.includes('data:image')) {
      return this.imageURLToUint8Array(image.src);
    }

    return this.dataURLToUint8Array(image.src);
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

  private imageURLToUint8Array(imageUrl: string): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('get', imageUrl);
      xhr.responseType = 'blob';

      xhr.onload = () => {
        const fileReader = new FileReader();

        fileReader.onload = () => resolve(new Uint8Array(fileReader.result));
        fileReader.onerror = reject;

        fileReader.readAsArrayBuffer(xhr.response);
      };
      xhr.onerror = reject;

      xhr.send();
    });
  }

  private dataURLToUint8Array(dataURL: string): Promise<Uint8Array> {
    dataURL = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    const binaryString = window.atob(dataURL);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return Promise.resolve(bytes);
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
