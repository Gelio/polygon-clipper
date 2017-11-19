import { NormalMapType } from 'common/NormalMapType';

import { AppEvent } from 'events/AppEvent';

export class NewNormalMapTypeEvent implements AppEvent {
  public readonly payload: NormalMapType;
  public readonly eventType = NewNormalMapTypeEvent.eventType;
  public handled = false;

  constructor(normalMapType: NormalMapType) {
    this.payload = normalMapType;
  }

  public static get eventType() {
    return NewNormalMapTypeEvent.name;
  }
}
