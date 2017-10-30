import { configuration } from 'configuration';
import { LEX } from 'LEX';
import { Renderer } from 'Renderer';
import { Stage } from 'Stage';

import { UIConditionController } from 'ui/conditions/UIConditionController';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';
import { NewPolygonUIController } from 'ui/NewPolygonUIController';
import { PathDraggingService } from 'ui/PathDraggingService';
import { PointDraggingService } from 'ui/PointDraggingService';
import { PointInserterService } from 'ui/PointInserterService';
import { PointRemoverService } from 'ui/PointRemoverService';
import { PointSyncService } from 'ui/PointSyncService';
import { UIService } from 'ui/UIService';

import { ConditionMatcher } from 'conditions/ConditionMatcher';

import { EventAggregator } from 'events/EventAggregator';
import { LineClickEvent } from 'events/LineClickEvent';

import 'ui/components/instructions/InstructionsButton';
import 'ui/components/instructions/InstructionsDialog';
import { LoadButton } from 'ui/components/serialization/LoadButton';
import { SaveButton } from 'ui/components/serialization/SaveButton';

interface UIControllerDependencies {
  canvas: HTMLCanvasElement;
  renderer: Renderer;
  stage: Stage;
  eventAggregator: EventAggregator;
}

export class UIController {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: Renderer;
  private readonly stage: Stage;
  private readonly eventAggregator: EventAggregator;

  private mousePositionTransformer: MousePositionTransformer;
  private applicationUIContainer: HTMLElement;
  private serializationContainer: HTMLElement;

  private readonly uiServices: UIService[] = [];
  private newPolygonUIController: NewPolygonUIController;
  private pathDraggingService: PathDraggingService;

  constructor(dependencies: UIControllerDependencies) {
    this.canvas = dependencies.canvas;
    this.renderer = dependencies.renderer;
    this.stage = dependencies.stage;
    this.eventAggregator = dependencies.eventAggregator;

    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  public init() {
    const applicationUIContainer = document.getElementById(configuration.applicationUIContainerID);
    if (!applicationUIContainer) {
      throw new Error('Application UI container not found');
    }

    this.applicationUIContainer = applicationUIContainer;

    this.mousePositionTransformer = new MousePositionTransformer(this.canvas);
    this.canvas.addEventListener('click', this.onClick);
    this.canvas.addEventListener('mousedown', this.onMouseDown);

    this.createNewPolygonUIController();
    this.createPointDraggingService();
    this.createPointInserterService();
    this.createPointRemoverService();
    this.createPointSyncService();
    this.createUIConditionController();
    this.createPathDraggingService();

    this.uiServices.forEach(uiService => uiService.init());

    this.addSerializationButtons();
  }

  public destroy() {
    this.canvas.removeEventListener('click', this.onClick);
    this.canvas.removeEventListener('mousedown', this.onMouseDown);

    this.uiServices.forEach(uiService => uiService.destroy());
    this.uiServices.splice(0, this.uiServices.length);

    // tslint:disable-next-line
    this.serializationContainer.innerHTML = '';
  }

  private addSerializationButtons() {
    const serializationContainer = document.getElementById('serialization-container');
    if (!serializationContainer) {
      throw new Error('Serialization container not found');
    }

    this.serializationContainer = serializationContainer;

    const loadButton = new LoadButton({
      eventAggregator: this.eventAggregator,
      stage: this.stage
    });
    const saveButton = new SaveButton({
      stage: this.stage
    });

    this.serializationContainer.appendChild(loadButton);
    this.serializationContainer.appendChild(saveButton);
  }

  private onMouseDown(event: MouseEvent) {
    if (!event.ctrlKey) {
      return;
    }

    this.pathDraggingService.startMovingPath(event);

    return false;
  }

  private onClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.pathDraggingService.isDragging) {
      return;
    }

    const point = this.mousePositionTransformer.getPointFromMouseEvent(event);

    const hitTestResult = this.stage.hitTest(point);

    if (!hitTestResult) {
      return this.newPolygonUIController.addNewPoint(point);
    }

    if (!hitTestResult.path) {
      return;
    }

    event.stopPropagation();
    this.eventAggregator.dispatchEvent(new LineClickEvent(hitTestResult.line, hitTestResult.path, point));
  }

  private createPointSyncService() {
    const pointSyncService = new PointSyncService({
      container: this.applicationUIContainer,
      mousePositionTransformer: this.mousePositionTransformer,
      stage: this.stage,
      eventAggregator: this.eventAggregator
    });

    this.uiServices.push(pointSyncService);
  }

  private createPointRemoverService() {
    const pointRemoverService = new PointRemoverService({
      eventAggregator: this.eventAggregator
    });

    this.uiServices.push(pointRemoverService);
  }

  private createPointDraggingService() {
    const pointDraggingService = new PointDraggingService({
      eventAggregator: this.eventAggregator,
      stage: this.stage
    });

    this.uiServices.push(pointDraggingService);
  }

  private createNewPolygonUIController() {
    this.newPolygonUIController = new NewPolygonUIController({
      applicationUIContainer: this.applicationUIContainer,
      canvas: this.canvas,
      stage: this.stage,
      polygonLayer: this.stage.findLayerByName(LEX.POLYGON_LAYER_NAME),
      renderer: this.renderer,
      mousePositionTransformer: this.mousePositionTransformer,
      eventAggregator: this.eventAggregator
    });

    this.uiServices.push(this.newPolygonUIController);
  }

  private createPointInserterService() {
    const pointInserterService = new PointInserterService({
      eventAggregator: this.eventAggregator
    });

    this.uiServices.push(pointInserterService);
  }

  private createUIConditionController() {
    const uiConditionController = new UIConditionController({
      eventAggregator: this.eventAggregator,
      applicationUIContainer: this.applicationUIContainer,
      conditionMatcher: new ConditionMatcher()
    });

    this.uiServices.push(uiConditionController);
  }

  private createPathDraggingService() {
    this.pathDraggingService = new PathDraggingService({
      canvas: this.canvas,
      eventAggregator: this.eventAggregator,
      mousePositionTransformer: this.mousePositionTransformer,
      stage: this.stage
    });

    this.uiServices.push(this.pathDraggingService);
  }
}
