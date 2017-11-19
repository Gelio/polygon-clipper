import { LightType } from 'common/LightType';
import { NormalMapType } from 'common/NormalMapType';
import { Vector3 } from 'common/Vector3';

import { FillStrip } from 'polygon-filler/FillStrip';
import { FillWorkerState } from 'workers/polygon-fill-worker/FillWorkerState';

export class FillWorkerFiller {
  private state: FillWorkerState;

  constructor(state: FillWorkerState) {
    this.state = state;
  }

  public fillStrips(strips: FillStrip[]) {
    strips.forEach(strip => {
      const fromX = Math.max(Math.floor(strip.fromX), 0);
      const toX = Math.min(Math.floor(strip.toX), this.state.canvasWidth - 1);

      for (let x = fromX; x <= toX; x += 1) {
        this.putPixel(x, strip.y);
      }
    });
  }

  private putPixel(x: number, y: number) {
    const { textureVectorsWithLightColor, canvasImageData } = this.state;

    const textureVectorWithLightColor = textureVectorsWithLightColor[x][y];
    const distortedNormalVector = this.getDistortedNormalVector(x, y);
    const lightVersor = this.getLightVersor(x, y);

    // cos theta = v1 * v2 / (norm(v1) * norm(v2))
    // Since lightDirectionVersor and distortedNormalVector are unit vectors, cos theta is just
    // a dot product
    const cosTheta = Vector3.dotProduct(lightVersor, distortedNormalVector);
    const clampedCosTheta = Math.max(0, Math.min(1, cosTheta));

    const result = textureVectorWithLightColor.multiply(clampedCosTheta).floor();

    const index = (x + y * canvasImageData.width) * 4;
    canvasImageData.data[index] = result.x;
    canvasImageData.data[index + 1] = result.y;
    canvasImageData.data[index + 2] = result.z;
    canvasImageData.data[index + 3] = 255;
  }

  private getDistortedNormalVector(x: number, y: number): Vector3 {
    if (this.state.normalMapType === NormalMapType.Stationary) {
      return this.state.distortedNormalVectors[x][y];
    }
    const normalMapCenter = this.state.normalMapCenter;

    const mousePosition = this.state.mousePosition;
    const bumpVector = this.state.bumpVectors[x][y];
    let normalVectorX =
      (x - mousePosition.x + normalMapCenter.x) % this.state.appFillData.normalMap.width;
    let normalVectorY =
      (y - mousePosition.y + normalMapCenter.y) % this.state.appFillData.normalMap.height;

    if (normalVectorX < 0) {
      normalVectorX += this.state.appFillData.normalMap.width;
    }

    if (normalVectorY < 0) {
      normalVectorY += this.state.appFillData.normalMap.height;
    }

    const normalVector = this.state.normalVectors[normalVectorX][normalVectorY];

    return Vector3.add(normalVector, bumpVector).normalize();
  }

  private getLightVersor(x: number, y: number): Vector3 {
    if (this.state.lightType === LightType.Constant) {
      return this.state.lightPosition;
    }

    // Moving light type
    const lightDirectionVector = Vector3.subtract(this.state.lightPosition, new Vector3(x, y, 0));

    return lightDirectionVector.normalize();
  }
}
