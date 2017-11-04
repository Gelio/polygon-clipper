import { EventAggregator } from 'events/EventAggregator';
import { NewLightPositionEvent, NewLightTypeEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { configuration } from 'configuration';

import { LightType } from 'common/LightType';
import { Point } from 'common/Point';
import { Vector3 } from 'common/Vector3';

import { Service } from 'services/Service';

interface LightSimulatorDependencies {
  eventAggregator: EventAggregator;
  centerPoint: Point;
}

export class LightSimulator implements Service {
  private static readonly stepInRadians = configuration.circlingLight.interval /
    configuration.circlingLight.lapTime *
    2 *
    Math.PI;

  private static readonly radiansModuloValue = 2 * Math.PI;

  private readonly eventAggregator: EventAggregator;
  private readonly centerPoint: Point;

  private circlingLightIntervalId: number;
  private circlingLightAngle = 0;

  constructor(dependencies: LightSimulatorDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.centerPoint = dependencies.centerPoint;

    this.onNewLightType = this.onNewLightType.bind(this);
    this.circlingLightTick = this.circlingLightTick.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(NewLightTypeEvent.eventType, this.onNewLightType);
  }

  public destroy() {
    this.eventAggregator.removeEventListener(
      NewLightTypeEvent.eventType,
      this.onNewLightType
    );
    this.stopCirclingLight();
  }

  private onNewLightType(event: NewLightTypeEvent) {
    switch (event.payload) {
      case LightType.Constant:
        this.stopCirclingLight();
        this.dispatchLightPosition(new Vector3(0, 0, 1));
        event.handled = true;
        break;

      case LightType.Moving:
        this.startMovingLight();
        event.handled = true;
        break;

      default:
        throw new Error('Unknown light versor type');
    }
  }

  private dispatchLightPosition(position: Vector3) {
    this.eventAggregator.dispatchEvent(new NewLightPositionEvent(position));
  }

  private startMovingLight() {
    this.circlingLightIntervalId = setInterval(
      this.circlingLightTick,
      configuration.circlingLight.interval
    );
  }

  private circlingLightTick() {
    const { x: centerX, y: centerY } = this.centerPoint;
    const x = centerX + configuration.circlingLight.distance * Math.cos(this.circlingLightAngle);
    const y = centerY + configuration.circlingLight.distance * Math.sin(this.circlingLightAngle);

    const lightPosition = new Vector3(x, y, configuration.circlingLight.height);
    this.dispatchLightPosition(lightPosition);
    this.eventAggregator.dispatchEvent(new RenderEvent());

    this.circlingLightAngle += LightSimulator.stepInRadians;
    if (this.circlingLightAngle >= LightSimulator.radiansModuloValue) {
      this.circlingLightAngle -= LightSimulator.radiansModuloValue;
    }
  }

  private stopCirclingLight() {
    clearInterval(this.circlingLightIntervalId);
  }
}
