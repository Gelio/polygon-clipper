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
  removeConditionsWhenInsertingPoints: true,
  presetBackgroundTextures: [
    'images/backgrounds/red-bricks.jpg',
    'images/backgrounds/Funny-Cat-Face.jpg',
    'images/backgrounds/hqdefault.jpg'
  ],
  presetHeightMaps: [
    'images/height-maps/brick_heightmap.png',
    'images/height-maps/terrain-heightmap.png'
  ],
  presetNormalMaps: [
    'images/normal-maps/brick_normalmap.png',
    'images/normal-maps/normal_map.jpg',
    'images/normal-maps/circles.png'
  ],
  presetLightColor: COLORS.WHITE,
  circlingLight: {
    lapTime: 10 * 1000,
    interval: 50,
    height: 50,
    distance: 50
  }
};

export { configuration };
