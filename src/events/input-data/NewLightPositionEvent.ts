import { Vector3 } from 'common/Vector3';

import { AppEvent } from 'events/AppEvent';

export class NewLightPositionEvent implements AppEvent {
  public readonly payload: Vector3;
  public readonly eventType = NewLightPositionEvent.eventType;
  public handled = false;

  constructor(lightPosition: Vector3) {
    this.payload = lightPosition;
  }

  public static get eventType() {
    return NewLightPositionEvent.name;
  }
}
