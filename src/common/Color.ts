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

  public static fromHexString(hexString: string) {
    console.log(hexString);
    const redPart = hexString.slice(1, 3);
    const greenPart = hexString.slice(3, 5);
    const bluePart = hexString.slice(5, 7);

    const red = parseInt(redPart, 16);
    const green = parseInt(greenPart, 16);
    const blue = parseInt(bluePart, 16);

    return new Color(red, green, blue);
  }
}
