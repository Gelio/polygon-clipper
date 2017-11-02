import { Point } from 'common/Point';
import { AppEvent } from 'events/AppEvent';
import { PathPointElement } from 'ui/components/path-point/PathPointElement';

export class PointDragEvent implements AppEvent {
  public readonly payload: {
    element: PathPointElement,
    newPosition: Point
  };
  public readonly eventType = PointDragEvent.eventType;
  public handled = false;

  constructor(pathPointElement: PathPointElement, newPosition: Point) {
    this.payload = {
      element: pathPointElement,
      newPosition
    };
  }

  public static get eventType() {
    return 'PointDragEvent';
  }
}
