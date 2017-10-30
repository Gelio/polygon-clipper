export class Color {
  public readonly r: number;
  public readonly g: number;
  public readonly b: number;
  public readonly fillStyle: string;

  constructor(r: number, b: number, g: number) {
    this.r = r;
    this.b = b;
    this.g = g;

    this.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
