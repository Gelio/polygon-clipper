import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { Stage } from 'Stage';
import { UIService } from 'ui/UIService';

import { PathPointComponent } from 'ui/components/PathPointComponent';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';

import { EventAggregator } from 'events/EventAggregator';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface PointSyncServiceDependencies {
  stage: Stage;
  container: HTMLElement;
  mousePositionTransformer: MousePositionTransformer;
  eventAggregator: EventAggregator;
}

interface PathPoint {
  path: Path;
  point: Point;
}

export class PointSyncService implements UIService {
  private readonly stage: Stage;
  private pathPointComponents: PathPointComponent[] = [];
  private readonly container: HTMLElement;
  private readonly mousePositionTransformer: MousePositionTransformer;
  private readonly eventAggregator: EventAggregator;

  constructor(dependencies: PointSyncServiceDependencies) {
    this.stage = dependencies.stage;
    this.container = dependencies.container;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;
    this.eventAggregator = dependencies.eventAggregator;

    this.synchronizeComponents = this.synchronizeComponents.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(SyncComponentsEvent.eventType, this.synchronizeComponents);
  }

  public destroy() {
    this.eventAggregator.removeEventListener(SyncComponentsEvent.eventType, this.synchronizeComponents);
  }

  public synchronizeComponents(event: SyncComponentsEvent) {
    const componentsToRemove = this.getRedundantComponents();
    componentsToRemove.forEach(component => component.remove());

    const pathPoints = this.getPathPoints();
    const pointsWithoutComponents = this.getPointsWithoutComponents(pathPoints);
    const newComponents = this.createPathPointComponents(pointsWithoutComponents);

    const componentsNotRemoved = this.pathPointComponents.filter(
      component => componentsToRemove.indexOf(component) === -1
    );

    this.pathPointComponents = [...newComponents, ...componentsNotRemoved];
    event.handled = true;
  }

  private getPathPoints() {
    const pathPoints: PathPoint[] = [];

    this.stage.layers.forEach(layer => {
      layer.paths.forEach(path => {
        path.getVertices().forEach(point => {
          pathPoints.push({
            path,
            point
          });
        });
      });
    });

    return pathPoints;
  }

  private createPathPointComponents(pathPoints: PathPoint[]) {
    return pathPoints.map(
      pathPoint =>
        new PathPointComponent(pathPoint.path, pathPoint.point, {
          applicationUIContainer: this.container,
          eventAggregator: this.eventAggregator,
          mousePositionTransformer: this.mousePositionTransformer
        })
    );
  }

  private getRedundantComponents() {
    const activePaths = this.getActivePaths();

    return this.pathPointComponents.filter(
      component =>
        activePaths.indexOf(component.path) === -1 ||
        component.path.getVertices().indexOf(component.point) === -1
    );
  }

  private getPointsWithoutComponents(pathPoints: PathPoint[]) {
    return pathPoints.filter(
      pathPoint =>
        !this.pathPointComponents.find(
          component => component.path === pathPoint.path && component.point === pathPoint.point
        )
    );
  }

  private getActivePaths() {
    const paths: Path[] = [];
    this.stage.layers.map(layer => paths.push(...layer.paths));

    return paths;
  }
}
