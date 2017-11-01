import { LineProperties } from 'common/LineProperties';
import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { configuration } from 'configuration';

export class Polygon extends Path {
  constructor(path: Path);
  constructor(vertices: Point[], lineProperties: LineProperties);

  constructor(pathOrVertices: Path | Point[], lineProperties?: LineProperties) {
    let vertices: Point[];

    if (pathOrVertices instanceof Path) {
      const path = pathOrVertices;
      vertices = path.getVertices();
      lineProperties = path.lineProperties;
    } else {
      vertices = pathOrVertices;
      lineProperties = <LineProperties>lineProperties;
    }

    Polygon.ensureVerticesLength(vertices);
    super(vertices, lineProperties);
    this.closed = true;
  }

  private static ensureVerticesLength(vertices: Point[]) {
    if (vertices.length >= configuration.minPolygonPoints) {
      return;
    }

    throw new Error(`Polygon must have at least ${configuration.minPolygonPoints} vertices`);
  }

  public clone(): Polygon {
    return new Polygon(super.clone());
  }

  public removeVertex(point: Point) {
    if (this.getVerticesCount() === configuration.minPolygonPoints) {
      throw new Error('Cannot delete vertex');
    }

    super.removeVertex(point);
  }
}
