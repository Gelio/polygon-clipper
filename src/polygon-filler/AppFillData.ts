import { LightVersorType } from 'common/LightVersorType';
import { Vector3 } from 'common/Vector3';

export interface AppFillData {
  backgroundTexture: ImageData;
  heightMap: ImageData;
  lightColor: Vector3;
  lightVersorType: LightVersorType;
  normalMap: ImageData;
}
