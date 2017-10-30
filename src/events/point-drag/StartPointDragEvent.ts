import { AppEvent } from 'events/AppEvent';
import { PathPointComponent } from 'ui/components/PathPointComponent';

export class StartPointDragEvent implements AppEvent {
  public readonly payload: PathPointComponent;
  public readonly eventType = StartPointDragEvent.eventType;
  public handled = false;

  constructor(pathPointComponent: PathPointComponent) {
    this.payload = pathPointComponent;
  }

  public static get eventType() {
    return 'StartPointDragEvent';
  }
}
