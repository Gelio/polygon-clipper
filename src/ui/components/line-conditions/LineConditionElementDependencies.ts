import { Line } from 'common/Line';
import { Polygon } from 'common/Polygon';

export interface SelectedTarget {
  line: Line | null;
  polygon: Polygon | null;
}

export interface LineConditionElementDependencies {
  selectedTarget: SelectedTarget;
}
