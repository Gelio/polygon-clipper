import { Layer } from 'common/Layer';
import { EventAggregator } from 'events/EventAggregator';
import { LEX } from 'LEX';
import { LineRasterizer } from 'line-rasterizer/LineRasterizer';
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

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new Renderer({ lineRasterizer: new LineRasterizer(), canvas: this.canvas });
    this.stage = new Stage();
    this.eventAggregator = new EventAggregator();

    this.uiController = new UIController({
      renderer: this.renderer,
      stage: this.stage,
      canvas: this.canvas,
      eventAggregator: this.eventAggregator
    });

    this.render = this.render.bind(this);
  }

  public init() {
    const polygonLayer = new Layer(LEX.POLYGON_LAYER_NAME);
    this.stage.layers.push(polygonLayer);

    this.uiController.init();
    this.addEventListeners();
  }

  public destroy() {
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
