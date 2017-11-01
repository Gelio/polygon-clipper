import { Color } from 'common/Color';
import { LightVersorType } from 'common/LightVersorType';
import { Polygon } from 'common/Polygon';

import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightVersorTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';

import { ActiveEdge } from 'polygon-filler/ActiveEdge';
import { AppFillData } from 'polygon-filler/AppFillData';

interface PolygonFillerDependencies {
  eventAggregator: EventAggregator;
  canvas: HTMLCanvasElement;
}

export class PolygonFiller {
  private readonly eventAggregator: EventAggregator;
  private readonly canvas: HTMLCanvasElement;
  private renderingContext: CanvasRenderingContext2D;
  private canvasImageData: ImageData;

  private readonly fillData: AppFillData = {
    backgroundTexture: new ImageData(1, 1),
    heightMap: new ImageData(1, 1),
    lightColor: new Color(0, 0, 0),
    lightVersorType: LightVersorType.Constant,
    normalMap: new ImageData(1, 1)
  };

  constructor(dependencies: PolygonFillerDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.canvas = dependencies.canvas;

    this.onNewBackgroundTexture = this.onNewBackgroundTexture.bind(this);
    this.onNewHeightMap = this.onNewHeightMap.bind(this);
    this.onNewLightColor = this.onNewLightColor.bind(this);
    this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
    this.onNewNormalMap = this.onNewNormalMap.bind(this);
  }

  public injectCanvasRenderingContext(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
  }

  public init() {
    const eventAggregator = this.eventAggregator;

    eventAggregator.addEventListener(
      NewBackgroundTextureEvent.eventType,
      this.onNewBackgroundTexture
    );
    eventAggregator.addEventListener(NewHeightMapEvent.eventType, this.onNewHeightMap);
    eventAggregator.addEventListener(NewLightColorEvent.eventType, this.onNewLightColor);
    eventAggregator.addEventListener(NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
    eventAggregator.addEventListener(NewNormalMapEvent.eventType, this.onNewNormalMap);
  }

  public destroy() {
    const eventAggregator = this.eventAggregator;

    eventAggregator.removeEventListener(
      NewBackgroundTextureEvent.eventType,
      this.onNewBackgroundTexture
    );
    eventAggregator.removeEventListener(NewHeightMapEvent.eventType, this.onNewHeightMap);
    eventAggregator.removeEventListener(NewLightColorEvent.eventType, this.onNewLightColor);
    eventAggregator.removeEventListener(
      NewLightVersorTypeEvent.eventType,
      this.onNewLightVersorType
    );
    eventAggregator.removeEventListener(NewNormalMapEvent.eventType, this.onNewNormalMap);
  }

  public fillPolygon(polygon: Polygon) {
    const vertices = polygon.getVertices();
    const verticesCount = polygon.getVerticesCount();

    // ind[0 .. n-1]
    const sortedVertexIndices = vertices.map((_vertex, index) => index);
    sortedVertexIndices.sort((i, j) => vertices[i].y - vertices[j].y);

    const yMin = vertices[sortedVertexIndices[0]].y;
    const yMax = vertices[sortedVertexIndices[verticesCount - 1]].y;

    // AET
    const activeEdgeTable: ActiveEdge[] = [];
    let k = 0;
    let previousY = yMin;

    this.canvasImageData = this.renderingContext.getImageData(0, 0, this.canvas.width, this.canvas.height);

    for (let y = yMin + 1; y <= yMax; y += 1) {
      for (; k < verticesCount; k += 1) {
        const vertexIndex = sortedVertexIndices[k];
        const vertex = vertices[vertexIndex];
        if (vertex.y !== previousY) {
          break;
        }

        const previousVertexIndex = polygon.getPreviousPointIndex(vertexIndex);
        const previousVertex = vertices[previousVertexIndex];
        if (previousVertex.y >= vertex.y) {
          const previousEdge = new ActiveEdge(vertex, previousVertex);
          activeEdgeTable.push(previousEdge);
        } else {
          const edgeIndex = activeEdgeTable.findIndex(
            edge => edge.lowerPoint === previousVertex && edge.higherPoint === vertex
          );
          activeEdgeTable.splice(edgeIndex, 1);
        }

        const nextVertexIndex = polygon.getNextPointIndex(vertexIndex);
        const nextVertex = vertices[nextVertexIndex];
        if (nextVertex.y >= vertex.y) {
          const nextEdge = new ActiveEdge(vertex, nextVertex);
          activeEdgeTable.push(nextEdge);
        } else {
          const edgeIndex = activeEdgeTable.findIndex(
            edge => edge.lowerPoint === nextVertex && edge.higherPoint === vertex
          );
          activeEdgeTable.splice(edgeIndex, 1);
        }
      }

      activeEdgeTable.sort((e1, e2) => e1.x - e2.x);

      for (let i = 0; i < activeEdgeTable.length; i += 2) {
        const e1 = activeEdgeTable[i];
        const e2 = activeEdgeTable[i + 1];

        // this.renderingContext.fillRect(e1.x, y, e2.x - e1.x, 1);
        for (let x = e1.x; x <= e2.x; x += 1) {
          this.putPixel(x, y);
        }
      }

      activeEdgeTable.forEach(edge => edge.nextScanLine());
      previousY = y;
    }

    this.renderingContext.putImageData(this.canvasImageData, 0, 0);
  }

  private putPixel(x: number, y: number) {
    if (x >= this.canvasImageData.width || y >= this.canvasImageData.height) {
      return;
    }

    // tslint:disable no-bitwise
    x = ~~x;
    y = ~~y;
    // tslint:enable no-bitwise

    const backgroundTexture = this.fillData.backgroundTexture;
    const backgroundTextureX = x % backgroundTexture.width;
    const backgroundTextureY = y % backgroundTexture.height;
    const backgroundTextureIndex =
      (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;

    const index = (x + y * this.canvasImageData.width) * 4;
    this.canvasImageData.data[index] = backgroundTexture.data[backgroundTextureIndex];
    this.canvasImageData.data[index + 1] = backgroundTexture.data[backgroundTextureIndex + 1];
    this.canvasImageData.data[index + 2] = backgroundTexture.data[backgroundTextureIndex + 2];
    this.canvasImageData.data[index + 3] = backgroundTexture.data[backgroundTextureIndex + 3];
    // this.canvasImageData.data[index] = 0;
    // this.canvasImageData.data[index + 1] = 0;
    // this.canvasImageData.data[index + 2] = 0;
    // this.canvasImageData.data[index + 3] = 255;

    this.renderingContext.fillRect(x, y, 1, 1);
    // this.renderingContext.putImageData(this.canvasImageData, 0, 0);
  }

  private onNewBackgroundTexture(event: NewBackgroundTextureEvent) {
    this.fillData.backgroundTexture = event.payload;
    event.handled = true;
  }

  private onNewHeightMap(event: NewHeightMapEvent) {
    this.fillData.heightMap = event.payload;
    event.handled = true;
  }

  private onNewLightColor(event: NewLightColorEvent) {
    this.fillData.lightColor = event.payload;
    event.handled = true;
  }

  private onNewLightVersorType(event: NewLightVersorTypeEvent) {
    this.fillData.lightVersorType = event.payload;
    event.handled = true;
  }

  private onNewNormalMap(event: NewNormalMapEvent) {
    this.fillData.normalMap = event.payload;
    event.handled = true;
  }
}
