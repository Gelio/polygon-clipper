import { Point } from 'common/Point';

export class MousePositionTransformer {
  private canvas: HTMLCanvasElement;
  private canvasClientRect: ClientRect;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.updateCanvasOffset();

    setInterval(() => {
      this.updateCanvasOffset();
    }, 1000);
  }

  public updateCanvasOffset() {
    this.canvasClientRect = this.canvas.getBoundingClientRect();
  }

  public getPointFromMouseEvent(event: MouseEvent) {
    return new Point(
      event.clientX - this.canvasClientRect.left,
      event.clientY - this.canvasClientRect.top
    ).floor();
  }
}
