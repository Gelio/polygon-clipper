import { LightType } from 'common/LightType';

import { AppEvent } from 'events/AppEvent';

export class NewLightTypeEvent implements AppEvent {
  public readonly payload: LightType;
  public readonly eventType = NewLightTypeEvent.eventType;
  public handled = false;

  constructor(lightType: LightType) {
    this.payload = lightType;
  }

  public static get eventType() {
    return NewLightTypeEvent.name;
  }
}
