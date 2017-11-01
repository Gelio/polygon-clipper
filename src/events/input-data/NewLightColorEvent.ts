import { Color } from 'common/Color';

import { AppEvent } from 'events/AppEvent';

export class NewLightColorEvent implements AppEvent {
  public readonly payload: Color;
  public readonly eventType = NewLightColorEvent.eventType;
  public handled = false;

  constructor(color: Color) {
    this.payload = color;
  }

  public static get eventType() {
    return NewLightColorEvent.name;
  }
}
