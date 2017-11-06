import { Vector3 } from 'common/Vector3';

export interface AppFillData {
  backgroundTexture: ImageData;
  heightMap: ImageData;
  heightMapIntensity: number;
  lightColor: Vector3;
  normalMap: ImageData;
}
