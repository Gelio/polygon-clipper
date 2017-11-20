import { AppEvent } from 'events/AppEvent';

export class NewLightingCoefficientsEvent implements AppEvent {
  public readonly payload: {
    kD: number;
    kS: number;
    m: number;
  };
  public readonly eventType = NewLightingCoefficientsEvent.eventType;
  public handled = false;

  constructor(kD: number, kS: number, m: number) {
    this.payload = { kD, kS, m };
  }

  public static get eventType() {
    return NewLightingCoefficientsEvent.name;
  }
}
