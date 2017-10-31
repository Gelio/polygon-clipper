import { Color } from 'common/Color';

import { AppEvent } from 'events/AppEvent';

export class NewLightColor implements AppEvent {
  public readonly payload = null;
  public readonly eventType = NewLightColor.eventType;
  public readonly color: Color;
  public handled = false;

  constructor(color: Color) {
    this.color = color;
  }

  public static get eventType() {
    return NewLightColor.name;
  }
}
