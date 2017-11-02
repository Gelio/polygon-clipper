import { Vector3 } from 'common/Vector3';

import { AppFillData } from 'polygon-filler/AppFillData';
import { FillStrip } from 'polygon-filler/FillStrip';
import { FillWorkerMessageType } from 'polygon-filler/FillWorkerMessageType';

let appFillData: AppFillData;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasImageData: ImageData;
let lightVersor = new Vector3(0, 0, 1);

onmessage = (e: MessageEvent) => {
  const messageType: FillWorkerMessageType = e.data.type;

  switch (messageType) {
    case FillWorkerMessageType.FillData:
      appFillData = e.data.appFillData;
      canvasWidth = e.data.width;
      canvasHeight = e.data.height;
      break;

    case FillWorkerMessageType.StartFill:
      canvasImageData = new ImageData(canvasWidth, canvasHeight);
      break;

    case FillWorkerMessageType.FillStrips:
      fillStrips(e.data.fillStrips);
      break;

    case FillWorkerMessageType.EndFill:
      respond();
      break;

    case FillWorkerMessageType.LightVersor:
      const versorParts = e.data.versor;
      lightVersor = new Vector3(versorParts.x, versorParts.y, versorParts.z);
      break;

    default:
      // tslint:disable-next-line no-console
      console.error('Unknown worker message type', messageType);
  }
};

function fillStrips(strips: FillStrip[]) {
  strips.forEach(strip => {
    const fromX = Math.max(Math.floor(strip.fromX), 0);
    const toX = Math.min(Math.floor(strip.toX), canvasWidth);

    for (let x = fromX; x <= toX; x += 1) {
      putPixel(x, strip.y);
    }
  });
}

function putPixel(x: number, y: number) {
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

function respond() {
  const arrayBuffer = canvasImageData.data.buffer;
  postMessage(arrayBuffer, [arrayBuffer]);
}
