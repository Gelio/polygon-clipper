import { LightType } from 'common/LightType';
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
    const { canvasImageData } = this.state;

    const lightVersor = this.getLightVersor(x, y);

    const distributedComponent = this.getDistributedComponent(lightVersor, x, y);
    const reflectiveComponent = this.getReflectiveComponent(lightVersor, x, y);

    // if (x === 500) {
    //   console.log(reflectiveComponent);
    // }

    const result = Vector3.add(distributedComponent, reflectiveComponent).floor();

    const index = (x + y * canvasImageData.width) * 4;
    canvasImageData.data[index] = Math.min(255, result.x);
    canvasImageData.data[index + 1] = Math.min(255, result.y);
    canvasImageData.data[index + 2] = Math.min(255, result.z);
    canvasImageData.data[index + 3] = 255;
  }

  private getDistributedComponent(lightVersor: Vector3, x: number, y: number) {
    const { textureVectorsWithLightColor, distortedNormalVectors, kD } = this.state;

    const textureVectorWithLightColor = textureVectorsWithLightColor[x][y];
    const distortedNormalVector = distortedNormalVectors[x][y];

    // cos theta = v1 * v2 / (norm(v1) * norm(v2))
    // Since lightDirectionVersor and distortedNormalVector are unit vectors, cos theta is just
    // a dot product
    const cosTheta = Vector3.dotProduct(lightVersor, distortedNormalVector);
    const clampedCosTheta = Math.max(0, Math.min(1, cosTheta));

    return textureVectorWithLightColor.multiply(clampedCosTheta * kD);
  }

  private getReflectiveComponent(lightVersor: Vector3, x: number, y: number) {
    const { viewerVector, m, kS, distortedNormalVectors } = this.state;
    const lightColor = this.state.appFillData.lightColor;

    const nPrim = distortedNormalVectors[x][y];
    const rVector = Vector3.subtract(
      nPrim.multiply(2 * Vector3.dotProduct(nPrim, lightVersor)),
      lightVersor
    );

    const cosReflective = Vector3.dotProduct(rVector, viewerVector);
    const clampedCosReflective = Math.max(0, cosReflective);

    return lightColor.multiply(Math.pow(clampedCosReflective, m) * kS * 255);
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
