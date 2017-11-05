import { COLORS } from 'common/COLORS';
import { LineProperties } from 'common/LineProperties';
import { Vector3 } from 'common/Vector3';

const configuration = {
  newLinePreviewProperties: new LineProperties(COLORS.BLUE, 2),
  newPolygonLineProperties: new LineProperties(COLORS.RED, 1),
  polygonLineProperties: LineProperties.getDefault(),

  applicationUIContainerID: 'application-ui',

  hitTolerance: 10,
  minPolygonPoints: 3,
  doubleClickMaxDelay: 500,

  displayPathGhostWhenDragging: false,
  canvasFont: '30pt serif',
  loadingBarHideDelay: 1500,

  initialCustomBackgroundColorHex: '#00a2e8', // blue-ish
  presetBackgroundTextures: [
    'images/backgrounds/red-bricks.jpg',
    'images/backgrounds/Funny-Cat-Face.jpg',
    'images/backgrounds/hqdefault.jpg'
  ],
  initialCustomHeightMapColorHex: '#000000',  // [0, 0, 0]
  presetHeightMaps: [
    'images/height-maps/brick_heightmap.png',
    'images/height-maps/terrain-heightmap.png'
  ],
  initialCustomNormalMapColorHex: '#7f7fff',  // [0, 0, 1] (because x and y are [-1, 1])
  presetNormalMaps: [
    'images/normal-maps/brick_normalmap.png',
    'images/normal-maps/normal_map.jpg',
    'images/normal-maps/circles.png'
  ],
  presetLightColor: new Vector3(1, 1, 1),

  movingLight: {
    horizontalLapTime: 10 * 1000,
    verticalLapTime: 8 * 1000,
    minVerticalAngle: (20 / 180) * Math.PI,
    maxVerticalAngle: (70 / 180) * Math.PI,
    tickInterval: 50,
    defaultRadius: 500
  }
};

export { configuration };
