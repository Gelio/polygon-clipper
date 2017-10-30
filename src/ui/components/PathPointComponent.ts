import { Path } from 'common/Path';
import { Point } from 'common/Point';

import { MousePositionTransformer } from 'ui/MousePositionTransformer';

import { EventAggregator } from 'events/EventAggregator';
import { FinishPointDragEvent } from 'events/point-drag/FinishPointDragEvent';
import { PointDragEvent } from 'events/point-drag/PointDragEvent';
import { StartPointDragEvent } from 'events/point-drag/StartPointDragEvent';
import { PointClickEvent } from 'events/PointClickEvent';

import 'ui/components/PathPointComponent.scss';

const COMPONENT_CLASS_NAME = 'application-ui__vertex';
const INITIAL_CLASS_NAME = 'application-ui__vertex--initial';

interface PathPointComponentDependencies {
  applicationUIContainer: HTMLElement;
  mousePositionTransformer: MousePositionTransformer;
  eventAggregator: EventAggregator;
}

export class PathPointComponent {
  public element: HTMLDivElement;
  public path: Path;
  public point: Point;
  private readonly applicationUIContainer: HTMLElement;
  private readonly mousePositionTransformer: MousePositionTransformer;
  private readonly eventAggregator: EventAggregator;

  constructor(
    path: Path,
    point: Point,
    dependencies: PathPointComponentDependencies
  ) {
    this.path = path;
    this.point = point;
    this.applicationUIContainer = dependencies.applicationUIContainer;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;
    this.eventAggregator = dependencies.eventAggregator;

    this.updatePosition = this.updatePosition.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
    this.init();
  }

  public remove() {
    this.point.moveCallback = null;
    this.element.removeEventListener('mousedown', this.onMouseDown);
    this.element.remove();
  }

  public updatePosition() {
    this.element.style.backgroundColor = this.path.lineProperties.color.fillStyle;
    this.element.style.top = `${this.point.y}px`;
    this.element.style.left = `${this.point.x}px`;
  }

  public get initial() {
    return this.element.classList.contains(INITIAL_CLASS_NAME);
  }

  public set initial(isInitial: boolean) {
    if (isInitial) {
      this.element.classList.add(INITIAL_CLASS_NAME);
    } else {
      this.element.classList.remove(INITIAL_CLASS_NAME);
    }
  }

  private init() {
    this.element = document.createElement('div');
    this.applicationUIContainer.appendChild(this.element);

    this.element.classList.add(COMPONENT_CLASS_NAME);
    this.updatePosition();

    if (
      this.path.getVerticesCount() === 1 ||
      (!this.path.closed && this.path.findPointIndex(this.point) === 0)
    ) {
      this.initial = true;
    }

    this.element.addEventListener('mousedown', this.onMouseDown);
    this.point.moveCallback = this.updatePosition;
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
