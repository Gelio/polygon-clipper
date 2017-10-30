import { Point } from 'common/Point';
import { AppEvent } from 'events/AppEvent';
import { PathPointComponent } from 'ui/components/PathPointComponent';

export class PointDragEvent implements AppEvent {
  public readonly payload: {
    component: PathPointComponent,
    newPosition: Point
  };
  public readonly eventType = PointDragEvent.eventType;
  public handled = false;

  constructor(pathPointComponent: PathPointComponent, newPosition: Point) {
    this.payload = {
      component: pathPointComponent,
      newPosition
    };
  }

  public static get eventType() {
    return 'PointDragEvent';
  }
}
