import { AppEvent } from 'events/AppEvent';
import { PathPointElement } from 'ui/components/path-point/PathPointElement';

export class FinishPointDragEvent implements AppEvent {
  public readonly payload: PathPointElement;
  public readonly eventType = FinishPointDragEvent.eventType;
  public handled = false;

  constructor(pathPointElement: PathPointElement) {
    this.payload = pathPointElement;
  }

  public static get eventType() {
    return 'FinishPointDragEvent';
  }
}
