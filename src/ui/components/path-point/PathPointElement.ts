import { Path } from 'common/Path';
import { Point } from 'common/Point';

import { MousePositionTransformer } from 'ui/MousePositionTransformer';

import { EventAggregator } from 'events/EventAggregator';
import { FinishPointDragEvent } from 'events/point-drag/FinishPointDragEvent';
import { PointDragEvent } from 'events/point-drag/PointDragEvent';
import { StartPointDragEvent } from 'events/point-drag/StartPointDragEvent';
import { PointClickEvent } from 'events/PointClickEvent';

import 'ui/components/path-point/PathPointElement.scss';

const classNames = {
  COMPONENT: 'application-ui__vertex',
  INITIAL: 'application-ui__vertex--initial'
};

export interface PathPointElementDependencies {
  mousePositionTransformer: MousePositionTransformer;
  eventAggregator: EventAggregator;
}

export class PathPointElement extends HTMLElement {
  public path: Path;
  public point: Point;
  private readonly mousePositionTransformer: MousePositionTransformer;
  private readonly eventAggregator: EventAggregator;

  constructor(path: Path, point: Point, dependencies: PathPointElementDependencies) {
    super();

    this.classList.add(classNames.COMPONENT);

    this.path = path;
    this.point = point;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;
    this.eventAggregator = dependencies.eventAggregator;

    this.updatePosition = this.updatePosition.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
  }

  public updatePosition() {
    this.style.backgroundColor = this.path.lineProperties.color.fillStyle;
    this.style.top = `${this.point.y}px`;
    this.style.left = `${this.point.x}px`;
  }

  public get initial() {
    return this.classList.contains(classNames.INITIAL);
  }

  public set initial(isInitial: boolean) {
    if (isInitial) {
      this.classList.add(classNames.INITIAL);
    } else {
      this.classList.remove(classNames.INITIAL);
    }
  }

  public connectedCallback() {
    this.updatePosition();

    if (
      this.path.getVerticesCount() === 1 ||
      (!this.path.closed && this.path.findPointIndex(this.point) === 0)
    ) {
      this.initial = true;
    }

    this.addEventListener('mousedown', this.onMouseDown);
    this.point.moveCallback = this.updatePosition;
  }

  public disconnectedCallback() {
    this.point.moveCallback = null;
    this.removeEventListener('mousedown', this.onMouseDown);
  }

  private onMouseDown() {
    const event = new PointClickEvent(this);
    this.eventAggregator.dispatchEvent(event);

    if (event.handled) {
      return;
    }

    this.eventAggregator.dispatchEvent(new StartPointDragEvent(this));

    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.stopDragging);
  }

  private onMouseMove(event: MouseEvent) {
    const mousePosition = this.mousePositionTransformer.getPointFromMouseEvent(event);
    this.eventAggregator.dispatchEvent(new PointDragEvent(this, mousePosition));
  }

  private stopDragging() {
    this.eventAggregator.dispatchEvent(new FinishPointDragEvent(this));
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.stopDragging);
  }
}

customElements.define('app-path-point', PathPointElement);
