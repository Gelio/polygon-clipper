import { AppEvent } from 'events/AppEvent';

export class NewHeightMap implements AppEvent {
  public readonly payload = null;
  public readonly eventType = NewHeightMap.eventType;
  public readonly imageData: ImageData;
  public handled = false;

  constructor(imageData: ImageData) {
    this.imageData = imageData;
  }

  public static get eventType() {
    return NewHeightMap.name;
  }
}
