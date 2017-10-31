import { AppEvent } from 'events/AppEvent';

export class NewBackgroundTexture implements AppEvent {
  public readonly payload = null;
  public readonly eventType = NewBackgroundTexture.eventType;
  public readonly imageData: ImageData;
  public handled = false;

  constructor(imageData: ImageData) {
    this.imageData = imageData;
  }

  public static get eventType() {
    return 'NewBackgroundTexture';
  }
}
