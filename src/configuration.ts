import { COLORS } from 'common/COLORS';
import { LineProperties } from 'common/LineProperties';
import { Point } from 'common/Point';

const configuration = {
  newLinePreviewProperties: new LineProperties(COLORS.BLUE, 2),
  newPolygonLineProperties: new LineProperties(COLORS.RED, 1),
  polygonLineProperties: LineProperties.getDefault(),
  applicationUIContainerID: 'application-ui',
  hitTolerance: 10,
  minPolygonPoints: 3,
  doubleClickMaxDelay: 500,
  displayPathGhostWhenDragging: false,
  epsilon: 0.1,
  lineDeviationAllowanceInDegrees: 20,
  canvasFont: '30pt serif',
  lineConditionLabelOffset: new Point(5, 0),
  removeConditionsWhenInsertingPoints: true
};

export {
  configuration
};
