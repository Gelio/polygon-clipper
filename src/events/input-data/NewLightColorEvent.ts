import { Vector3 } from 'common/Vector3';

import { AppEvent } from 'events/AppEvent';

export class NewLightColorEvent implements AppEvent {
  public readonly payload: Vector3;
  public readonly eventType = NewLightColorEvent.eventType;
  public handled = false;

  constructor(color: Vector3) {
    this.payload = color;
  }

  public static get eventType() {
    return NewLightColorEvent.name;
  }
}
