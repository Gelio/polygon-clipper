import { Polygon } from 'common/Polygon';

import { AppEvent } from 'events/AppEvent';
import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewHeightMapIntensityEvent,
  NewLightColorEvent,
  NewLightPositionEvent,
  NewLightTypeEvent,
  NewMousePositionEvent,
  NewNormalMapEvent,
  NewNormalMapTypeEvent
} from 'events/input-data';

import { ActiveEdge } from 'polygon-filler/ActiveEdge';
import { FillStrip } from 'polygon-filler/FillStrip';
import { FillWorkerMessageType } from 'polygon-filler/FillWorkerMessageType';

import { Service } from 'services/Service';

const FILL_WORKER_URL = 'fillWorker.js';

interface PolygonFillerDependencies {
  eventAggregator: EventAggregator;
  canvas: HTMLCanvasElement;
}

export class PolygonFiller implements Service {
  public fillingFinishedCallback: () => void;

  private readonly eventAggregator: EventAggregator;
  private readonly canvas: HTMLCanvasElement;
  private readonly proxyEvents = [
    NewBackgroundTextureEvent,
    NewHeightMapEvent,
    NewHeightMapIntensityEvent,
    NewLightColorEvent,
    NewLightPositionEvent,
    NewLightTypeEvent,
    NewNormalMapEvent,
    NewNormalMapTypeEvent,
    NewMousePositionEvent
  ];

  private renderingContext: CanvasRenderingContext2D;

  private fillWorker: Worker;

  constructor(dependencies: PolygonFillerDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.canvas = dependencies.canvas;

    this.onFillWorkerMessage = this.onFillWorkerMessage.bind(this);
    this.sendAppFillDataEvent = this.sendAppFillDataEvent.bind(this);
  }

  public injectCanvasRenderingContext(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
  }

  public init() {
    this.proxyEvents.forEach(event =>
      this.eventAggregator.addEventListener(event.eventType, this.sendAppFillDataEvent)
    );

    this.fillWorker = new Worker(FILL_WORKER_URL);
    this.fillWorker.postMessage({
      type: FillWorkerMessageType.CanvasInfo,
      width: this.canvas.width,
      height: this.canvas.height
    });
    this.fillWorker.addEventListener('message', this.onFillWorkerMessage);
  }

  public destroy() {
    this.proxyEvents.forEach(event =>
      this.eventAggregator.removeEventListener(event.eventType, this.sendAppFillDataEvent)
    );
    this.fillWorker.removeEventListener('message', this.onFillWorkerMessage);
    this.fillWorker.terminate();
  }

  public fillPolygons(polygons: Polygon[]) {
    const fillWorker = this.fillWorker;

    fillWorker.postMessage({
      type: FillWorkerMessageType.StartFill
    });

    polygons.forEach(polygon => this.fillPolygon(polygon));

    fillWorker.postMessage({
      type: FillWorkerMessageType.EndFill
    });
  }

  private onFillWorkerMessage(event: MessageEvent) {
    const imageData: ImageData = event.data;
    this.renderingContext.putImageData(imageData, 0, 0);

    if (this.fillingFinishedCallback) {
      this.fillingFinishedCallback();
    }
  }

  private fillPolygon(polygon: Polygon) {
    const fillStrips = this.getPolygonFillStrips(polygon);

    this.fillWorker.postMessage({
      type: FillWorkerMessageType.FillStrips,
      fillStrips
    });
  }

  private getPolygonFillStrips(polygon: Polygon): FillStrip[] {
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

    const fillStrips: FillStrip[] = [];

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

      if (previousY >= 0 && previousY < this.canvas.height) {
        activeEdgeTable.sort((e1, e2) => e1.x - e2.x);

        for (let i = 0; i < activeEdgeTable.length; i += 2) {
          const e1 = activeEdgeTable[i];
          const e2 = activeEdgeTable[i + 1];

          fillStrips.push({
            y: previousY,
            fromX: e1.x,
            toX: e2.x
          });
        }
      }

      activeEdgeTable.forEach(edge => edge.nextScanLine());
      previousY = y;
    }

    return fillStrips;
  }

  private sendAppFillDataEvent(event: AppEvent) {
    this.fillWorker.postMessage({
      type: FillWorkerMessageType.NewFillDataEvent,
      event
    });
  }
}
