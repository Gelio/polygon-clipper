import { configuration } from 'configuration';
import { LEX } from 'LEX';
import { Renderer } from 'Renderer';
import { Stage } from 'Stage';

import { InputDataService } from 'ui/InputDataService';
import { LoadingUIService } from 'ui/LoadingUIService';
import { MousePositionTransformer } from 'ui/MousePositionTransformer';
import { NewPolygonUIController } from 'ui/NewPolygonUIController';
import { PathDraggingService } from 'ui/PathDraggingService';
import { PointDraggingService } from 'ui/PointDraggingService';
import { PointInserterService } from 'ui/PointInserterService';
import { PointRemoverService } from 'ui/PointRemoverService';
import { PointSyncService } from 'ui/PointSyncService';
import { SerializationService } from 'ui/SerializationService';

import { ClosestPathFinder } from 'services/ClosestPathFinder';
import { ImageDownloader } from 'services/ImageDownloader';
import { PolygonClipper } from 'services/PolygonClipper';
import { Service } from 'services/Service';

import { EventAggregator } from 'events/EventAggregator';
import { LineClickEvent } from 'events/LineClickEvent';

import 'ui/components/dialog-overlay/DialogOverlay';
import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';
import 'ui/components/instructions/InstructionsButton';
import 'ui/components/instructions/InstructionsDialog';
import { PolygonClippingService } from 'ui/PolygonClippingService';

interface UIControllerDependencies {
  canvas: HTMLCanvasElement;
  renderer: Renderer;
  stage: Stage;
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
  polygonClipper: PolygonClipper;
  closestPathFinder: ClosestPathFinder;
}

export class UIController implements Service {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: Renderer;
  private readonly stage: Stage;
  private readonly eventAggregator: EventAggregator;
  private readonly imageDownloader: ImageDownloader;
  private readonly polygonClipper: PolygonClipper;
  private readonly closestPathFinder: ClosestPathFinder;

  private mousePositionTransformer: MousePositionTransformer;
  private applicationUIContainer: HTMLElement;
  private dialogOverlay: DialogOverlay;

  private readonly uiServices: Service[] = [];
  private newPolygonUIController: NewPolygonUIController;
  private pathDraggingService: PathDraggingService;
  private polygonClippingService: PolygonClippingService;

  constructor(dependencies: UIControllerDependencies) {
    this.canvas = dependencies.canvas;
    this.renderer = dependencies.renderer;
    this.stage = dependencies.stage;
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;
    this.polygonClipper = dependencies.polygonClipper;
    this.closestPathFinder = dependencies.closestPathFinder;

    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  public init() {
    this.findApplicationUIContainer();
    this.findDialogOverlay();

    this.mousePositionTransformer = new MousePositionTransformer(this.canvas);
    this.canvas.addEventListener('click', this.onClick);
    this.canvas.addEventListener('mousedown', this.onMouseDown);

    this.createNewPolygonUIController();
    this.createPointDraggingService();
    this.createPointInserterService();
    this.createPointRemoverService();
    this.createPointSyncService();
    this.createPathDraggingService();
    this.createSerializationService();
    this.createInputDataService();
    this.createPolygonClippingService();
    this.createLoadingUIService();

    this.uiServices.forEach(uiService => uiService.init());
  }

  public destroy() {
    this.canvas.removeEventListener('click', this.onClick);
    this.canvas.removeEventListener('mousedown', this.onMouseDown);

    this.uiServices.forEach(uiService => uiService.destroy());
    this.uiServices.splice(0, this.uiServices.length);
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

    if (event.shiftKey) {
      return this.polygonClippingService.clipPolygons(point);
    }

    const hitTestResult = this.stage.hitTest(point);

    if (!hitTestResult) {
      return this.newPolygonUIController.addNewPoint(point);
    }

    if (!hitTestResult.path) {
      return;
    }

    event.stopPropagation();
    this.eventAggregator.dispatchEvent(
      new LineClickEvent(hitTestResult.line, hitTestResult.path, point)
    );
  }

  private findApplicationUIContainer() {
    const applicationUIContainer = document.getElementById(configuration.applicationUIContainerID);
    if (!applicationUIContainer) {
      throw new Error('Application UI container not found');
    }

    this.applicationUIContainer = applicationUIContainer;
  }

  private findDialogOverlay() {
    const dialogOverlay = document.querySelector('app-dialog-overlay');
    if (!dialogOverlay) {
      throw new Error('Dialog overlay not found');
    }

    this.dialogOverlay = <DialogOverlay>dialogOverlay;
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
      stage: this.stage,
      canvas: this.canvas
    });

    this.uiServices.push(pointDraggingService);
  }

  private createNewPolygonUIController() {
    this.newPolygonUIController = new NewPolygonUIController({
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

  private createPathDraggingService() {
    this.pathDraggingService = new PathDraggingService({
      canvas: this.canvas,
      eventAggregator: this.eventAggregator,
      mousePositionTransformer: this.mousePositionTransformer,
      stage: this.stage,
      closestPathFinder: this.closestPathFinder
    });

    this.uiServices.push(this.pathDraggingService);
  }

  private createSerializationService() {
    const serializationService = new SerializationService({
      eventAggregator: this.eventAggregator,
      stage: this.stage
    });

    this.uiServices.push(serializationService);
  }

  private createInputDataService() {
    const inputDataService = new InputDataService({
      eventAggregator: this.eventAggregator,
      imageDownloader: this.imageDownloader,
      dialogOverlay: this.dialogOverlay
    });

    this.uiServices.push(inputDataService);
  }

  private createPolygonClippingService() {
    this.polygonClippingService = new PolygonClippingService({
      polygonClipper: this.polygonClipper,
      eventAggregator: this.eventAggregator,
      polygonLayer: this.stage.findLayerByName(LEX.POLYGON_LAYER_NAME),
      closestPathFinder: this.closestPathFinder
    });

    this.uiServices.push(this.polygonClippingService);
  }

  private createLoadingUIService() {
    const loadingUIService = new LoadingUIService({
      dialogOverlay: this.dialogOverlay,
      eventAggregator: this.eventAggregator
    });

    this.uiServices.push(loadingUIService);
  }
}
