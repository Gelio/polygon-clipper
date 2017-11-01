import { EventAggregator } from 'events/EventAggregator';
import { NewLightVersorEvent, NewLightVersorTypeEvent } from 'events/input-data';

import { configuration } from 'configuration';

import { LightVersorType } from 'common/LightVersorType';
import { Vector3 } from 'common/Vector3';

import { Service } from 'services/Service';

interface LightSimulatorDependencies {
  eventAggregator: EventAggregator;
}

export class LightSimulator implements Service {
  private static readonly stepInRadians = configuration.circlingLight.interval /
    configuration.circlingLight.lapTime *
    2 *
    Math.PI;

  private static readonly radiansModuloValue = 2 * Math.PI;

  private readonly eventAggregator: EventAggregator;

  private circlingLightIntervalId: number;
  private circlingLightAngle = 0;

  constructor(dependencies: LightSimulatorDependencies) {
    this.eventAggregator = dependencies.eventAggregator;

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
        break;

      case LightVersorType.Circling:
        this.startCirclingLight();
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
    const x = configuration.circlingLight.distance * Math.cos(this.circlingLightAngle);
    const y = configuration.circlingLight.distance * Math.sin(this.circlingLightAngle);

    const lightVector = new Vector3(x, y, configuration.circlingLight.height);
    const lightVersor = lightVector.normalize();

    this.eventAggregator.dispatchEvent(new NewLightVersorEvent(lightVersor));

    this.circlingLightAngle += LightSimulator.stepInRadians;
    if (this.circlingLightAngle >= LightSimulator.radiansModuloValue) {
      this.circlingLightAngle -= LightSimulator.radiansModuloValue;
    }
  }

  private stopCirclingLight() {
    clearInterval(this.circlingLightIntervalId);
  }
}