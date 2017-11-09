import { Layer } from 'common/Layer';
import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';
import { configuration } from 'configuration';
import { LEX } from 'LEX';
import { Renderer } from 'Renderer';
import { Stage } from 'Stage';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';

import { Service } from 'services/Service';

import { EventAggregator } from 'events/EventAggregator';
import { PointClickEvent } from 'events/PointClickEvent';
import { RenderEvent } from 'events/RenderEvent';
import { RenderFinishedEvent } from 'events/RenderFinishedEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface NewPolygonUIControllerDependencies {
  canvas: HTMLCanvasElement;
  mousePositionTransformer: MousePositionTransformer;
  polygonLayer: Layer;
  renderer: Renderer;
  stage: Stage;
  eventAggregator: EventAggregator;
}

export class NewPolygonUIController implements Service {
  private readonly canvas: HTMLCanvasElement;
  private readonly stage: Stage;
  private readonly mousePositionTransformer: MousePositionTransformer;
  private readonly renderer: Renderer;
  private readonly eventAggregator: EventAggregator;

  private unfinishedPath: Path;
  private readonly pathLayer = new Layer(LEX.PATH_LAYER_NAME);
  private readonly polygonLayer: Layer;

  private lastMousePosition: Point;

  constructor(dependencies: NewPolygonUIControllerDependencies) {
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
    this.drawNewLineGuide = this.drawNewLineGuide.bind(this);
  }

  public init() {
    this.stage.layers.push(this.pathLayer);
    this.startNewUnfinishedPath();
  }

  public destroy() {
    this.removeEventListeners();
    this.stage.removeLayer(this.pathLayer);
  }

  public addNewPoint(point: Point) {
    this.unfinishedPath.addVertex(point);
    this.dispatchUpdateUIEvents();

    if (this.unfinishedPath.getVerticesCount() === 1) {
      this.lastMousePosition = point;
      this.addEventListeners();
    }
  }

  private onMouseMove(event: MouseEvent) {
    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.lastMousePosition = this.mousePositionTransformer.getPointFromMouseEvent(event);
  }

  private drawNewLineGuide() {
    const lastPoint = this.unfinishedPath.getVertex(this.unfinishedPath.getVerticesCount() - 1);
    this.renderer.drawLine(
      lastPoint,
      this.lastMousePosition,
      configuration.newLinePreviewProperties
    );
  }

  private onPointClick(event: PointClickEvent) {
    const pathPointElement = event.payload;

    if (pathPointElement.path === this.unfinishedPath && pathPointElement.initial) {
      event.handled = true;

      try {
        this.closePath();
        pathPointElement.initial = false;
      } catch (error) {
        alert(error.message);
      }
    }
  }

  private startNewUnfinishedPath() {
    this.unfinishedPath = new Path([], configuration.newPolygonLineProperties);
    this.pathLayer.paths.push(this.unfinishedPath);
    this.removeEventListeners();
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

  private addEventListeners() {
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.eventAggregator.addEventListener(RenderFinishedEvent.name, this.drawNewLineGuide);
    window.addEventListener('keydown', this.onKeyDown);
    this.eventAggregator.addEventListener(PointClickEvent.eventType, this.onPointClick);
  }

  private removeEventListeners() {
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    this.eventAggregator.removeEventListener(RenderFinishedEvent.name, this.drawNewLineGuide);
    window.removeEventListener('keydown', this.onKeyDown);
    this.eventAggregator.removeEventListener(PointClickEvent.eventType, this.onPointClick);
  }
}
