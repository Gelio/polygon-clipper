import { AppEvent } from 'events/AppEvent';

export class LoadingStartedEvent implements AppEvent {
  public readonly payload = null;
  public readonly eventType = LoadingStartedEvent.eventType;
  public handled = false;

  public static get eventType() {
    return LoadingStartedEvent.name;
  }
}
