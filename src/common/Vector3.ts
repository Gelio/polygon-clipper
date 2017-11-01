import { Color } from 'common/Color';

export class Vector3 {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public static fromColor(color: Color): Vector3 {
    return new Vector3(color.r, color.g, color.b);
  }

  public static add(v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }

  public static subtract(v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
  }

  public static crossProduct(v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

  public static dotProduct(v1: Vector3, v2: Vector3): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  public static cosineAngle(v1: Vector3, v2: Vector3): number {
    const dotProduct = Vector3.dotProduct(v1, v2);
    const length1 = v1.getLength();
    const length2 = v2.getLength();

    return dotProduct / (length1 * length2);
  }

  public toColor(): Color {
    return new Color(this.x, this.y, this.z);
  }

  public normalize() {
    const length = this.getLength();

    this.x /= length;
    this.y /= length;
    this.z /= length;
  }

  public getLength() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  public clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  public invert() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
  }
}
