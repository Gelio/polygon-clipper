import { Color } from 'common/Color';
import { COLORS } from 'common/COLORS';
import { Line } from 'common/Line';
import { LineProperties } from 'common/LineProperties';
import { Path } from 'common/Path';
import { Point } from 'common/Point';
import { Polygon } from 'common/Polygon';

import { LineRasterizer } from 'line-rasterizer/LineRasterizer';
import { PolygonFiller } from 'polygon-filler/PolygonFiller';

import { configuration } from 'configuration';

interface RendererDependencies {
  canvas: HTMLCanvasElement;
  lineRasterizer: LineRasterizer;
  polygonFiller: PolygonFiller;
}

export class Renderer {
  private canvas: HTMLCanvasElement;
  private renderingContext: CanvasRenderingContext2D;
  private lineRasterizer: LineRasterizer;
  private polygonFiller: PolygonFiller;

  constructor(dependencies: RendererDependencies) {
    this.canvas = dependencies.canvas;
    const context = this.canvas.getContext('2d');
    if (context === null) {
      throw new Error('Cannot get canvas 2d rendering context');
    }

    this.renderingContext = context;
    this.renderingContext.font = configuration.canvasFont;

    this.lineRasterizer = dependencies.lineRasterizer;
    this.polygonFiller = dependencies.polygonFiller;
    this.polygonFiller.injectCanvasRenderingContext(this.renderingContext);

    this.renderingContext.strokeStyle = COLORS.BLACK.fillStyle;
  }

  public drawPoint(point: Point) {
    this.drawPixel(point.x, point.y);
  }

  public drawPixel(x: number, y: number) {
    this.renderingContext.fillRect(x, y, 1, 1);
  }

  public drawLine(line: Line, lineProperties: LineProperties): void;
  public drawLine(startPoint: Point, endPoint: Point, lineProperties: LineProperties): void;

  // tslint:disable-next-line no-any
  public drawLine(...args: any[]) {
    if (args[0] instanceof Line) {
      return this.drawLineBetweenPoints(args[0].p1, args[0].p2, args[1]);
    } else {
      return this.drawLineBetweenPoints(args[0], args[1], args[2]);
    }
  }

  public drawPath(path: Path) {
    const pathLineProperties = path.getLineProperties();

    for (const line of path.getLineIterator()) {
      this.drawLine(line, pathLineProperties);
    }

    if (path instanceof Polygon) {
      this.polygonFiller.fillPolygon(path);
    }
  }

  public fillText(text: string, x: number, y: number): void;
  public fillText(text: string, point: Point): void;
  public fillText(text: string, pointOrX: number | Point, y?: number) {
    let x = pointOrX;
    if (typeof pointOrX === 'object' && pointOrX instanceof Point) {
      x = pointOrX.x;
      y = pointOrX.y;
    }

    this.renderingContext.fillText(text, <number>x, <number>y);
  }

  public clear() {
    this.renderingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawLineBetweenPoints(
    startPoint: Point,
    endPoint: Point,
    lineProperties: LineProperties
  ) {
    this.renderingContext.strokeStyle = lineProperties.color.fillStyle;

    this.renderingContext.beginPath();
    this.renderingContext.moveTo(startPoint.x, startPoint.y);
    this.renderingContext.lineTo(endPoint.x, endPoint.y);
    this.renderingContext.stroke();
  }
}
