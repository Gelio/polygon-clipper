import { HorizontalLineCondition } from 'conditions/HorizontalLineCondition';
import { LineCondition } from 'conditions/LineCondition';
import { VerticalLineCondition } from 'conditions/VerticalLineCondition';

import { Line } from 'common/Line';
import { Polygon } from 'common/Polygon';

const forbiddenConditionCombinations = [
  [HorizontalLineCondition, HorizontalLineCondition],
  [VerticalLineCondition, VerticalLineCondition]
];

export class ConditionMatcher {
  public verifyConditionAllowed(condition: LineCondition) {
    const polygon = condition.polygon;
    const line = condition.line;

    const p1Index = polygon.findPointIndex(line.p1);
    const previousPoint = polygon.getVertex(this.getPreviousPointIndex(p1Index, polygon));
    const p2Index = polygon.findPointIndex(line.p2);
    const nextPoint = polygon.getVertex(this.getNextPointIndex(p2Index, polygon));

    const previousLine = new Line(previousPoint, line.p1);
    const nextLine = new Line(line.p2, nextPoint);

    const lineConditions = polygon.getLineConditions();
    const previousLineConditions = lineConditions.filter(lineCondition =>
      lineCondition.line.equals(previousLine)
    );
    const nextLineConditions = lineConditions.filter(lineCondition =>
      lineCondition.line.equals(nextLine)
    );

    this.verifyNotForbiddenCombination(previousLineConditions, condition);
    this.verifyNotForbiddenCombination(nextLineConditions, condition);
  }

  public checkForbiddenCombination(constructor1: Function, constructor2: Function) {
    return forbiddenConditionCombinations.find(
      combination =>
        (constructor1 === combination[0] && constructor2 === combination[1]) ||
        (constructor1 === combination[1] && constructor2 === combination[0])
    );
  }

  private verifyNotForbiddenCombination(
    lineConditions: LineCondition[],
    singleCondition: LineCondition
  ) {
    for (const lineCondition of lineConditions) {
      const forbiddenCondition = this.checkForbiddenCombination(
        lineCondition.constructor,
        singleCondition.constructor
      );

      if (forbiddenCondition) {
        throw new Error(
          `Forbidden combination: ${forbiddenCondition[0].name}, ${forbiddenCondition[1].name}`
        );
      }
    }
  }

  private getPreviousPointIndex(currentIndex: number, polygon: Polygon) {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = polygon.getVerticesCount() - 1;
    }

    return currentIndex;
  }

  private getNextPointIndex(currentIndex: number, polygon: Polygon) {
    return (currentIndex + 1) % polygon.getVerticesCount();
  }
}
