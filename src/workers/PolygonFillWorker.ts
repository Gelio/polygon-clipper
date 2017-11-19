import { LightType } from 'common/LightType';
import { NormalMapType } from 'common/NormalMapType';
import { Point } from 'common/Point';
import { Vector3 } from 'common/Vector3';

import { FillWorkerMessageType } from 'polygon-filler/FillWorkerMessageType';

import { FillWorkerEventHandler } from 'workers/polygon-fill-worker/FillWorkerEventHandler';
import { FillWorkerFiller } from 'workers/polygon-fill-worker/FillWorkerFiller';
import { FillWorkerState } from 'workers/polygon-fill-worker/FillWorkerState';
import { VectorMapPreparer } from 'workers/polygon-fill-worker/VectorMapPreparer';

const state: FillWorkerState = {
  appFillData: {
    backgroundTexture: new ImageData(1, 1),
    normalMap: new ImageData(1, 1),
    heightMap: new ImageData(1, 1),
    heightMapIntensity: 1,
    lightColor: new Vector3(0, 0, 0)
  },
  canvasHeight: 0,
  canvasWidth: 0,
  canvasImageData: new ImageData(1, 1),

  lightPosition: new Vector3(0, 0, 1),
  lightType: LightType.Constant,

  initializationValue: 0,

  textureVectors: [],
  textureVectorsWithLightColor: [],
  normalVectors: [],
  bumpVectors: [],
  distortedNormalVectors: [],

  mousePosition: new Point(0, 0),
  normalMapType: NormalMapType.Stationary
};

const vectorMapPreparer = new VectorMapPreparer(state);
const eventHandler = new FillWorkerEventHandler({ state, vectorMapPreparer });
const filler = new FillWorkerFiller(state);

onmessage = (e: MessageEvent) => {
  const messageType: FillWorkerMessageType = e.data.type;

  switch (messageType) {
    case FillWorkerMessageType.CanvasInfo:
      state.canvasWidth = e.data.width;
      state.canvasHeight = e.data.height;
      break;

    case FillWorkerMessageType.NewFillDataEvent:
      eventHandler.handleEvent(e.data.event);
      break;

    case FillWorkerMessageType.StartFill:
      state.canvasImageData = new ImageData(state.canvasWidth, state.canvasHeight);
      break;

    case FillWorkerMessageType.FillStrips:
      filler.fillStrips(e.data.fillStrips);
      break;

    case FillWorkerMessageType.EndFill:
    postMessage(state.canvasImageData, [state.canvasImageData.data.buffer]);
      break;

    default:
      // tslint:disable-next-line no-console
      console.error('Unknown worker message type', messageType);
  }
};
