import { Vector3 } from 'common/Vector3';

import { AppEvent } from 'events/AppEvent';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightVersorEvent,
  NewNormalMapEvent
} from 'events/input-data';

import { AppFillData } from 'polygon-filler/AppFillData';
import { FillStrip } from 'polygon-filler/FillStrip';
import { FillWorkerMessageType } from 'polygon-filler/FillWorkerMessageType';

const appFillData: AppFillData = {
  backgroundTexture: new ImageData(1, 1),
  normalMap: new ImageData(1, 1),
  heightMap: new ImageData(1, 1),
  lightColor: new Vector3(0, 0, 0)
};
let canvasWidth = 0;
let canvasHeight = 0;
let canvasImageData: ImageData;
let lightDirectionVersor = new Vector3(0, 0, 1);
let initializationValue = 0;

type Vector3Map = Vector3[][];
let textureVectors: Vector3Map = [];
let textureVectorsWithLightColor: Vector3Map = [];
let normalVectors: Vector3Map = [];
let bumpVectors: Vector3Map = [];
let distortedNormalVectors: Vector3Map = [];

onmessage = (e: MessageEvent) => {
  const messageType: FillWorkerMessageType = e.data.type;

  switch (messageType) {
    case FillWorkerMessageType.CanvasInfo:
      canvasWidth = e.data.width;
      canvasHeight = e.data.height;
      break;

    case FillWorkerMessageType.NewFillDataEvent:
      handleNewFillDataEvent(e.data.event);
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
  const textureVectorWithLightColor = textureVectorsWithLightColor[x][y];
  const distortedNormalVector = distortedNormalVectors[x][y];

  // cos theta = v1 * v2 / (norm(v1) * norm(v2))
  // Since lightDirectionVersor and distortedNormalVector are unit vectors, cos theta is just
  // a dot product
  const cosTheta = Vector3.dotProduct(lightDirectionVersor, distortedNormalVector);
  const clampedCosTheta = Math.max(0, Math.min(1, cosTheta));

  const result = textureVectorWithLightColor
    .multiply(clampedCosTheta)
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

function performInitialPreparation() {
  prepareTextureVectors();
  prepareTextureVectorsWithLightColor();
  prepareNormalVectors();
  prepareBumpVectors();
  applyBumpVectors();
}

function prepareTextureVectors() {
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

      const normalVector = Vector3.fromNormalMap(r, g, b).normalizeWithZIdentity();
      normalVectors[x].push(normalVector);
    }
  }
}

function prepareBumpVectors() {
  bumpVectors = [];
  const heightMap = appFillData.heightMap;
  const maxHeightMapX = heightMap.width - 1;
  const maxHeightMapY = heightMap.height - 1;

  for (let x = 0; x < canvasWidth; x += 1) {
    const heightMapX = x % heightMap.width;
    bumpVectors.push([]);

    for (let y = 0; y < canvasWidth; y += 1) {
      const heightMapY = y % heightMap.height;
      const index = (heightMapX + heightMapY * heightMap.width) * 4;

      let dhx = 0; // = H[x + 1, y] - H[x, y]
      let dhy = 0; // = H[x, y+1] - H[x, y]

      // TODO: fix this
      if (heightMapX < maxHeightMapX) {
        dhx = heightMap.data[index + 4] - heightMap.data[index];
      } else {
        // H[0, y] - H[x, y]
        dhx = heightMap.data[index - heightMapX * 4] - heightMap.data[index];
      }

      if (heightMapY < maxHeightMapY) {
        dhy = heightMap.data[index + heightMap.width * 4] - heightMap.data[index];
      } else {
        // H[x, 0] - H[x, y]
        dhy = heightMap.data[heightMapX * 4] - heightMap.data[index];
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

function prepareTextureVectorsWithLightColor() {
  textureVectorsWithLightColor = [];

  for (let x = 0; x < canvasWidth; x += 1) {
    textureVectorsWithLightColor.push([]);

    for (let y = 0; y < canvasHeight; y += 1) {
      textureVectorsWithLightColor[x].push(
        Vector3.multiplyComponents(textureVectors[x][y], appFillData.lightColor).floor()
      );
    }
  }
}

function handleNewFillDataEvent(event: AppEvent) {
  type EventHandler = (event: AppEvent) => void;
  const handlers: { [eventType: string]: EventHandler } = {
    [NewBackgroundTextureEvent.eventType]: onNewBackgroundTexture,
    [NewHeightMapEvent.eventType]: onNewHeightMap,
    [NewLightColorEvent.eventType]: onNewLightColor,
    [NewLightVersorEvent.eventType]: onNewLightVersor,
    [NewNormalMapEvent.eventType]: onNewNormalMap
  };

  handlers[event.eventType](event);
}

// tslint:disable no-bitwise
function onNewBackgroundTexture(event: NewBackgroundTextureEvent) {
  appFillData.backgroundTexture = event.payload;
  initializationValue |= 1;

  if (hasInitialized()) {
    prepareTextureVectors();
    prepareTextureVectorsWithLightColor();
  } else if (canInitialize()) {
    performInitialPreparation();
  }
}

function onNewHeightMap(event: NewHeightMapEvent) {
  appFillData.heightMap = event.payload;
  initializationValue |= 2;

  if (hasInitialized()) {
    prepareBumpVectors();
    applyBumpVectors();
  } else if (canInitialize()) {
    performInitialPreparation();
  }
}

function onNewLightColor(event: NewLightColorEvent) {
  const { x, y, z } = event.payload;
  appFillData.lightColor = new Vector3(x, y, z);
  initializationValue |= 4;

  if (hasInitialized()) {
    prepareTextureVectorsWithLightColor();
  } else if (canInitialize()) {
    performInitialPreparation();
  }
}

function onNewLightVersor(event: NewLightVersorEvent) {
  const { x, y, z } = event.payload;
  lightDirectionVersor = new Vector3(x, y, z);
  initializationValue |= 8;

  if (canInitialize()) {
    performInitialPreparation();
  }
}

function onNewNormalMap(event: NewNormalMapEvent) {
  appFillData.normalMap = event.payload;
  initializationValue |= 16;

  if (hasInitialized()) {
    prepareNormalVectors();
    prepareBumpVectors();
    applyBumpVectors();
  } else if (canInitialize()) {
    performInitialPreparation();
  }
}
// tslint:enable no-bitwise

function canInitialize() {
  if (initializationValue === 31) {
    initializationValue = 63;

    return true;
  }

  return false;
}

function hasInitialized() {
  return initializationValue === 63;
}
