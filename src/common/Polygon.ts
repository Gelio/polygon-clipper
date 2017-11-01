import { Line } from 'common/Line';
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

  public getCenterPoint() {
    let centerX = 0;
    let centerY = 0;

    this.getVertices().forEach(point => {
      centerX += point.x;
      centerY += point.y;
    });

    centerX /= this.getVerticesCount();
    centerY /= this.getVerticesCount();

    return new Point(centerX, centerY);
  }

  public isConvex() {
    let lastLine: Line | null = null;
    let lastDirection: number | null = null;

    for (const line of this.getLineIterator()) {
      if (!lastLine) {
        lastLine = line;
        continue;
      }

      const currentDirection = lastLine.getDirection(line.p2);
      lastLine = line;

      if (lastDirection === null && currentDirection !== 0) {
        lastDirection = currentDirection;
        continue;
      }

      if (currentDirection === 0) {
        continue;
      }

      if (currentDirection !== lastDirection) {
        return false;
      }
    }

    return true;
  }
}