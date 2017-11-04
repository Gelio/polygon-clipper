import { Vector3 } from 'common/Vector3';

import { FillWorkerState } from 'workers/polygon-fill-worker/FillWorkerState';

export class VectorMapPreparer {
  private state: FillWorkerState;

  constructor(state: FillWorkerState) {
    this.state = state;
  }

  public performInitialPreparation() {
    this.prepareTextureVectors();
    this.prepareTextureVectorsWithLightColor();
    this.prepareNormalVectors();
    this.prepareBumpVectors();
    this.applyBumpVectors();
  }

  public prepareTextureVectors() {
    const state = this.state;
    state.textureVectors = [];
    const backgroundTexture = state.appFillData.backgroundTexture;

    for (let x = 0; x < state.canvasWidth; x += 1) {
      const backgroundTextureX = x % backgroundTexture.width;
      state.textureVectors.push([]);

      for (let y = 0; y < state.canvasWidth; y += 1) {
        const backgroundTextureY = y % backgroundTexture.height;

        const index = (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;
        const r = backgroundTexture.data[index];
        const g = backgroundTexture.data[index + 1];
        const b = backgroundTexture.data[index + 2];

        state.textureVectors[x].push(new Vector3(r, g, b));
      }
    }
  }

  public prepareNormalVectors() {
    const state = this.state;
    state.normalVectors = [];
    const normalMap = state.appFillData.normalMap;

    for (let x = 0; x < state.canvasWidth; x += 1) {
      const normalMapX = x % normalMap.width;
      state.normalVectors.push([]);

      for (let y = 0; y < state.canvasWidth; y += 1) {
        const normalMapY = y % normalMap.height;

        const index = (normalMapX + normalMapY * normalMap.width) * 4;
        const r = normalMap.data[index];
        const g = normalMap.data[index + 1];
        const b = normalMap.data[index + 2];

        const normalVector = Vector3.fromNormalMap(r, g, b);
        const scale = 1 / normalVector.z; // [Nx, Ny, 1]
        state.normalVectors[x].push(normalVector.multiply(scale));
      }
    }
  }

  public prepareBumpVectors() {
    const state = this.state;
    state.bumpVectors = [];
    const heightMap = state.appFillData.heightMap;
    const maxHeightMapX = heightMap.width - 1;
    const maxHeightMapY = heightMap.height - 1;

    for (let x = 0; x < state.canvasWidth; x += 1) {
      const heightMapX = x % heightMap.width;
      state.bumpVectors.push([]);

      for (let y = 0; y < state.canvasWidth; y += 1) {
        const heightMapY = y % heightMap.height;
        const index = (heightMapX + heightMapY * heightMap.width) * 4;

        let dhx = 0; // = H[x + 1, y] - H[x, y]
        let dhy = 0; // = H[x, y+1] - H[x, y]

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

        const normalVector = state.normalVectors[x][y];
        const t = new Vector3(1, 0, -normalVector.x);
        const b = new Vector3(0, 1, -normalVector.y);

        const d = Vector3.add(t.multiply(dhx), b.multiply(dhy));
        state.bumpVectors[x].push(d);
      }
    }
  }

  public applyBumpVectors() {
    const state = this.state;
    state.distortedNormalVectors = [];

    for (let x = 0; x < state.canvasWidth; x += 1) {
      state.distortedNormalVectors.push([]);

      for (let y = 0; y < state.canvasHeight; y += 1) {
        state.distortedNormalVectors[x].push(
          Vector3.add(state.normalVectors[x][y], state.bumpVectors[x][y]).normalize()
        );
      }
    }
  }

  public prepareTextureVectorsWithLightColor() {
    const state = this.state;
    state.textureVectorsWithLightColor = [];

    for (let x = 0; x < state.canvasWidth; x += 1) {
      state.textureVectorsWithLightColor.push([]);

      for (let y = 0; y < state.canvasHeight; y += 1) {
        state.textureVectorsWithLightColor[x].push(
          Vector3.multiplyComponents(
            state.textureVectors[x][y],
            state.appFillData.lightColor
          ).floor()
        );
      }
    }
  }
}
