import { Vector3 } from 'common/Vector3';

import { AppFillData } from 'polygon-filler/AppFillData';
import { FillStrip } from 'polygon-filler/FillStrip';
import { FillWorkerMessageType } from 'polygon-filler/FillWorkerMessageType';

let appFillData: AppFillData;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasImageData: ImageData;
let lightDirectionVersor = new Vector3(0, 0, 1);

type Vector3Map = Vector3[][];
let textureVectors: Vector3Map = [];
let normalVectors: Vector3Map = [];
let bumpVectors: Vector3Map = [];
let distortedNormalVectors: Vector3Map = [];

onmessage = (e: MessageEvent) => {
  const messageType: FillWorkerMessageType = e.data.type;

  switch (messageType) {
    case FillWorkerMessageType.FillData:
      appFillData = e.data.appFillData;
      canvasWidth = e.data.width;
      canvasHeight = e.data.height;
      prepareVectors();
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
      lightDirectionVersor = new Vector3(versorParts.x, versorParts.y, versorParts.z);
      break;

    default:
      // tslint:disable-next-line no-console
      console.error('Unknown worker message type', messageType);
  }
};

function fillStrips(strips: FillStrip[]) {
  strips.forEach(strip => {
    const fromX = Math.max(Math.floor(strip.fromX), 0);
    const toX = Math.min(Math.floor(strip.toX), canvasWidth - 1);

    for (let x = fromX; x <= toX; x += 1) {
      putPixel(x, strip.y);
    }
  });
}

function putPixel(x: number, y: number) {
  const textureVector = textureVectors[x][y];
  const lightColor = appFillData.lightColor;
  const distortedNormalVector = distortedNormalVectors[x][y];

  // cos theta = v1 * v2 / (norm(v1) * norm(v2))
  // Since lightDirectionVersor and distortedNormalVector are unit vectors, cos theta is just
  // a dot product
  const cosTheta = Vector3.dotProduct(lightDirectionVersor, distortedNormalVector);

  const result = Vector3.multiplyComponents(textureVector, lightColor)
    .multiply(cosTheta)
    .floor();

  const index = (x + y * canvasImageData.width) * 4;
  canvasImageData.data[index] = result.x;
  canvasImageData.data[index + 1] = result.y;
  canvasImageData.data[index + 2] = result.z;
  canvasImageData.data[index + 3] = 255;
}

function respond() {
  postMessage(canvasImageData, [canvasImageData.data.buffer]);
}

function prepareVectors() {
  prepareTextureVectors();
  prepareNormalVectors();
  prepareBumpVectors();
  applyBumpVectors();
}

function prepareTextureVectors() {
  console.log('Preparing texture vectors');
  textureVectors = [];
  const backgroundTexture = appFillData.backgroundTexture;

  for (let x = 0; x < canvasWidth; x += 1) {
    const backgroundTextureX = x % backgroundTexture.width;
    textureVectors.push([]);

    for (let y = 0; y < canvasWidth; y += 1) {
      const backgroundTextureY = y % backgroundTexture.height;

      const index = (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;
      const r = backgroundTexture.data[index];
      const g = backgroundTexture.data[index + 1];
      const b = backgroundTexture.data[index + 2];

      textureVectors[x].push(new Vector3(r, g, b));
    }
  }
}

function prepareNormalVectors() {
  console.log('Preparing normal vectors');
  normalVectors = [];
  const normalMap = appFillData.normalMap;

  for (let x = 0; x < canvasWidth; x += 1) {
    const normalMapX = x % normalMap.width;
    normalVectors.push([]);

    for (let y = 0; y < canvasWidth; y += 1) {
      const normalMapY = y % normalMap.height;

      const index = (normalMapX + normalMapY * normalMap.width) * 4;
      const r = normalMap.data[index];
      const g = normalMap.data[index + 1];
      const b = normalMap.data[index + 2];

      normalVectors[x].push(Vector3.fromNormalMap(r, g, b));
    }
  }
}

function prepareBumpVectors() {
  console.log('Preparing bump vectors');
  bumpVectors = [];
  const heightMap = appFillData.heightMap;

  for (let x = 0; x < canvasWidth; x += 1) {
    const heightMapX = x % heightMap.width;
    bumpVectors.push([]);

    for (let y = 0; y < canvasWidth; y += 1) {
      const heightMapY = y % heightMap.height;
      const index = (heightMapX + heightMapY * heightMap.width) * 4;

      let dhx = 0;
      let dhy = 0;

      // TODO: fix this if heightmap is weird on the edges
      if (heightMapX < heightMap.width) {
        dhx = heightMap.data[index + 4] - heightMap.data[index];
      }
      if (heightMapY < heightMap.height) {
        dhy = heightMap.data[index + heightMap.width * 4] - heightMap.data[index];
      }

      const normalVector = normalVectors[x][y];
      const t = new Vector3(1, 0, -normalVector.x);
      const b = new Vector3(0, 1, -normalVector.y);

      const d = Vector3.add(t.multiply(dhx), b.multiply(dhy));
      bumpVectors[x].push(d);
    }
  }
}

function applyBumpVectors() {
  console.log('Applying bump vectors (distorting normal vectors)');
  distortedNormalVectors = [];

  for (let x = 0; x < canvasWidth; x += 1) {
    distortedNormalVectors.push([]);

    for (let y = 0; y < canvasHeight; y += 1) {
      distortedNormalVectors[x].push(
        Vector3.add(normalVectors[x][y], bumpVectors[x][y]).normalize()
      );
    }
  }
}
