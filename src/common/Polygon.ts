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

  public getNextPointIndex(index: number) {
    return (index + 1) % this.getVerticesCount();
  }

  public getNextPoint(point: Point) {
    const index = this.vertices.indexOf(point);
    const nextPointIndex = this.getNextPointIndex(index);

    return this.getVertex(nextPointIndex);
  }

  public getPreviousPointIndex(index: number) {
    let previousPointIndex = index - 1;
    if (previousPointIndex < 0) {
      previousPointIndex = this.getVerticesCount() - 1;
    }

    return previousPointIndex;
  }

  public getPreviousPoint(point: Point) {
    const index = this.vertices.indexOf(point);
    const previousPointIndex = this.getPreviousPointIndex(index);

    return this.getVertex(previousPointIndex);
  }

  public removeVertex(point: Point) {
    if (this.getVerticesCount() === configuration.minPolygonPoints) {
      throw new Error('Cannot delete vertex');
    }

    super.removeVertex(point);
  }

  public moveTo(polygon: Polygon) {
    if (this.getVerticesCount() !== polygon.getVerticesCount()) {
      throw new Error('The number of vertices does not match');
    }

    this.vertices.forEach((point, index) => point.moveTo(polygon.getVertex(index)));
  }
}
