import { AppEvent } from 'events/AppEvent';

export class SyncComponentsEvent implements AppEvent {
  public readonly payload = null;
  public readonly eventType = SyncComponentsEvent.eventType;
  public handled = false;

  public static get eventType() {
    return 'SyncComponentsEvent';
  }
}
