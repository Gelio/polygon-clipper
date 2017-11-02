import { AppEvent } from 'events/AppEvent';
import { PathPointElement } from 'ui/components/path-point/PathPointElement';

export class PointClickEvent implements AppEvent {
  public readonly eventType = PointClickEvent.eventType;
  public readonly payload: PathPointElement;
  public handled = false;

  constructor(pathPointElement: PathPointElement) {
    this.payload = pathPointElement;
  }

  public static get eventType() {
    return 'PointClickEvent';
  }
}
