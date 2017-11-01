import { Vector3 } from 'common/Vector3';

import { AppEvent } from 'events/AppEvent';

export class NewLightVersorEvent implements AppEvent {
  public readonly payload: Vector3;
  public readonly eventType = NewLightVersorEvent.eventType;
  public handled = false;

  constructor(lightVersor: Vector3) {
    this.payload = lightVersor;
  }

  public static get eventType() {
    return NewLightVersorEvent.name;
  }
}
