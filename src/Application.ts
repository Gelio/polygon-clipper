import { ImageDownloader } from 'common/ImageDownloader';
import { Layer } from 'common/Layer';
import { EventAggregator } from 'events/EventAggregator';
import { LEX } from 'LEX';

import { PolygonFiller } from 'polygon-filler/PolygonFiller';

import { InputDataInitializer } from 'InputDataInitializer';
import { Renderer } from 'Renderer';
import { Stage } from 'Stage';

import { UIController } from 'ui/UIController';

import { RenderEvent } from 'events/RenderEvent';
import { RenderFinishedEvent } from 'events/RenderFinishedEvent';

export class Application {
  private canvas: HTMLCanvasElement;
  private renderer: Renderer;
  private uiController: UIController;
  private stage: Stage;
  private eventAggregator: EventAggregator;
  private imageDownloader: ImageDownloader;
  private polygonFiller: PolygonFiller;
  private polygonLayer: Layer;

  private isRendering = false;
  private isNextRenderQueued = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.eventAggregator = new EventAggregator();
    this.imageDownloader = new ImageDownloader();
    this.polygonFiller = new PolygonFiller({
      canvas: this.canvas,
      eventAggregator: this.eventAggregator
    });

    this.renderer = new Renderer({
      canvas: this.canvas,
      polygonFiller: this.polygonFiller
    });
    this.stage = new Stage();

    this.uiController = new UIController({
      renderer: this.renderer,
      stage: this.stage,
      canvas: this.canvas,
      eventAggregator: this.eventAggregator,
      imageDownloader: this.imageDownloader
    });

    this.onRenderEvent = this.onRenderEvent.bind(this);
    this.render = this.render.bind(this);
  }

  public async init() {
    this.polygonLayer = new Layer(LEX.POLYGON_LAYER_NAME);
    this.stage.layers.push(this.polygonLayer);

    this.polygonFiller.init();
    this.uiController.init();
    this.addEventListeners();

    const inputDataInitializer = new InputDataInitializer({
      eventAggregator: this.eventAggregator,
      imageDownloader: this.imageDownloader,
      polygonLayer: this.polygonLayer
    });

    await inputDataInitializer.init();
  }

  public destroy() {
    this.polygonFiller.destroy();
    this.uiController.destroy();
    this.removeEventListeners();
  }

  private onRenderEvent(event: RenderEvent) {
    event.handled = true;

    if (this.isRendering) {
      this.isNextRenderQueued = true;

      return;
    }

    this.isRendering = true;
    requestAnimationFrame(this.render);
  }

  private async render() {
    await this.polygonFiller.fillPolygons(this.polygonLayer.paths);
    this.stage.render(this.renderer);
    this.eventAggregator.dispatchEvent(new RenderFinishedEvent());

    if (this.isNextRenderQueued) {
      this.isNextRenderQueued = false;
      requestAnimationFrame(this.render);
    } else {
      this.isRendering = false;
    }

  }

  private addEventListeners() {
    this.eventAggregator.addEventListener(RenderEvent.eventType, this.onRenderEvent);
  }

  private removeEventListeners() {
    this.eventAggregator.removeEventListener(RenderEvent.eventType, this.onRenderEvent);
  }
}
