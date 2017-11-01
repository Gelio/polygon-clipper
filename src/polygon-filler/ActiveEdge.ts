import { Point } from 'common/Point';

export class ActiveEdge {
  public lowerPoint: Point;
  public higherPoint: Point;

  private inverseSlope: number;
  private _x: number;

  constructor(lowerPoint: Point, higherPoint: Point) {
    this.lowerPoint = lowerPoint;
    this.higherPoint = higherPoint;

    this._x = this.lowerPoint.x;
    this.calculateSlope();
  }

  public get x() {
    return this._x;
  }

  public nextScanLine() {
    this._x += this.inverseSlope;
  }

  private calculateSlope() {
    if (this.higherPoint.y === this.lowerPoint.y) {
      this.inverseSlope = 99999999999;
    } else {
      this.inverseSlope = (this.higherPoint.x - this.lowerPoint.x) / (this.higherPoint.y - this.lowerPoint.y);
    }
  }
}
