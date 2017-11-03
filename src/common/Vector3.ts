import { Color } from 'common/Color';

const MAX_COLOR = 255;

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
    return new Vector3(color.r / MAX_COLOR, color.g / MAX_COLOR, color.b / MAX_COLOR);
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

  public static fromNormalMap(r: number, g: number, b: number): Vector3 {
    const x = r / 255 * 2 - 1;
    const y = g / 255 * 2 - 1;
    const z = b / 255;

    return new Vector3(x, y, z);
  }

  public static multiplyComponents(v1: Vector3, v2: Vector3) {
    return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
  }

  public toColor(): Color {
    const r = Math.floor(this.x * MAX_COLOR);
    const g = Math.floor(this.y * MAX_COLOR);
    const b = Math.floor(this.z * MAX_COLOR);

    return new Color(r, g, b);
  }

  public normalize() {
    const length = this.getLength();

    return new Vector3(this.x / length, this.y / length, this.z / length);
  }

  public multiply(scale: number) {
    return new Vector3(this.x * scale, this.y * scale, this.z * scale);
  }

  public getLength() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  public clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  public invert() {
    return new Vector3(-this.x, -this.y, -this.z);
  }

  public floor() {
    const x = Math.floor(this.x);
    const y = Math.floor(this.y);
    const z = Math.floor(this.z);

    return new Vector3(x, y, z);
  }
}
