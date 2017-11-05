import { AppEvent } from 'events/AppEvent';

export class LoadingFinishedEvent implements AppEvent {
  public readonly payload = null;
  public readonly eventType = LoadingFinishedEvent.eventType;
  public handled = false;

  public static get eventType() {
    return LoadingFinishedEvent.name;
  }
}
