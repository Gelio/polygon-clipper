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
    'https://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg',
    'https://www.petfinder.com/wp-content/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg',
    'https://s2.dmcdn.net/Ub1O8/1280x720-mCQ.jpg',
    // tslint:disable-next-line
    'https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg'
  ],
  presetHeightMaps: ['images/height-maps/brick_heightmap.png'],
  presetNormalMaps: ['images/normal-maps/brick_normalmap.png', 'images/normal-maps/normal_map.jpg']
};

export { configuration };
