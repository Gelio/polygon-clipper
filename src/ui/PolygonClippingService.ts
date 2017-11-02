import { PolygonClipper } from 'services/PolygonClipper';
import { Service } from 'services/Service';

import { EventAggregator } from 'events/EventAggregator';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

import { Layer } from 'common/Layer';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';
import { ClosestPathFinder } from 'services/ClosestPathFinder';

interface PolygonClippingServiceDependencies {
  polygonClipper: PolygonClipper;
  eventAggregator: EventAggregator;
  polygonLayer: Layer;
  closestPathFinder: ClosestPathFinder;
}

export class PolygonClippingService implements Service {
  private readonly polygonClipper: PolygonClipper;
  private readonly eventAggregator: EventAggregator;
  private readonly polygonLayer: Layer;
  private readonly closestPathFinder: ClosestPathFinder;

  constructor(dependencies: PolygonClippingServiceDependencies) {
    this.polygonClipper = dependencies.polygonClipper;
    this.eventAggregator = dependencies.eventAggregator;
    this.polygonLayer = dependencies.polygonLayer;
    this.closestPathFinder = dependencies.closestPathFinder;
  }

  public init() {
    // Nothing to do here
  }

  public destroy() {
    // Nothing to do here
  }

  public clipPolygons(point: Point) {
    const polygonsInBoundingBox = <Polygon[]>this.polygonLayer.paths.filter(path =>
      path.isPointInBoundingBox(point)
    );

    if (polygonsInBoundingBox.length < 2) {
      return alert('Click in the bounding box of at least 2 polygons');
    }

    const convexPolygons = polygonsInBoundingBox.filter(polygon => polygon.isConvex());
    if (convexPolygons.length === 0) {
      return alert('Cannot find a convex polygon');
    }

    const closestConvexPolygon = <Polygon>this.closestPathFinder.getClosestPath(
      convexPolygons,
      point
    );

    const subjectPolygons = polygonsInBoundingBox.filter(
      polygon => polygon !== closestConvexPolygon
    );
    const closestSubjectPolygon = <Polygon>this.closestPathFinder.getClosestPath(subjectPolygons, point);

    const clippedPolygon = this.polygonClipper.clipPolygon(closestSubjectPolygon, closestConvexPolygon);
    if (!clippedPolygon) {
      return alert('Cannot clip polygons (they do not overlap)');
    }

    this.polygonLayer.removePath(closestSubjectPolygon);
    this.polygonLayer.removePath(closestConvexPolygon);

    this.polygonLayer.paths.push(clippedPolygon);

    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}
