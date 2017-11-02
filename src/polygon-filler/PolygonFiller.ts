import { Color } from 'common/Color';
import { LightVersorType } from 'common/LightVersorType';
import { Polygon } from 'common/Polygon';

import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightVersorEvent,
  NewLightVersorTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';

import { ActiveEdge } from 'polygon-filler/ActiveEdge';
import { AppFillData } from 'polygon-filler/AppFillData';
import { FillStrip } from 'polygon-filler/FillStrip';
import { FillWorkerMessageType } from 'polygon-filler/FillWorkerMessageType';

import { Service } from 'services/Service';

const FILL_WORKER_URL = 'fillWorker.js';

interface PolygonFillerDependencies {
  eventAggregator: EventAggregator;
  canvas: HTMLCanvasElement;
}

export class PolygonFiller implements Service {
  private readonly eventAggregator: EventAggregator;
  private readonly canvas: HTMLCanvasElement;
  private renderingContext: CanvasRenderingContext2D;

  private fillWorker: Worker;

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
    this.onNewLightVersor = this.onNewLightVersor.bind(this);
    this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
    this.onNewNormalMap = this.onNewNormalMap.bind(this);
    this.onFillWorkerMessage = this.onFillWorkerMessage.bind(this);
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
    eventAggregator.addEventListener(NewLightVersorEvent.eventType, this.onNewLightVersor);
    eventAggregator.addEventListener(NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
    eventAggregator.addEventListener(NewNormalMapEvent.eventType, this.onNewNormalMap);

    this.fillWorker = new Worker(FILL_WORKER_URL);
    this.sendAppFillDataToWorker();

    this.fillWorker.addEventListener('message', this.onFillWorkerMessage);
  }

  public destroy() {
    const eventAggregator = this.eventAggregator;

    eventAggregator.removeEventListener(
      NewBackgroundTextureEvent.eventType,
      this.onNewBackgroundTexture
    );
    eventAggregator.removeEventListener(NewHeightMapEvent.eventType, this.onNewHeightMap);
    eventAggregator.removeEventListener(NewLightColorEvent.eventType, this.onNewLightColor);
    eventAggregator.removeEventListener(NewLightVersorEvent.eventType, this.onNewLightVersor);
    eventAggregator.removeEventListener(
      NewLightVersorTypeEvent.eventType,
      this.onNewLightVersorType
    );
    eventAggregator.removeEventListener(NewNormalMapEvent.eventType, this.onNewNormalMap);
    this.fillWorker.removeEventListener('message', this.onFillWorkerMessage);
    this.fillWorker.terminate();
  }

  public fillPolygons(polygons: Polygon[]) {
    const fillWorker = this.fillWorker;

    fillWorker.postMessage({
      type: FillWorkerMessageType.StartFill
    });

    polygons.forEach(polygon => this.fillPolygon(polygon));

    return new Promise((resolve, reject) => {
      function onMessage() {
        resolve();
        removeEventListeners();
      }

      function onError(error: ErrorEvent) {
        reject(error);
        removeEventListeners();
      }

      function removeEventListeners() {
        fillWorker.removeEventListener('message', onMessage);
        fillWorker.removeEventListener('error', onError);
      }

      fillWorker.addEventListener('message', onMessage);
      fillWorker.addEventListener('error', onError);

      fillWorker.postMessage({
        type: FillWorkerMessageType.EndFill
      });
    });
  }

  private onFillWorkerMessage(event: MessageEvent) {
    this.renderArrayBuffer(event.data);
  }

  private renderArrayBuffer(arrayBuffer: ArrayBuffer) {
    const uint8Array = new Uint8ClampedArray(arrayBuffer);
    const imageData = new ImageData(uint8Array, this.canvas.width, this.canvas.height);

    this.renderingContext.putImageData(imageData, 0, 0);
  }

  private fillPolygon(polygon: Polygon) {
    const fillStrips = this.getPolygonFillStrips(polygon);

    this.fillWorker.postMessage({
      type: FillWorkerMessageType.FillStrips,
      fillStrips
    });
  }

  private sendAppFillDataToWorker() {
    this.fillWorker.postMessage({
      type: FillWorkerMessageType.FillData,
      width: this.canvas.width,
      height: this.canvas.height,
      appFillData: this.fillData
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

      if (y >= 0 && y < this.canvas.height) {
        activeEdgeTable.sort((e1, e2) => e1.x - e2.x);

        for (let i = 0; i < activeEdgeTable.length; i += 2) {
          const e1 = activeEdgeTable[i];
          const e2 = activeEdgeTable[i + 1];

          // this.renderingContext.fillRect(e1.x, y, e2.x - e1.x, 1);
          fillStrips.push({
            y,
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

  private onNewBackgroundTexture(event: NewBackgroundTextureEvent) {
    this.fillData.backgroundTexture = event.payload;
    this.sendAppFillDataToWorker();
    event.handled = true;
  }

  private onNewHeightMap(event: NewHeightMapEvent) {
    this.fillData.heightMap = event.payload;
    this.sendAppFillDataToWorker();
    event.handled = true;
  }

  private onNewLightColor(event: NewLightColorEvent) {
    this.fillData.lightColor = event.payload;
    this.sendAppFillDataToWorker();
    event.handled = true;
  }

  private onNewLightVersor(event: NewLightVersorEvent) {
    const lightVersor = event.payload;

    this.fillWorker.postMessage({
      type: FillWorkerMessageType.LightVersor,
      versor: {
        x: lightVersor.x,
        y: lightVersor.y,
        z: lightVersor.z
      }
    });
  }

  private onNewLightVersorType(event: NewLightVersorTypeEvent) {
    this.fillData.lightVersorType = event.payload;
    this.sendAppFillDataToWorker();
    event.handled = true;
  }

  private onNewNormalMap(event: NewNormalMapEvent) {
    this.fillData.normalMap = event.payload;
    this.sendAppFillDataToWorker();
    event.handled = true;
  }
}
