import { Point } from 'common/Point';

export class Line {
  public p1: Point;
  public p2: Point;

  constructor(p1: Point, p2: Point) {
    if (p1.equals(p2)) {
      throw new Error('Cannot create line between points at the same coordinates');
    }

    this.p1 = p1;
    this.p2 = p2;
  }

  public distanceToPoint(p: Point): number {
    const pointProjection = this.projectPoint(p);

    return Point.getDistanceBetween(p, pointProjection);
  }

  public projectPoint(p: Point) {
    const p1 = this.p1;
    const p2 = this.p2;

    let t =
      ((p.x - p1.x) * (p2.x - p1.x) + (p.y - p1.y) * (p2.y - p1.y)) /
      Point.getDistanceBetweenSquared(p1, p2);
    t = Math.max(0, Math.min(1, t));

    return new Point(p1.x + t * (p2.x - p1.x), p1.y + t * (p2.y - p1.y));
  }

  public equals(line: Line): boolean {
    return (
      (this.p1.equals(line.p1) && this.p2.equals(line.p2)) ||
      (this.p1.equals(line.p2) && this.p2.equals(line.p1))
    );
  }

  public getMiddlePoint(): Point {
    return new Point((this.p1.x + this.p2.x) / 2, (this.p1.y + this.p2.y) / 2);
  }

  public getLength() {
    return Point.getDistanceBetween(this.p1, this.p2);
  }
}
