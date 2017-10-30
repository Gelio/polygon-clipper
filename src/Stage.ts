import { HitTestResult } from 'common/HitTestResult';
import { Layer } from 'common/Layer';
import { Point } from 'common/Point';
import { Renderer } from 'Renderer';

export class Stage {
  public layers: Layer[] = [];

  public render(renderer: Renderer) {
    this.layers.forEach(layer => layer.render(renderer));
  }

  public removeLayer(layer: Layer) {
    const index = this.layers.indexOf(layer);
    if (index === -1) {
      return;
    }

    this.layers.splice(index, 1);
  }

  public hitTest(point: Point): HitTestResult | null {
    for (const layer of this.layers) {
      const result = layer.hitTest(point);
      if (!result) {
        continue;
      }

      return result;
    }

    return null;
  }

  public findLayerByName(name: string): Layer {
    const foundLayer = this.layers.find(layer => layer.name === name);

    if (!foundLayer) {
      throw new Error(`Layer with name ${name} does not exist`);
    }

    return foundLayer;
  }
}
