import { Point } from 'common/Point';
import { LineRasterizer } from 'line-rasterizer/LineRasterizer';

describe('LineRasterizer', () => {
  let lineRasterizer: LineRasterizer;

  beforeAll(() => {
    lineRasterizer = new LineRasterizer();
  });

  describe('rasterizeLine', () => {
    describe('for X and Y axes', () => {
      it('should return a straight line south', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(0, 5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);
        expect(rasterizedLine.filter(point => point.x !== 0)).toHaveLength(0);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.y).toBe(previousPoint.y + 1);

          return point;
        });
      });

      it('should return a straight line east', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, 0);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);
        expect(rasterizedLine.filter(point => point.y !== 0)).toHaveLength(0);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x).toBe(previousPoint.x + 1);

          return point;
        });
      });

      it('should return a straight line north', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(0, -5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);
        expect(rasterizedLine.filter(point => point.x !== 0)).toHaveLength(0);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.y).toBe(previousPoint.y - 1);

          return point;
        });
      });

      it('should return a straight line west', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-5, 0);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);
        expect(rasterizedLine.filter(point => point.y !== 0)).toHaveLength(0);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x).toBe(previousPoint.x - 1);

          return point;
        });
      });
    });

    describe('for diagonals', () => {
      it('should return a straight line southeast', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, 5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x).toBe(previousPoint.x + 1);
          expect(point.y).toBe(previousPoint.y + 1);

          return point;
        });
      });

      it('should return a straight line southwest', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-5, 5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x).toBe(previousPoint.x - 1);
          expect(point.y).toBe(previousPoint.y + 1);

          return point;
        });
      });

      it('should return a straight line northwest', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-5, -5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x).toBe(previousPoint.x - 1);
          expect(point.y).toBe(previousPoint.y - 1);

          return point;
        });
      });

      it('should return a straight line northeast', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, -5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );
        expect(rasterizedLine).toHaveLength(6);

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x).toBe(previousPoint.x + 1);
          expect(point.y).toBe(previousPoint.y - 1);

          return point;
        });
      });
    });

    describe('for octants', () => {
      it('should return a line for the first octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, 2);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let x = startPoint.x; x <= endPoint.x; x += 1) {
          expect(rasterizedLine.filter(point => point.x === x)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.y - previousPoint.y).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the second octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(2, 5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let y = startPoint.y; y <= endPoint.y; y += 1) {
          expect(rasterizedLine.filter(point => point.y === y)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x - previousPoint.x).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the third octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-2, 5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let y = startPoint.y; y <= endPoint.y; y += 1) {
          expect(rasterizedLine.filter(point => point.y === y)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(previousPoint.x - point.x).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the fourth octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-5, 2);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let x = startPoint.x; x >= endPoint.x; x -= 1) {
          expect(rasterizedLine.filter(point => point.x === x)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.y - previousPoint.y).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the fifth octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-5, -2);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let x = startPoint.x; x >= endPoint.x; x -= 1) {
          expect(rasterizedLine.filter(point => point.x === x)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(previousPoint.y - point.y).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the sixth octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(-2, -5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let y = startPoint.y; y >= endPoint.y; y -= 1) {
          expect(rasterizedLine.filter(point => point.y === y)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(previousPoint.x - point.x).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the seventh octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(2, -5);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let y = startPoint.y; y >= endPoint.y; y -= 1) {
          expect(rasterizedLine.filter(point => point.y === y)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(point.x - previousPoint.x).toBeLessThanOrEqual(1);

          return point;
        });
      });

      it('should return a line for the eighth octant', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, -2);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        for (let x = startPoint.x; x <= endPoint.x; x += 1) {
          expect(rasterizedLine.filter(point => point.x === x)).toHaveLength(1);
        }

        rasterizedLine.reduce((previousPoint, point) => {
          expect(previousPoint.y - point.y).toBeLessThanOrEqual(1);

          return point;
        });
      });
    });

    describe('with thickness', () => {
      it('should return double the amount of points for thickness 2', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, 5);

        const thinRasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        const thickness = 2;
        const thickRasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          thickness
        );

        expect(thickRasterizedLine.length).toBe(
          thinRasterizedLine.length * thickness
        );
      });

      it('should return triple the amount of points for thickness 3', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, 5);

        const thinRasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        const thickness = 3;
        const thickRasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          thickness
        );

        expect(thickRasterizedLine.length).toBe(
          thinRasterizedLine.length * thickness
        );
      });

      it('should return five times the amount of points for thickness 5', () => {
        const startPoint = new Point(0, 0);
        const endPoint = new Point(5, 5);

        const thinRasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        const thickness = 5;
        const thickRasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          thickness
        );

        expect(thickRasterizedLine.length).toBe(
          thinRasterizedLine.length * thickness
        );
      });
    });

    describe('lines that start not at origin', () => {
      it('should work correctly', () => {
        const startPoint = new Point(10, 20);
        const endPoint = new Point(5, 7);

        const rasterizedLine = lineRasterizer.rasterizeLine(
          startPoint,
          endPoint,
          1
        );

        const translatedStartPoint = new Point(0, 0);
        const translatedEndPoint = Point.subtract(endPoint, startPoint);
        const rasterizedTranslatedLine = lineRasterizer.rasterizeLine(
          translatedStartPoint,
          translatedEndPoint,
          1
        );

        expect(rasterizedLine.length).toBe(rasterizedTranslatedLine.length);

        rasterizedLine.forEach((point, index) => {
          const translatedPoint = rasterizedTranslatedLine[index];

          expect(Point.subtract(point, startPoint)).toEqual(
            Point.subtract(translatedPoint, translatedStartPoint)
          );
        });
      });
    });
  });
});
