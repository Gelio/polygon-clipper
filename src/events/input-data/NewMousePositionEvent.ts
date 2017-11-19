import { AppEvent } from 'events/AppEvent';

type Position = { x: number, y: number };

export class NewMousePositionEvent implements AppEvent {
  public readonly payload: Position;
  public readonly eventType = NewMousePositionEvent.eventType;
  public handled = false;

  constructor(position: Position) {
    this.payload = position;
  }

  public static get eventType() {
    return NewMousePositionEvent.name;
  }
}
