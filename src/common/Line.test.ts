import { Line } from 'common/Line';
import { Point } from 'common/Point';

describe('Line', () => {
  it('should instantiate correctly for two different points', () => {
    const p1 = new Point(0, 5);
    const p2 = new Point(0, 10);

    expect(new Line(p1, p2)).toBeDefined();
  });

  it('should throw an error when it\'s the same point', () => {
    const p1 = new Point(0, 5);
    const p2 = new Point(0, 5);

    expect(() => new Line(p1, p2)).toThrow();
  });

  describe('distanceToPoint', () => {
    it('should work when point is near the line', () => {
      const p1 = new Point(0, 5);
      const p2 = new Point(0, 10);
      const line = new Line(p1, p2);

      const p = new Point(1, 8);

      expect(line.distanceToPoint(p)).toEqual(1);
    });

    it('should work when point is out of bounds of the line', () => {
      const p1 = new Point(0, 5);
      const p2 = new Point(5, 10);
      const line = new Line(p1, p2);

      const p = new Point(100, 202);

      expect(line.distanceToPoint(p)).toBeGreaterThan(50);
    });
  });

  describe('equals', () => {
    it('should return true when points equal', () => {
      const p1 = new Point(0, 5);
      const p2 = new Point(0, 10);
      const line1 = new Line(p1, p2);
      const line2 = new Line(p1, p2);

      expect(line1.equals(line2)).toBe(true);
    });

    it('should return true when points are reversed', () => {
      const p1 = new Point(0, 5);
      const p2 = new Point(0, 10);
      const line1 = new Line(p1, p2);
      const line2 = new Line(p2, p1);

      expect(line1.equals(line2)).toBe(true);
    });

    it('should return false when points are different', () => {
      const p1 = new Point(0, 5);
      const p2 = new Point(0, 10);
      const line1 = new Line(p1, p2);
      const line2 = new Line(p2, new Point(0, 40));

      expect(line1.equals(line2)).toBe(false);
    });
  });
});
