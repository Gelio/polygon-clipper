import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { Service } from 'services/Service';
import { Stage } from 'Stage';

import {
  PathPointElement,
  PathPointElementDependencies
} from 'ui/components/path-point/PathPointElement';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';

import { EventAggregator } from 'events/EventAggregator';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface PointSyncServiceDependencies {
  stage: Stage;
  container: HTMLElement;
  mousePositionTransformer: MousePositionTransformer;
  eventAggregator: EventAggregator;
}

interface PathPointTuple {
  path: Path;
  point: Point;
}

export class PointSyncService implements Service {
  private readonly stage: Stage;
  private pathPointElements: PathPointElement[] = [];
  private readonly container: HTMLElement;
  private readonly mousePositionTransformer: MousePositionTransformer;
  private readonly eventAggregator: EventAggregator;
  private readonly pathPointDependencies: PathPointElementDependencies;

  constructor(dependencies: PointSyncServiceDependencies) {
    this.stage = dependencies.stage;
    this.container = dependencies.container;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;
    this.eventAggregator = dependencies.eventAggregator;

    this.pathPointDependencies = {
      eventAggregator: this.eventAggregator,
      mousePositionTransformer: this.mousePositionTransformer
    };

    this.synchronizeElements = this.synchronizeElements.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(
      SyncComponentsEvent.eventType,
      this.synchronizeElements
    );
  }

  public destroy() {
    this.eventAggregator.removeEventListener(
      SyncComponentsEvent.eventType,
      this.synchronizeElements
    );
  }

  public synchronizeElements(event: SyncComponentsEvent) {
    const elementsToRemove = this.getRedundantElements();
    elementsToRemove.forEach(component => component.remove());

    const pathPointTuples = this.getPathPointTuples();
    const pointsWithoutElements = this.getPointsWithoutElements(pathPointTuples);
    const newElements = this.createPathPointElements(pointsWithoutElements);
    newElements.forEach(element => this.container.appendChild(element));

    const elementsNotRemoved = this.pathPointElements.filter(
      element => elementsToRemove.indexOf(element) === -1
    );

    this.pathPointElements = [...newElements, ...elementsNotRemoved];
    event.handled = true;
  }

  private getPathPointTuples() {
    const pathPointTuples: PathPointTuple[] = [];

    this.stage.layers.forEach(layer => {
      layer.paths.forEach(path => {
        path.getVertices().forEach(point => {
          pathPointTuples.push({
            path,
            point
          });
        });
      });
    });

    return pathPointTuples;
  }

  private createPathPointElements(pathPoints: PathPointTuple[]) {
    return pathPoints.map(
      pathPoint =>
        new PathPointElement(pathPoint.path, pathPoint.point, this.pathPointDependencies)
    );
  }

  private getRedundantElements() {
    const activePaths = this.getActivePaths();

    return this.pathPointElements.filter(
      component =>
        activePaths.indexOf(component.path) === -1 ||
        component.path.getVertices().indexOf(component.point) === -1
    );
  }

  private getPointsWithoutElements(pathPoints: PathPointTuple[]) {
    return pathPoints.filter(
      pathPoint =>
        !this.pathPointElements.find(
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
