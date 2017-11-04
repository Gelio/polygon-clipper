import { EventAggregator } from 'events/EventAggregator';
import { NewLightVersorEvent, NewLightVersorTypeEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { configuration } from 'configuration';

import { LightVersorType } from 'common/LightVersorType';
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

    this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
    this.circlingLightTick = this.circlingLightTick.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(
      NewLightVersorTypeEvent.eventType,
      this.onNewLightVersorType
    );
  }

  public destroy() {
    this.eventAggregator.removeEventListener(
      NewLightVersorTypeEvent.eventType,
      this.onNewLightVersorType
    );
    this.stopCirclingLight();
  }

  private onNewLightVersorType(event: NewLightVersorTypeEvent) {
    switch (event.payload) {
      case LightVersorType.Constant:
        this.stopCirclingLight();
        this.dispatchLightVersor(new Vector3(0, 0, 1));
        event.handled = true;
        break;

        case LightVersorType.Circling:
        this.startCirclingLight();
        event.handled = true;
        break;

      default:
        throw new Error('Unknown light versor type');
    }
  }

  private dispatchLightVersor(versor: Vector3) {
    this.eventAggregator.dispatchEvent(new NewLightVersorEvent(versor));
  }

  private startCirclingLight() {
    this.circlingLightIntervalId = setInterval(
      this.circlingLightTick,
      configuration.circlingLight.interval
    );
  }

  private circlingLightTick() {
    const { x: centerX, y: centerY } = this.centerPoint;
    const x = centerX + configuration.circlingLight.distance * Math.cos(this.circlingLightAngle);
    const y = centerY + configuration.circlingLight.distance * Math.sin(this.circlingLightAngle);

    const lightVector = new Vector3(x, y, configuration.circlingLight.height);
    const lightVersor = lightVector.normalize();

    this.eventAggregator.dispatchEvent(new NewLightVersorEvent(lightVersor));
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
