import { Point } from 'common/Point';
import { octantVectorTransformations, reverseOctantVectorTransformations } from 'line-rasterizer/octant-vector-transformations';

export class LineRasterizer {
  public rasterizeLine(
    startPoint: Point,
    endPoint: Point,
    thickness: number
  ): Point[] {
    const translationVector = Point.subtract(endPoint, startPoint);
    const translationVectorOctant = translationVector.getOctant();
    const vectorTransformation =
      octantVectorTransformations[translationVectorOctant];
    const reverseVectorTransformation =
      reverseOctantVectorTransformations[translationVectorOctant];

    const rasterizedTransformedLine = this.rasterizeLineFirstQuadrant(
      vectorTransformation(translationVector),
      thickness
    );

    return rasterizedTransformedLine.map(point =>
      Point.add(reverseVectorTransformation(point), startPoint)
    );
  }

  private rasterizeLineFirstQuadrant(endPoint: Point, thickness: number) {
    const rasterizedLine: Point[] = [];

    const dx = endPoint.x;
    const dy = endPoint.y;
    const incrementE = 2 * dy;
    const incrementNE = 2 * (dy - dx);

    let d = 2 * dy - dx;
    let x = 0;
    let y = 0;
    for (const point of this.getThickPointsIteratorInFirstQuadrant(
      new Point(x, y),
      thickness
    )) {
      rasterizedLine.push(point);
    }

    while (x < endPoint.x) {
      if (d < 0) {
        d += incrementE;
      } else {
        d += incrementNE;
        y += 1;
      }
      x += 1;

      for (const point of this.getThickPointsIteratorInFirstQuadrant(
        new Point(x, y),
        thickness
      )) {
        rasterizedLine.push(point);
      }
    }

    return rasterizedLine;
  }

  private *getThickPointsIteratorInFirstQuadrant(
    point: Point,
    thickness: number
  ) {
    let dy = 1;

    yield point;

    for (
      let currentThickness = 1;
      currentThickness < thickness;
      currentThickness += 1
    ) {
      yield new Point(point.x, point.y + dy);
      dy = -dy;

      if (dy > 0) {
        dy += 1;
      }
    }
  }
}
