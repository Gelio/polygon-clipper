import { Line } from 'common/Line';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

export interface SerializableLineCondition {
  name: string;
  p1Index: number;
  p2Index: number;
  [property: string]: number | string;
}

export class LineCondition {
  public readonly line: Line;
  public readonly polygon: Polygon;

  constructor(line: Line, polygon: Polygon) {
    this.line = line;
    this.polygon = polygon;
  }

  public isMet(): boolean {
    throw new Error('LineCondition.isMet not implemented');
  }

  public fix(_lockedPoint: Point) {
    throw new Error('LineCondition.fix not implemented');
  }

  public duplicateForNewLine(_line: Line, _polygon: Polygon): LineCondition {
    throw new Error('Not implemented');
  }

  public verifyCanBeApplied() {
    throw new Error('Not implemented');
  }

  public getLabel(): string {
    throw new Error('Not implemented');
  }

  public toSerializableObject(): SerializableLineCondition {
    throw new Error('Not implemented');
  }
}
