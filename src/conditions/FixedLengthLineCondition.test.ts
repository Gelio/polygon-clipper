import { FixedLengthLineCondition } from 'conditions/FixedLengthLineCondition';

import { Line } from 'common/Line';
import { LineProperties } from 'common/LineProperties';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

describe('FixedLengthLineCondition', () => {
  let polygon: Polygon;

  beforeEach(() => {
    const points = [new Point(-10, -10), new Point(-15, -15), new Point(0, 0)];
    polygon = new Polygon(points, LineProperties.getDefault());
  });

  it('should instantiate without errors', () => {
    const p1 = new Point(1, 2);
    const p2 = new Point(1, 5);
    const line = new Line(p1, p2);
    polygon.addVertex(p1);
    polygon.addVertex(p2);

    expect(new FixedLengthLineCondition(line, polygon, 3)).toBeDefined();
  });

  describe('itMet', () => {
    it('should return true when the condition is met', () => {
      const p1 = new Point(1, 2);
      const p2 = new Point(1, 5);
      const line = new Line(p1, p2);
      polygon.addVertex(p1);
      polygon.addVertex(p2);

      const condition = new FixedLengthLineCondition(line, polygon, 3);

      expect(condition.isMet()).toBe(true);
    });

    it('should return false when the condition is not met', () => {
      const p1 = new Point(1, 2);
      const p2 = new Point(1, 8);
      const line = new Line(p1, p2);
      polygon.addVertex(p1);
      polygon.addVertex(p2);

      const condition = new FixedLengthLineCondition(line, polygon, 3);

      expect(condition.isMet()).toBe(false);
    });
  });
});
