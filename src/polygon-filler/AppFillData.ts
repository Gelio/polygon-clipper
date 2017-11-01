import { Color } from 'common/Color';
import { LightVersorType } from 'common/LightVersorType';

export interface AppFillData {
  backgroundTexture: ImageData;
  heightMap: ImageData;
  lightColor: Color;
  lightVersorType: LightVersorType;
  normalMap: ImageData;
}
