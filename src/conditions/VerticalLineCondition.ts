import { Line } from 'common/Line';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';
import { LineCondition } from 'conditions/LineCondition';
import { configuration } from 'configuration';

const maxDeviation = configuration.lineDeviationAllowanceInDegrees;

const allowedDegreeRanges = [
  [90 - maxDeviation, 90 + maxDeviation],
  [270 - maxDeviation, 270 + maxDeviation]
];

export class VerticalLineCondition extends LineCondition {
  public isMet(): boolean {
    return this.line.p1.x === this.line.p2.x;
  }

  public fix(lockedPoint: Point) {
    if (lockedPoint === this.line.p1) {
      this.alignPointsVertically(this.line.p2, this.line.p1);
    } else if (lockedPoint === this.line.p2) {
      this.alignPointsVertically(this.line.p1, this.line.p2);
    } else {
      throw new Error('Locked point does not match either point on the line');
    }
  }

  public duplicateForNewLine(line: Line, polygon: Polygon) {
    return new VerticalLineCondition(line, polygon);
  }

  public verifyCanBeApplied() {
    const angle = Point.getAngle(this.line.p1, this.line.p2);

    if (!allowedDegreeRanges.some(degreeRange => angle >= degreeRange[0] && angle <= degreeRange[1])) {
      throw new Error('Line is not vertical enough');
    }
  }

  public getLabel() {
    return '|';
  }

  public toSerializableObject() {
    return {
      name: VerticalLineCondition.name,
      p1Index: this.polygon.findPointIndex(this.line.p1),
      p2Index: this.polygon.findPointIndex(this.line.p2)
    };
  }

  private alignPointsVertically(subject: Point, destination: Point) {
    subject.moveTo(new Point(destination.x, subject.y));
  }
}
