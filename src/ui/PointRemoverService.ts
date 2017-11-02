import { configuration } from 'configuration';
import { Service } from 'services/Service';

import { EventAggregator } from 'events/EventAggregator';
import { PointClickEvent } from 'events/PointClickEvent';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';
import { PathPointElement } from 'ui/components/path-point/PathPointElement';

interface PointRemoverServiceDependencies {
  eventAggregator: EventAggregator;
}

export class PointRemoverService implements Service {
  private readonly eventAggregator: EventAggregator;

  private previousPathPointElement: PathPointElement;
  private previousClickTimestamp = 0;

  constructor(dependencies: PointRemoverServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.onPointClick = this.onPointClick.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(PointClickEvent.eventType, this.onPointClick);
  }

  public destroy() {
    this.eventAggregator.removeEventListener(PointClickEvent.eventType, this.onPointClick);
  }

  private onPointClick(event: PointClickEvent) {
    const currentTimestamp = Date.now();

    const pathPointElement = event.payload;
    const previousPathPointElement = this.previousPathPointElement;
    const previousClickTimestamp = this.previousClickTimestamp;

    this.updatePreviousClickInformation(event, currentTimestamp);

    if (!previousPathPointElement || previousPathPointElement !== pathPointElement) {
      return;
    }

    if (currentTimestamp - previousClickTimestamp > configuration.doubleClickMaxDelay) {
      return;
    }

    this.removePreviousClickedPoint();
    event.handled = true;
  }

  private updatePreviousClickInformation(event: PointClickEvent, timestamp: number) {
    this.previousPathPointElement = event.payload;
    this.previousClickTimestamp = timestamp;
  }

  private removePreviousClickedPoint() {
    const path = this.previousPathPointElement.path;
    const point = this.previousPathPointElement.point;

    try {
      path.removeVertex(point);
    } catch (error) {
      return alert('Cannot remove vertex');
    }

    this.previousPathPointElement.remove();
    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
  }
}
