import { Service } from 'services/Service';

import { NormalMapType } from 'common/NormalMapType';

import { EventAggregator } from 'events/EventAggregator';
import { NewNormalMapTypeEvent } from 'events/input-data';
import { NewMousePositionEvent } from 'events/input-data/NewMousePositionEvent';
import { RenderEvent } from 'events/RenderEvent';

import { MousePositionTransformer } from 'ui/MousePositionTransformer';

interface MouseFollowingServiceDependencies {
  eventAggregator: EventAggregator;
  canvas: HTMLCanvasElement;
  mousePositionTransformer: MousePositionTransformer;
}

export class MouseFollowingService implements Service {
  private readonly canvas: HTMLCanvasElement;
  private readonly eventAggregator: EventAggregator;
  private readonly mousePositionTransformer: MousePositionTransformer;

  constructor(dependencies: MouseFollowingServiceDependencies) {
    this.canvas = dependencies.canvas;
    this.eventAggregator = dependencies.eventAggregator;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;

    this.onNewNormalMapTypeEvent = this.onNewNormalMapTypeEvent.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(
      NewNormalMapTypeEvent.eventType,
      this.onNewNormalMapTypeEvent
    );
  }

  public destroy() {
    this.eventAggregator.removeEventListener(
      NewNormalMapTypeEvent.eventType,
      this.onNewNormalMapTypeEvent
    );
  }

  private onNewNormalMapTypeEvent(event: NewNormalMapTypeEvent) {
    if (event.payload === NormalMapType.Stationary) {
      this.stopFollowingTheMouse();
    } else if (event.payload === NormalMapType.FollowingTheMouse) {
      this.startFollowingTheMouse();
    }
  }

  private startFollowingTheMouse() {
    this.canvas.addEventListener('mousemove', this.onMouseMove);
  }

  private stopFollowingTheMouse() {
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
  }

  private onMouseMove(event: MouseEvent) {
    const position = this.mousePositionTransformer.getPointFromMouseEvent(event);

    this.eventAggregator.dispatchEvent(new NewMousePositionEvent({ x: position.x, y: position.y }));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}
