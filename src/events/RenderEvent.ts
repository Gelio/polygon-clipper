import { AppEvent } from 'events/AppEvent';

export class RenderEvent implements AppEvent {
  public readonly payload = null;
  public readonly eventType = RenderEvent.eventType;
  public handled = false;

  public static get eventType() {
    return 'RenderEvent';
  }
}
