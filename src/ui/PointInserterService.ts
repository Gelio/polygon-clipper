import { EventAggregator } from 'events/EventAggregator';
import { LineClickEvent } from 'events/LineClickEvent';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

import { Line } from 'common/Line';
import { configuration } from 'configuration';
import { Service } from 'services/Service';

interface PointInserterServiceDependencies {
  eventAggregator: EventAggregator;
}

export class PointInserterService implements Service {
  private readonly eventAggregator: EventAggregator;

  private previousLineClickTimestamp = 0;
  private previousLineHit: Line;

  constructor(dependencies: PointInserterServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;

    this.onLineClick = this.onLineClick.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(LineClickEvent.eventType, this.onLineClick);
  }

  public destroy() {
    this.eventAggregator.removeEventListener(LineClickEvent.eventType, this.onLineClick);
  }

  private onLineClick(event: LineClickEvent) {
    const previousLineHit = this.previousLineHit;
    const previousLineClickTimestamp = this.previousLineClickTimestamp;

    const currentTimestamp = Date.now();
    this.previousLineHit = event.payload.line;
    this.previousLineClickTimestamp = currentTimestamp;

    if (
      !previousLineHit ||
      currentTimestamp - previousLineClickTimestamp > configuration.doubleClickMaxDelay
    ) {
      return;
    }

    if (previousLineHit.equals(event.payload.line)) {
      const index = event.payload.path.findPointIndex(event.payload.line.p2);
      const newPoint = event.payload.line.getMiddlePoint();
      const flooredPoint = newPoint.floor();

      try {
        event.payload.path.insertVertex(flooredPoint, index);
      } catch (error) {
        return alert(error.message);
      }

      // TODO: fix wrong rendering
      this.eventAggregator.dispatchEvent(new RenderEvent());
      this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
    }
  }
}
