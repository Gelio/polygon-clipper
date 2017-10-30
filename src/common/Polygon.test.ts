import { LineProperties } from 'common/LineProperties';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

describe('Polygon', () => {
  it('should throw an error when instantiating with less than 3 vertices', () => {
    const points = [new Point(1, 2), new Point(3, 4)];
    expect(() => new Polygon(points, LineProperties.getDefault())).toThrow();
  });

  it('should instantiate correctly for 3 points', () => {
    const points = [new Point(1, 2), new Point(3, 4), new Point(5, 6)];
    expect(new Polygon(points, LineProperties.getDefault())).toBeDefined();
  });

  it('should be closed', () => {
    const points = [new Point(1, 2), new Point(3, 4), new Point(5, 6)];
    const polygon = new Polygon(points, LineProperties.getDefault());

    expect(polygon.closed).toBe(true);
  });
});
