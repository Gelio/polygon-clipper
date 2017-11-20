import { LightType } from 'common/LightType';
import { Vector3 } from 'common/Vector3';

import { AppFillData } from 'polygon-filler/AppFillData';
import { Vector3Map } from 'workers/polygon-fill-worker/Vector3Map';

export interface FillWorkerState {
  appFillData: AppFillData;
  canvasWidth: number;
  canvasHeight: number;
  canvasImageData: ImageData;

  lightPosition: Vector3;
  lightType: LightType;

  initializationValue: number;

  textureVectors: Vector3Map;
  textureVectorsWithLightColor: Vector3Map;
  normalVectors: Vector3Map;
  bumpVectors: Vector3Map;
  distortedNormalVectors: Vector3Map;

  viewerVector: Vector3;
  kD: number;
  kS: number;
  m: number;
}
