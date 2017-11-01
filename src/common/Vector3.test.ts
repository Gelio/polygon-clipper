import { Vector3 } from 'common/Vector3';

describe('Vector3', () => {
  it('should instantiate correctly', () => {
    expect(new Vector3(1, 2, 3)).toBeDefined();
  });

  describe('normalize', () => {
    it('should normalize a vector', () => {
      const vector = new Vector3(1, 2, 3);

      vector.normalize();

      expect(Math.abs(vector.x - 0.26)).toBeLessThan(0.1);
      expect(Math.abs(vector.y - 0.53)).toBeLessThan(0.1);
      expect(Math.abs(vector.z - 0.80)).toBeLessThan(0.1);

      expect(Math.abs(vector.getLength() - 1)).toBeLessThan(0.1);
    });
  });

  describe('crossProduct', () => {
    it('should be correct', () => {
      const v1 = new Vector3(3, -3, 1);
      const v2 = new Vector3(4, 9, 2);

      const result = Vector3.crossProduct(v1, v2);

      expect(result.x).toEqual(-15);
      expect(result.y).toEqual(-2);
      expect(result.z).toEqual(39);
    });
  });

  describe('dotProduct', () => {
    it('should be correct', () => {
      const v1 = new Vector3(1, 0, -1);
      const v2 = new Vector3(2, 1, 3);

      const result = Vector3.dotProduct(v1, v2);

      expect(result).toEqual(-1);
    });
  });

  describe('invert', () => {
    it('should be correct', () => {
      const v = new Vector3(1, 1, 1);

      v.invert();

      expect(v.x).toEqual(-1);
      expect(v.y).toEqual(-1);
      expect(v.z).toEqual(-1);
    });
  });

  describe('getLength', () => {
    it('should be correct', () => {
      const v = new Vector3(1, 1, 1);

      const length = v.getLength();
      const correctLength = Math.sqrt(3);

      expect(Math.abs(length - correctLength)).toBeLessThan(0.1);
    });
  });

  describe('cosineAngle', () => {
    it('should be correct', () => {
      const v1 = new Vector3(1, 0, 3);
      const v2 = new Vector3(5, 5, 0);

      const cosine = Vector3.cosineAngle(v1, v2);
      const correctCosine = 0.2236;

      expect(Math.abs(cosine - correctCosine)).toBeLessThan(0.1);
    });
  });
});
