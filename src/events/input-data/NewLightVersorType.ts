import { LightVersorType } from 'common/LightVersorType';

import { AppEvent } from 'events/AppEvent';

export class NewLightVersorType implements AppEvent {
  public readonly payload = null;
  public readonly eventType = NewLightVersorType.eventType;
  public readonly lightVersorType: LightVersorType;
  public handled = false;

  constructor(lightVersorType: LightVersorType) {
    this.lightVersorType = lightVersorType;
  }

  public static get eventType() {
    return NewLightVersorType.name;
  }
}
