export class Color {
  public readonly r: number;
  public readonly g: number;
  public readonly b: number;
  public readonly fillStyle: string;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;

    this.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  public static fromHexString(hexString: string) {
    const redPart = hexString.slice(1, 3);
    const greenPart = hexString.slice(3, 5);
    const bluePart = hexString.slice(5, 7);

    const red = parseInt(redPart, 16);
    const green = parseInt(greenPart, 16);
    const blue = parseInt(bluePart, 16);

    return new Color(red, green, blue);
  }

  private static integerToPaddedHex(integer: number) {
    const hex = integer.toString(16);

    if (hex.length === 1) {
      return ` ${hex}`;
    } else {
      return hex;
    }
  }

  public toHexString() {
    const redPart = Color.integerToPaddedHex(this.r);
    const greenPart = Color.integerToPaddedHex(this.g);
    const bluePart = Color.integerToPaddedHex(this.b);

    return `#${redPart + bluePart + greenPart}`;
  }
}
