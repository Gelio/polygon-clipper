import { AppEvent } from 'events/AppEvent';

export class NewLightPositionRadiusEvent implements AppEvent {
  public readonly payload: number;
  public readonly eventType = NewLightPositionRadiusEvent.eventType;
  public handled = false;

  constructor(lightPositionRadius: number) {
    this.payload = lightPositionRadius;
  }

  public static get eventType() {
    return NewLightPositionRadiusEvent.name;
  }
}
