import { AppEvent } from 'events/AppEvent';

export class NewNormalMapEvent implements AppEvent {
  public readonly payload: ImageData;
  public readonly eventType = NewNormalMapEvent.eventType;
  public handled = false;

  constructor(imageData: ImageData) {
    this.payload = imageData;
  }

  public static get eventType() {
    return NewNormalMapEvent.name;
  }
}
