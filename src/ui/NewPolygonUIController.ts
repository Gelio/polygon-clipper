import { Layer } from 'common/Layer';
import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';
import { configuration } from 'configuration';
import { LEX } from 'LEX';
import { Renderer } from 'Renderer';
import { Stage } from 'Stage';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';
import { UIService } from 'ui/UIService';

import { EventAggregator } from 'events/EventAggregator';
import { PointClickEvent } from 'events/PointClickEvent';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface NewPolygonUIControllerDependencies {
  applicationUIContainer: HTMLElement;
  canvas: HTMLCanvasElement;
  mousePositionTransformer: MousePositionTransformer;
  polygonLayer: Layer;
  renderer: Renderer;
  stage: Stage;
  eventAggregator: EventAggregator;
}

export class NewPolygonUIController implements UIService {
  private readonly applicationUIContainer: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly stage: Stage;
  private readonly mousePositionTransformer: MousePositionTransformer;
  private readonly renderer: Renderer;
  private readonly eventAggregator: EventAggregator;

  private unfinishedPath: Path;
  private readonly pathLayer = new Layer(LEX.PATH_LAYER_NAME);
  private readonly polygonLayer: Layer;

  constructor(dependencies: NewPolygonUIControllerDependencies) {
    this.applicationUIContainer = dependencies.applicationUIContainer;
    this.canvas = dependencies.canvas;
    this.stage = dependencies.stage;
    this.polygonLayer = dependencies.polygonLayer;
    this.mousePositionTransformer = dependencies.mousePositionTransformer;
    this.renderer = dependencies.renderer;
    this.eventAggregator = dependencies.eventAggregator;

    this.closePath = this.closePath.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onPointClick = this.onPointClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public init() {
    this.stage.layers.push(this.pathLayer);
    this.startNewUnfinishedPath();

    this.canvas.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('keydown', this.onKeyDown);
    this.eventAggregator.addEventListener(PointClickEvent.eventType, this.onPointClick);
  }

  public destroy() {
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('keydown', this.onKeyDown);
    this.eventAggregator.removeEventListener(PointClickEvent.eventType, this.onPointClick);
    this.stage.removeLayer(this.pathLayer);
  }

  public addNewPoint(point: Point) {
    this.unfinishedPath.addVertex(point);
    this.dispatchUpdateUIEvents();
  }

  private onMouseMove(event: MouseEvent) {
    const unfinishedPathVerticesCount = this.unfinishedPath.getVerticesCount();
    if (unfinishedPathVerticesCount === 0) {
      return;
    }

    const lastPoint = this.unfinishedPath.getVertex(unfinishedPathVerticesCount - 1);
    this.eventAggregator.dispatchEvent(new RenderEvent());

    const point = this.mousePositionTransformer.getPointFromMouseEvent(event);
    this.renderer.drawLine(lastPoint, point, configuration.newLinePreviewProperties);
  }

  private onPointClick(event: PointClickEvent) {
    const pathPointComponent = event.payload;

    if (pathPointComponent.path === this.unfinishedPath && pathPointComponent.initial) {
      event.handled = true;

      try {
        this.closePath();
        pathPointComponent.initial = false;
      } catch (error) {
        alert(error.message);
      }
    }
  }

  private startNewUnfinishedPath() {
    this.unfinishedPath = new Path([], configuration.newPolygonLineProperties);
    this.pathLayer.paths.push(this.unfinishedPath);
  }

  private closePath() {
    if (this.unfinishedPath.getVerticesCount() < configuration.minPolygonPoints) {
      throw new Error(`Polygon must have at least ${configuration.minPolygonPoints} vertices`);
    }

    this.unfinishedPath.lineProperties = configuration.polygonLineProperties;
    const polygon = new Polygon(this.unfinishedPath);
    this.polygonLayer.paths.push(polygon);
    this.pathLayer.removePath(this.unfinishedPath);

    this.startNewUnfinishedPath();
    this.dispatchUpdateUIEvents();
  }

  private dispatchUpdateUIEvents() {
    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
  }

  private onKeyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 27:
        this.pathLayer.removePath(this.unfinishedPath);
        this.startNewUnfinishedPath();
        this.dispatchUpdateUIEvents();
        break;

      default:
        break;
    }
  }
}
