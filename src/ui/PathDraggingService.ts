import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { EventAggregator } from 'events/EventAggregator';
import { Stage } from 'Stage';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';
import { UIService } from 'ui/UIService';

import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface PathDraggingServiceDependencies {
  eventAggregator: EventAggregator;
  stage: Stage;
  canvas: HTMLCanvasElement;
  mousePositionTransformer: MousePositionTransformer;
}

export class PathDraggingService implements UIService {
  private readonly eventAggregator: EventAggregator;
  private readonly stage: Stage;
  private readonly canvas: HTMLCanvasElement;
  private readonly mousePositionTransformer: MousePositionTransformer;

  private pathToDrag: Path | undefined;
  private previousPoint: Point | undefined;
  private _isDragging = false;

  constructor(dependencies: PathDraggingServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.stage = dependencies.stage;
    this.canvas = dependencies.canvas;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  public init() {
    // TODO: possible polygon ghost layer here
  }

  public destroy() {
    this.stopDraggingPath();
  }

  public get isDragging() {
    return this._isDragging;
  }

  public startMovingPath(event: MouseEvent) {
    const point = this.mousePositionTransformer.getPointFromMouseEvent(event);

    this.pathToDrag = undefined;
    this.previousPoint = undefined;

    for (const layer of this.stage.layers) {
      for (const path of layer.paths) {
        if (!path.isPointInBoundingBox(point)) {
          continue;
        }

        this.pathToDrag = path;
        break;
      }
    }

    if (!this.pathToDrag) {
      return alert('Cannot drag path - no path found, point is not in the bounding box');
    }

    this.previousPoint = point;
    this._isDragging = true;
    this.addEventListeners();
  }

  private addEventListeners() {
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.canvas.addEventListener('mouseup', this.onMouseUp);
    this.canvas.addEventListener('mouseout', this.onMouseOut);
  }

  private removeEventListeners() {
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    this.canvas.removeEventListener('mouseup', this.onMouseUp);
    this.canvas.removeEventListener('mouseout', this.onMouseOut);
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.pathToDrag || !this.previousPoint) {
      return;
    }

    const point = this.mousePositionTransformer.getPointFromMouseEvent(event);
    const transitionVector = Point.subtract(point, this.previousPoint);

    for (const pathPoint of this.pathToDrag.getVertices()) {
      pathPoint.moveTo(Point.add(pathPoint, transitionVector));
    }

    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());

    this.previousPoint = point;
  }

  private onMouseUp(_event: MouseEvent) {
    this.stopDraggingPath();
    this.cancelNextClickEvent();
  }

  private onMouseOut(_event: MouseEvent) {
    this.stopDraggingPath();
    this._isDragging = false;
  }

  private stopDraggingPath() {
    this.removeEventListeners();
    this.pathToDrag = undefined;
    this.previousPoint = undefined;
  }

  private cancelNextClickEvent() {
    const handler = (event: MouseEvent) => {
      this.canvas.removeEventListener('click', handler, true);
      this._isDragging = false;
      event.stopPropagation();
    };

    this.canvas.addEventListener('click', handler, true);
  }
}
