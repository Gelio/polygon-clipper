import { AppEvent } from 'events/AppEvent';

export class NewHeightMapEvent implements AppEvent {
  public readonly payload: ImageData;
  public readonly eventType = NewHeightMapEvent.eventType;
  public handled = false;

  constructor(imageData: ImageData) {
    this.payload = imageData;
  }

  public static get eventType() {
    return NewHeightMapEvent.name;
  }
}
