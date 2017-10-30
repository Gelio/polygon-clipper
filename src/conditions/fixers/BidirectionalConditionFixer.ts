import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

import { FixingDirection, UnidirectionalConditionFixer } from 'conditions/fixers/UnidirectionalConditionFixer';
import { LineCondition } from 'conditions/LineCondition';

export class BidirectionalConditionFixer {
  private readonly unidirectionalConditionFixer: UnidirectionalConditionFixer;

  private _fixSuccessful: boolean | undefined;

  constructor(
    polygon: Polygon,
    startingPoint: Point,
    additionalLineConditions: LineCondition[] = []
  ) {
    this.unidirectionalConditionFixer = new UnidirectionalConditionFixer(
      polygon,
      startingPoint,
      additionalLineConditions,
      FixingDirection.Normal
    );
  }
  public get startingPoint() {
    return this.unidirectionalConditionFixer.startingPoint;
  }

  public set startingPoint(point: Point) {
    this.unidirectionalConditionFixer.startingPoint = point;
  }

  public get fixSuccessful(): boolean {
    if (this._fixSuccessful === undefined) {
      throw new Error('tryFix needs to be called first');
    }

    return this._fixSuccessful;
  }

  public tryFix() {
    if (this._fixSuccessful !== undefined) {
      throw new Error('ConditionFixer needs to be reset before fixing again');
    }

    this._fixSuccessful = false;
    this.unidirectionalConditionFixer.tryFix();

    if (!this.unidirectionalConditionFixer.fixSuccessful) {
      return;
    }

    const lastLockedPointIndex = this.unidirectionalConditionFixer.lastLockedVertexIndex;
    this.unidirectionalConditionFixer.reset();
    this.unidirectionalConditionFixer.direction = FixingDirection.Reverse;

    this.unidirectionalConditionFixer.tryFix(lastLockedPointIndex);

    if (this.unidirectionalConditionFixer.fixSuccessful) {
      this._fixSuccessful = true;
    }
  }

  public reset() {
    this._fixSuccessful = undefined;
    this.unidirectionalConditionFixer.reset();
  }
}
