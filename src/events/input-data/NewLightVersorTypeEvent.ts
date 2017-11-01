import { LightVersorType } from 'common/LightVersorType';

import { AppEvent } from 'events/AppEvent';

export class NewLightVersorTypeEvent implements AppEvent {
  public readonly payload: LightVersorType;
  public readonly eventType = NewLightVersorTypeEvent.eventType;
  public handled = false;

  constructor(lightVersorType: LightVersorType) {
    this.payload = lightVersorType;
  }

  public static get eventType() {
    return NewLightVersorTypeEvent.name;
  }
}
