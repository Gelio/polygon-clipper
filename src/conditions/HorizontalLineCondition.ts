import { Line } from 'common/Line';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';
import { LineCondition } from 'conditions/LineCondition';
import { configuration } from 'configuration';

const maxDeviation = configuration.lineDeviationAllowanceInDegrees;

const allowedDegreeRanges = [
  [0, maxDeviation],
  [180 - maxDeviation, 180 + maxDeviation],
  [360 - maxDeviation, 360]
];

export class HorizontalLineCondition extends LineCondition {
  public isMet(): boolean {
    return this.line.p1.y === this.line.p2.y;
  }

  public fix(lockedPoint: Point) {
    if (lockedPoint === this.line.p1) {
      this.alignPointsHorizontally(this.line.p2, this.line.p1);
    } else if (lockedPoint === this.line.p2) {
      this.alignPointsHorizontally(this.line.p1, this.line.p2);
    } else {
      throw new Error('Locked point does not match either point on the line');
    }
  }

  public duplicateForNewLine(line: Line, polygon: Polygon) {
    return new HorizontalLineCondition(line, polygon);
  }

  public verifyCanBeApplied() {
    const angle = Point.getAngle(this.line.p1, this.line.p2);

    if (!allowedDegreeRanges.some(degreeRange => angle >= degreeRange[0] && angle <= degreeRange[1])) {
      throw new Error('Line is not horizontal enough');
    }
  }

  public getLabel() {
    return '-';
  }

  public toSerializableObject() {
    return {
      name: HorizontalLineCondition.name,
      p1Index: this.polygon.findPointIndex(this.line.p1),
      p2Index: this.polygon.findPointIndex(this.line.p2)
    };
  }

  private alignPointsHorizontally(subject: Point, destination: Point) {
    subject.moveTo(new Point(subject.x, destination.y));
  }
}
