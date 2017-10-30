import { LineCondition } from 'conditions/LineCondition';

import { Line } from 'common/Line';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

import { configuration } from 'configuration';

export class FixedLengthLineCondition extends LineCondition {
  private readonly fixedLength: number;

  constructor(line: Line, polygon: Polygon, length: number) {
    super(line, polygon);

    this.fixedLength = length;
  }

  public isMet(): boolean {
    const lengthSquared = Point.getDistanceBetween(this.line.p1, this.line.p2);

    return Math.abs(lengthSquared - this.fixedLength) < configuration.epsilon;
  }

  public fix(lockedPoint: Point) {
    const freePoint = this.line.p1 === lockedPoint ? this.line.p2 : this.line.p1;

    const lengthBeforeFix = Point.getDistanceBetween(lockedPoint, freePoint);
    const ratio = this.fixedLength / lengthBeforeFix;

    const xDelta = freePoint.x - lockedPoint.x;
    const yDelta = freePoint.y - lockedPoint.y;

    freePoint.moveTo(lockedPoint.x + xDelta * ratio, lockedPoint.y + yDelta * ratio);
  }

  public duplicateForNewLine(line: Line, polygon: Polygon) {
    return new FixedLengthLineCondition(line, polygon, this.fixedLength);
  }

  public getLabel() {
    return this.fixedLength.toFixed(1);
  }

  public toSerializableObject() {
    return {
      name: FixedLengthLineCondition.name,
      p1Index: this.polygon.findPointIndex(this.line.p1),
      p2Index: this.polygon.findPointIndex(this.line.p2),
      fixedLength: this.fixedLength
    };
  }

  public verifyCanBeApplied() {
    return;
  }
}
