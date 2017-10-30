import { Octant } from 'common/Octant';

type MoveCallback = () => void;

export class Point {
  public moveCallback: MoveCallback | null = null;

  private _x: number;
  private _y: number;

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public static add(p1: Point, p2: Point): Point {
    return new Point(p1.x + p2.x, p1.y + p2.y);
  }

  public static subtract(p1: Point, p2: Point): Point {
    return new Point(p1.x - p2.x, p1.y - p2.y);
  }

  public static getDistanceBetween(p1: Point, p2: Point): number {
    return Math.sqrt(Point.getDistanceBetweenSquared(p1, p2));
  }

  public static getDistanceBetweenSquared(p1: Point, p2: Point): number {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

  public static getAngle(p1: Point, p2: Point): number {
    let angle = (Math.atan2(p2.y - p1.y, p2.x - p1.x)) * 180 / Math.PI;

    if (angle < 0) {
      angle += 360;
    }

    return angle;
  }

  public moveTo(point: Point): void;
  public moveTo(x: number, y: number): void;
  public moveTo(pointOrX: Point | number, y?: number) {
    if (typeof pointOrX === 'number') {
      if (!y) {
        throw new Error('x is defined, but y is not defined');
      }

      return this.moveToCoordinates(pointOrX, y);
    }

    return this.moveToPoint(pointOrX);
  }

  public getOctant(): Octant {
    const x = this.x;
    const y = this.y;
    let octant = Octant.First;

    if (y >= 0) {
      if (x >= 0) {
        // First quarter
        if (y <= x) {
          octant = Octant.First;
        } else {
          octant = Octant.Second;
        }
      } else {
        // Second quarter
        if (y >= -x) {
          octant = Octant.Third;
        } else {
          octant = Octant.Fourth;
        }
      }
    } else {
      if (x <= 0) {
        // Third quarter
        if (y >= x) {
          octant = Octant.Fifth;
        } else {
          octant = Octant.Sixth;
        }
      } else {
        // Fourth quarter
        if (y < -x) {
          octant = Octant.Seventh;
        } else {
          octant = Octant.Eighth;
        }
      }
    }

    return octant;
  }

  public equals(point: Point): boolean {
    return this.x === point.x && this.y === point.y;
  }

  public getDistanceTo(point: Point): number {
    return Point.getDistanceBetween(this, point);
  }

  public getDistanceSquaredTo(point: Point): number {
    return Point.getDistanceBetweenSquared(this, point);
  }

  public clone() {
    return new Point(this.x, this.y);
  }

  private moveToPoint(point: Point) {
    return this.moveToCoordinates(point.x, point.y);
  }

  private moveToCoordinates(x: number, y: number) {
    this._x = x;
    this._y = y;

    if (this.moveCallback) {
      this.moveCallback();
    }
  }
}
