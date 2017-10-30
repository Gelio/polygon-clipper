import { Color } from 'common/Color';
import { COLORS } from 'common/COLORS';

export class LineProperties {
  public color: Color;
  public thickness: number;

  constructor(color: Color, thickness: number) {
    this.color = color;
    this.thickness = thickness;
  }

  public static getDefault(): LineProperties {
    return new LineProperties(COLORS.BLACK, 1);
  }

  public clone(): LineProperties {
    return new LineProperties(this.color, this.thickness);
  }
}
