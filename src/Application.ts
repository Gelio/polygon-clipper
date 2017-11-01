import { ImageDownloader } from 'common/ImageDownloader';
import { Layer } from 'common/Layer';
import { EventAggregator } from 'events/EventAggregator';
import { LEX } from 'LEX';

import { LineRasterizer } from 'line-rasterizer/LineRasterizer';
import { PolygonFiller } from 'polygon-filler/PolygonFiller';

import { InputDataInitializer } from 'InputDataInitializer';
import { Renderer } from 'Renderer';
import { Stage } from 'Stage';

import { UIController } from 'ui/UIController';

import { RenderEvent } from 'events/RenderEvent';

export class Application {
  private canvas: HTMLCanvasElement;
  private renderer: Renderer;
  private uiController: UIController;
  private stage: Stage;
  private eventAggregator: EventAggregator;
  private imageDownloader: ImageDownloader;
  private polygonFiller: PolygonFiller;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.eventAggregator = new EventAggregator();
    this.imageDownloader = new ImageDownloader();
    this.polygonFiller = new PolygonFiller({
      canvas: this.canvas,
      eventAggregator: this.eventAggregator
    });

    this.renderer = new Renderer({
      lineRasterizer: new LineRasterizer(),
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

    this.render = this.render.bind(this);
  }

  public async init() {
    console.log('Initialization');

    const polygonLayer = new Layer(LEX.POLYGON_LAYER_NAME);
    this.stage.layers.push(polygonLayer);

    this.polygonFiller.init();
    this.uiController.init();
    this.addEventListeners();

    const inputDataInitializer = new InputDataInitializer({
      eventAggregator: this.eventAggregator,
      imageDownloader: this.imageDownloader,
      polygonLayer
    });

    await inputDataInitializer.init();
    console.log('Initialiation complete');
  }

  public destroy() {
    this.polygonFiller.destroy();
    this.uiController.destroy();
    this.removeEventListeners();
  }

  private render(event: RenderEvent) {
    this.renderer.clear();
    this.stage.render(this.renderer);
    event.handled = true;
  }

  private addEventListeners() {
    this.eventAggregator.addEventListener(RenderEvent.eventType, this.render);
  }

  private removeEventListeners() {
    this.eventAggregator.removeEventListener(RenderEvent.eventType, this.render);
  }
}
