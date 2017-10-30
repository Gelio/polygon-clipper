import { Point } from 'common/Point';

export class MousePositionTransformer {
  private canvas: HTMLCanvasElement;
  private canvasClientRect: ClientRect;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.updateCanvasOffset();
  }

  public updateCanvasOffset() {
    this.canvasClientRect = this.canvas.getBoundingClientRect();
  }

  public getPointFromMouseEvent(event: MouseEvent) {
    return new Point(
      event.pageX - this.canvasClientRect.left,
      event.pageY - this.canvasClientRect.top
    );
  }
}
