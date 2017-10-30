import { AppEvent } from 'events/AppEvent';

import { Line } from 'common/Line';
import { Path } from 'common/Path';
import { Point } from 'common/Point';

interface LineClickEventPayload {
  line: Line;
  path: Path;
  position: Point;
}

export class LineClickEvent implements AppEvent {
  public readonly eventType = LineClickEvent.eventType;
  public readonly payload: LineClickEventPayload;
  public handled = false;

  constructor(line: Line, path: Path, position: Point) {
    this.payload = {
      line,
      path,
      position
    };
  }

  public static get eventType() {
    return 'LineClickEvent';
  }
}
