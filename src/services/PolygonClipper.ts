import { Line } from 'common/Line';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

export class PolygonClipper {
  public clipPolygons(polygon1: Polygon, polygon2: Polygon) {
    if (polygon1.isConvex()) {
      return this.clipPolygon(polygon2, polygon1);
    } else if (polygon2.isConvex()) {
      return this.clipPolygon(polygon1, polygon2);
    }

    throw new Error('Both polygons are concave');
  }

  /**
   * @param subjectPolygon
   * @param clippingPolygon Must be convex
   */
  public clipPolygon(subjectPolygon: Polygon, clippingPolygon: Polygon) {
    const clippingPolygonCenter = clippingPolygon.getCenterOfGravity();

    let output: Point[] = subjectPolygon.getVertices();
    const clippingPolygonEdges: Line[] = [];
    const clippingPolygonVertices = clippingPolygon.getVertices();

    for (let i = 0; i < clippingPolygonVertices.length; i += 1) {
      const edge = new Line(
        clippingPolygonVertices[(i + 1) % clippingPolygonVertices.length],
        clippingPolygonVertices[i]
      );
      clippingPolygonEdges.push(edge);
    }

    for (const edge of clippingPolygonEdges) {
      const input = output;
      output = [];
      let pp = input[input.length - 1];

      input.forEach(p => {
        if (this.isSameSide(p, clippingPolygonCenter, edge)) {
          if (!this.isSameSide(pp, clippingPolygonCenter, edge)) {
            output.push(this.getIntersectionPoint(new Line(pp, p), edge));
          }
          output.push(p);
        } else {
          if (this.isSameSide(pp, clippingPolygonCenter, edge)) {
            output.push(this.getIntersectionPoint(new Line(pp, p), edge));
          }
        }
        pp = p;
      });
    }

    if (output.length === 0) {
      return null;
    }

    const outputWithoutDuplicates: Point[] = [];
    outputWithoutDuplicates.push(output[0]);
    for (let i = 1; i < output.length; i += 1) {
      if (
        !Point.epsilonEquals(output[i], outputWithoutDuplicates[outputWithoutDuplicates.length - 1])
      ) {
        outputWithoutDuplicates.push(output[i]);
      }
    }

    // tslint:disable-next-line no-bitwise
    const roundedPoints = outputWithoutDuplicates.map(point => point.floor());

    return new Polygon(roundedPoints, subjectPolygon.lineProperties);
  }

  private isSameSide(p1: Point, p2: Point, line: Line) {
    const p1Dir = line.getDirection(p1);
    const p2Dir = line.getDirection(p2);

    if (p1Dir === p2Dir || p1Dir === 0 || p2Dir === 0) {
      return true;
    }

    return false;
  }

  private getIntersectionPoint(line1: Line, line2: Line) {
    const direction1 = Point.subtract(line1.p2, line1.p1);
    const direction2 = Point.subtract(line2.p2, line2.p1);

    const dotPerp = direction1.x * direction2.y - direction1.y * direction2.x;

    const c = new Point(line2.p1.x - line1.p1.x, line2.p1.y - line1.p1.y);
    const t = (c.x * direction2.y - c.y * direction2.x) / dotPerp;

    return new Point(line1.p1.x + t * direction1.x, line1.p1.y + t * direction1.y);
  }
}
