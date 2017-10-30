import { AppEvent } from 'events/AppEvent';
import { PathPointComponent } from 'ui/components/PathPointComponent';

export class FinishPointDragEvent implements AppEvent {
  public readonly payload: PathPointComponent;
  public readonly eventType = FinishPointDragEvent.eventType;
  public handled = false;

  constructor(pathPointComponent: PathPointComponent) {
    this.payload = pathPointComponent;
  }

  public static get eventType() {
    return 'FinishPointDragEvent';
  }
}
