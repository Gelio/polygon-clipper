import { PolygonClipper } from 'services/PolygonClipper';
import { Service } from 'services/Service';

import { EventAggregator } from 'events/EventAggregator';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

import { Layer } from 'common/Layer';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

interface PolygonClippingServiceDependencies {
  polygonClipper: PolygonClipper;
  eventAggregator: EventAggregator;
  polygonLayer: Layer;
}

export class PolygonClippingService implements Service {
  private readonly polygonClipper: PolygonClipper;
  private readonly eventAggregator: EventAggregator;
  private readonly polygonLayer: Layer;

  constructor(dependencies: PolygonClippingServiceDependencies) {
    this.polygonClipper = dependencies.polygonClipper;
    this.eventAggregator = dependencies.eventAggregator;
    this.polygonLayer = dependencies.polygonLayer;
  }

  public init() {
    // Nothing to do here
  }

  public destroy() {
    // Nothing to do here
  }

  public clipPolygons(point: Point) {
    const matchingPolygons = this.polygonLayer.paths
      .filter(path => path.isPointInBoundingBox(point))
      .map(path => <Polygon>path);

    if (matchingPolygons.length < 2) {
      alert('Click in the bounding box of at least 2 polygons');

      return;
    }

    const convexPolygon = matchingPolygons.find(polygon => polygon.isConvex());
    if (!convexPolygon) {
      alert('Cannot find a convex polygon');

      return;
    }

    const subjectPolygonIndex = convexPolygon === matchingPolygons[0] ? 1 : 0;
    const subjectPolygon = matchingPolygons[subjectPolygonIndex];

    const clippedPolygon = this.polygonClipper.clipPolygon(
      subjectPolygon,
      convexPolygon
    );

    if (!clippedPolygon) {
      alert('Cannot clip polygons (they do not overlap)');

      return;
    }

    this.polygonLayer.removePath(subjectPolygon);
    this.polygonLayer.removePath(convexPolygon);

    this.polygonLayer.paths.push(clippedPolygon);

    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}
