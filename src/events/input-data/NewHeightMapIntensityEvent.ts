import { AppEvent } from 'events/AppEvent';

export class NewHeightMapIntensityEvent implements AppEvent {
  public readonly payload: number;
  public readonly eventType = NewHeightMapIntensityEvent.eventType;
  public handled = false;

  constructor(intensity: number) {
    this.payload = intensity;
  }

  public static get eventType() {
    return NewHeightMapIntensityEvent.name;
  }
}
