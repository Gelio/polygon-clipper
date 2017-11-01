import { AppFillData } from 'polygon-filler/AppFillData';
import { FillStrip } from 'polygon-filler/FillStrip';

onmessage = (e: MessageEvent) => {
  const appFillData: AppFillData = e.data.appFillData;
  const canvasImageData: ImageData = e.data.canvasImageData;
  const fillStrips: FillStrip[] = e.data.fillStrips;

  console.log('Filling');

  fillStrips.forEach(fillStrip => {
    for (let x = fillStrip.fromX; x <= fillStrip.toX; x += 1) {
      putPixel(x, fillStrip.y, canvasImageData, appFillData);
    }
  });

  postMessage(canvasImageData);
  close();
};

function putPixel(x: number, y: number, canvasImageData: ImageData, appFillData: AppFillData) {
  if (x >= canvasImageData.width || y >= canvasImageData.height) {
    return;
  }

  // tslint:disable no-bitwise
  x = ~~x;
  y = ~~y;
  // tslint:enable no-bitwise

  const backgroundTexture = appFillData.backgroundTexture;
  const backgroundTextureX = x % backgroundTexture.width;
  const backgroundTextureY = y % backgroundTexture.height;
  const backgroundTextureIndex =
    (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;

  const index = (x + y * canvasImageData.width) * 4;
  canvasImageData.data[index] = backgroundTexture.data[backgroundTextureIndex];
  canvasImageData.data[index + 1] = backgroundTexture.data[backgroundTextureIndex + 1];
  canvasImageData.data[index + 2] = backgroundTexture.data[backgroundTextureIndex + 2];
  canvasImageData.data[index + 3] = backgroundTexture.data[backgroundTextureIndex + 3];
}
