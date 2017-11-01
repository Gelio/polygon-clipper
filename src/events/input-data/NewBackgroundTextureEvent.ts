import { AppEvent } from 'events/AppEvent';

export class NewBackgroundTextureEvent implements AppEvent {
  public readonly payload: ImageData;
  public readonly eventType = NewBackgroundTextureEvent.eventType;
  public handled = false;

  constructor(imageData: ImageData) {
    this.payload = imageData;
  }

  public static get eventType() {
    return 'NewBackgroundTexture';
  }
}
