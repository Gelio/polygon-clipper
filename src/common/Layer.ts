import { HitTestResult } from 'common/HitTestResult';
import { Path, SerializablePath } from 'common/Path';
import { Point } from 'common/Point';
import { Polygon, SerializablePolygon } from 'common/Polygon';
import { Renderer } from 'Renderer';

export interface SerializableLayer {
  name: string;
  paths: (SerializablePath | SerializablePolygon)[];
}

export class Layer {
  public paths: Path[] = [];
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public render(renderer: Renderer) {
    this.paths.forEach(path => renderer.drawPath(path));
  }

  public removePath(path: Path) {
    const index = this.paths.indexOf(path);
    if (index === -1) {
      return;
    }

    this.paths.splice(index, 1);
  }

  public hitTest(point: Point): HitTestResult | null {
    for (const path of this.paths) {
      const result = path.hitTest(point);
      if (!result) {
        continue;
      }

      result.layer = this;

      return result;
    }

    return null;
  }

  public toSerializableObject(): SerializableLayer {
    return {
      name: this.name,
      paths: this.paths.map(path => path.toSerializableObject())
    };
  }

  public fromSerializableObject(serializableLayer: SerializableLayer) {
    this.name = serializableLayer.name;

    this.paths.splice(0, this.paths.length);

    serializableLayer.paths.forEach(serializablePath => {
      let pathOrPolygon: Path | Polygon;
      if (!serializablePath.closed) {
        pathOrPolygon = Path.fromSerializablePath(serializablePath);
      } else {
        pathOrPolygon = Polygon.fromSerializablePolygon(<SerializablePolygon>serializablePath);
      }

      this.paths.push(pathOrPolygon);
    });
  }
}
