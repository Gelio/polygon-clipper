import { HitTestResult } from 'common/HitTestResult';
import { Line } from 'common/Line';
import { LineProperties } from 'common/LineProperties';
import { Point } from 'common/Point';
import { configuration } from 'configuration';

export interface SerializablePath {
  lineProperties: LineProperties;
  closed: boolean;
  vertices: {
    x: number;
    y: number;
  }[];
}

export class Path {
  public closed: boolean = false;
  public lineProperties: LineProperties;
  protected readonly vertices: Point[];

  constructor(vertices: Point[], lineProperties: LineProperties) {
    this.vertices = vertices;
    this.lineProperties = lineProperties;
  }

  public static fromSerializablePath(serializablePath: SerializablePath) {
    const realPoints = serializablePath.vertices.map(vertex => new Point(vertex.x, vertex.y));
    const realLineProperties = new LineProperties(
      serializablePath.lineProperties.color,
      serializablePath.lineProperties.thickness
    );
    const path = new Path(realPoints, realLineProperties);
    path.closed = serializablePath.closed;

    return path;
  }

  public *getVerticesIterator() {
    const verticesCount = this.vertices.length;
    for (let i = 0; i < verticesCount; i += 1) {
      yield this.vertices[i];
    }

    if (this.closed && verticesCount > 0) {
      yield this.vertices[0];
    }
  }

  public *getLineIterator() {
    let previousPoint;

    for (const point of this.getVerticesIterator()) {
      if (!previousPoint) {
        previousPoint = point;
        continue;
      }

      yield new Line(previousPoint, point);
      previousPoint = point;
    }
  }

  public getStartingPoint() {
    return this.vertices[0];
  }

  public getVerticesCount() {
    return this.vertices.length;
  }

  public getLineProperties() {
    return this.lineProperties;
  }

  public hitTest(point: Point): HitTestResult | null {
    for (const line of this.getLineIterator()) {
      if (line.distanceToPoint(point) <= configuration.hitTolerance) {
        return new HitTestResult(line, this);
      }
    }

    return null;
  }

  public getVertex(index: number): Point {
    return this.vertices[index];
  }

  public getVertices(): Point[] {
    return this.vertices;
  }

  public addVertex(point: Point) {
    this.vertices.push(point);
  }

  public removeVertex(point: Point) {
    const index = this.findPointIndex(point);

    if (index !== -1) {
      this.vertices.splice(index, 1);
    }
  }

  public insertVertex(point: Point, index: number) {
    this.vertices.splice(index, 0, point);
  }

  public clone(): Path {
    const vertices = [...this.getVertices().map(point => point.clone())];
    const lineProperties = this.lineProperties.clone();

    return new Path(vertices, lineProperties);
  }

  public findPointIndex(point: Point) {
    return this.vertices.indexOf(point);
  }

  public getBoundingBox() {
    let minX = Infinity;
    let maxX = 0;
    let minY = Infinity;
    let maxY = 0;

    this.vertices.forEach(point => {
      if (point.x < minX) {
        minX = point.x;
      }
      if (point.x > maxX) {
        maxX = point.x;
      }
      if (point.y < minY) {
        minY = point.y;
      }
      if (point.y > maxY) {
        maxY = point.y;
      }
    });

    return {
      minX,
      maxX,
      minY,
      maxY
    };
  }

  public isPointInBoundingBox(point: Point) {
    const boundingBox = this.getBoundingBox();

    return (
      point.x >= boundingBox.minX &&
      point.x <= boundingBox.maxX &&
      point.y >= boundingBox.minY &&
      point.y <= boundingBox.maxY
    );
  }

  public toSerializableObject(): SerializablePath {
    return {
      lineProperties: this.lineProperties.clone(),
      closed: this.closed,
      vertices: this.vertices.map(vertex => ({
        x: vertex.x,
        y: vertex.y
      }))
    };
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

  public moveTo(path: Path) {
    if (this.getVerticesCount() !== path.getVerticesCount()) {
      throw new Error('The number of vertices does not match');
    }

    if (this.closed !== path.closed) {
      throw new Error("Path's closed state does not match");
    }

    this.vertices.forEach((point, index) => point.moveTo(path.getVertex(index)));
  }

  public getCenterOfGravity() {
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

  public getBoundingBoxCenter() {
    const boundingBox = this.getBoundingBox();

    const centerX = (boundingBox.maxX + boundingBox.minX) / 2;
    const centerY = (boundingBox.maxY + boundingBox.minY) / 2;

    return new Point(centerX, centerY);
  }
}
