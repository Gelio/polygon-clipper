import { Path } from 'common/Path';
import { Point } from 'common/Point';

export class ClosestPathFinder {
  public getClosestPath(paths: Path[], point: Point): Path {
    if (paths.length === 0) {
      throw new Error('Paths array is empty');
    }

    let closestPath = paths[0];
    let closestDistance = this.getPathToPointDistance(closestPath, point);

    for (let i = 1; i < paths.length; i += 1) {
      const path = paths[i];
      const distance = this.getPathToPointDistance(path, point);

      if (closestDistance > distance) {
        closestPath = path;
        closestDistance = distance;
      }
    }

    return closestPath;
  }

  private getPathToPointDistance(path: Path, point: Point) {
    return point.getDistanceSquaredTo(path.getCenterOfGravity());
  }
}
