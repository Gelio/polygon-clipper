import { COLORS } from 'common/COLORS';
import { Layer } from 'common/Layer';
import { LineProperties } from 'common/LineProperties';
import { Polygon } from 'common/Polygon';
import { configuration } from 'configuration';
import { EventAggregator } from 'events/EventAggregator';
import { LEX } from 'LEX';
import { Stage } from 'Stage';
import { UIService } from 'ui/UIService';

import { ContinuousConditionFixer } from 'conditions/fixers/ContinuousConditionFixer';

import { FinishPointDragEvent } from 'events/point-drag/FinishPointDragEvent';
import { PointDragEvent } from 'events/point-drag/PointDragEvent';
import { StartPointDragEvent } from 'events/point-drag/StartPointDragEvent';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface PointDraggingServiceDependencies {
  eventAggregator: EventAggregator;
  stage: Stage;
}

export class PointDraggingService implements UIService {
  private readonly eventAggregator: EventAggregator;
  private readonly stage: Stage;
  private pathGhostLayer: Layer;
  private continuousConditionFixer: ContinuousConditionFixer | null;

  constructor(dependencies: PointDraggingServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.stage = dependencies.stage;

    this.onStartPointDrag = this.onStartPointDrag.bind(this);
    this.onFinishPointDrag = this.onFinishPointDrag.bind(this);
    this.onPointDrag = this.onPointDrag.bind(this);
  }

  public init() {
    this.pathGhostLayer = new Layer(LEX.PATH_GHOST_LAYER_NAME);
    this.stage.layers.splice(0, 0, this.pathGhostLayer);

    this.eventAggregator.addEventListener(StartPointDragEvent.eventType, this.onStartPointDrag);
    this.eventAggregator.addEventListener(FinishPointDragEvent.eventType, this.onFinishPointDrag);
    this.eventAggregator.addEventListener(PointDragEvent.eventType, this.onPointDrag);
  }

  public destroy() {
    this.pathGhostLayer.paths = [];
    this.stage.removeLayer(this.pathGhostLayer);

    this.eventAggregator.removeEventListener(StartPointDragEvent.eventType, this.onStartPointDrag);
    this.eventAggregator.removeEventListener(
      FinishPointDragEvent.eventType,
      this.onFinishPointDrag
    );
    this.eventAggregator.removeEventListener(PointDragEvent.eventType, this.onPointDrag);
  }

  private onStartPointDrag(event: StartPointDragEvent) {
    event.handled = true;

    if (event.payload.path instanceof Polygon) {
      this.continuousConditionFixer = new ContinuousConditionFixer(event.payload.path, event.payload.point);
    }

    if (!configuration.displayPathGhostWhenDragging) {
      return;
    }

    const path = event.payload.path.clone();
    path.lineProperties = new LineProperties(COLORS.GREEN, 1);
    this.pathGhostLayer.paths.push(path);

    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
  }

  private onFinishPointDrag(event: FinishPointDragEvent) {
    event.handled = true;
    this.continuousConditionFixer = null;
    if (!configuration.displayPathGhostWhenDragging) {
      return;
    }

    this.pathGhostLayer.paths = [];

    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
  }

  private onPointDrag(event: PointDragEvent) {
    const { component, newPosition } = event.payload;

    for (const point of component.path.getVerticesIterator()) {
      if (point.equals(newPosition)) {
        return;
      }
    }

    component.point.moveTo(newPosition);

    if (this.continuousConditionFixer) {
      this.continuousConditionFixer.fix();
      this.continuousConditionFixer.propagateChangesToOriginalPolygon();
    }

    this.eventAggregator.dispatchEvent(new RenderEvent());
    event.handled = true;
  }
}
