import { AppEvent } from 'events/AppEvent';
import { PathPointComponent } from 'ui/components/PathPointComponent';

export class PointClickEvent implements AppEvent {
  public readonly eventType = PointClickEvent.eventType;
  public readonly payload: PathPointComponent;
  public handled = false;

  constructor(pathPointComponent: PathPointComponent) {
    this.payload = pathPointComponent;
  }

  public static get eventType() {
    return 'PointClickEvent';
  }
}
