import { AppEvent } from 'events/AppEvent';

export class RenderFinishedEvent implements AppEvent {
  public readonly payload = null;
  public readonly eventType = RenderFinishedEvent.eventType;
  public handled = false;

  public static get eventType() {
    return RenderFinishedEvent.name;
  }
}
