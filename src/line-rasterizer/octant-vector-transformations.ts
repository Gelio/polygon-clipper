import { Octant } from 'common/Octant';
import { Point } from 'common/Point';

// Transformations from a specific octant to the first octant
const octantVectorTransformations = {
  [Octant.First]: (p: Point) => p,
  [Octant.Second]: (p: Point) => new Point(p.y, p.x),
  [Octant.Third]: (p: Point) => new Point(p.y, -p.x),
  [Octant.Fourth]: (p: Point) => new Point(-p.x, p.y),
  [Octant.Fifth]: (p: Point) => new Point(-p.x, -p.y),
  [Octant.Sixth]: (p: Point) => new Point(-p.y, -p.x),
  [Octant.Seventh]: (p: Point) => new Point(-p.y, p.x),
  [Octant.Eighth]: (p: Point) => new Point(p.x, -p.y)
};

// Transformations from the first octant to a specific octant
const reverseOctantVectorTransformations = {
  [Octant.First]: (p: Point) => p,
  [Octant.Second]: (p: Point) => new Point(p.y, p.x),
  [Octant.Third]: (p: Point) => new Point(-p.y, p.x),
  [Octant.Fourth]: (p: Point) => new Point(-p.x, p.y),
  [Octant.Fifth]: (p: Point) => new Point(-p.x, -p.y),
  [Octant.Sixth]: (p: Point) => new Point(-p.y, -p.x),
  [Octant.Seventh]: (p: Point) => new Point(p.y, -p.x),
  [Octant.Eighth]: (p: Point) => new Point(p.x, -p.y)
};

export {
  octantVectorTransformations,
  reverseOctantVectorTransformations
};
