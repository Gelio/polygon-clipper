import { AppEvent } from 'events/AppEvent';

export class NewNormalMap implements AppEvent {
  public readonly payload = null;
  public readonly eventType = NewNormalMap.eventType;
  public readonly imageData: ImageData;
  public handled = false;

  constructor(imageData: ImageData) {
    this.imageData = imageData;
  }

  public static get eventType() {
    return NewNormalMap.name;
  }
}
