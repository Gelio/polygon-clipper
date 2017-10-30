export class ImageDownloader {
  public imageToUint8Array(image: HTMLImageElement): Promise<Uint8Array> {
    if (!image.src.includes('data:image')) {
      return this.imageURLToUint8Array(image.src);
    }

    return this.dataURLToUint8Array(image.src);
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
}
