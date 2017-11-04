import { EventAggregator } from 'events/EventAggregator';
import {
  NewLightPositionEvent,
  NewLightPositionRadiusEvent,
  NewLightTypeEvent
} from 'events/input-data';
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
  private horizontalRadiansModuloValue = 2 * Math.PI; // [0; 360] degrees
  private horizontalStepInRadians: number;

  private minVerticalAngle: number;
  private verticalAngleDelta: number;
  private verticalStepInRadians: number;

  private readonly eventAggregator: EventAggregator;
  private readonly centerPoint: Point;

  private movingLightIntervalId: number;
  private lightHorizontalAngle = 0;
  private lightVerticalAngleOffset = configuration.movingLight.minVerticalAngle;
  private lightVerticalRising = true;
  private lightPositionRadius: number;

  constructor(dependencies: LightSimulatorDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.centerPoint = dependencies.centerPoint;

    this.onNewLightType = this.onNewLightType.bind(this);
    this.movingLightTick = this.movingLightTick.bind(this);
    this.onNewLightPositionRadius = this.onNewLightPositionRadius.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(NewLightTypeEvent.eventType, this.onNewLightType);
    this.eventAggregator.addEventListener(
      NewLightPositionRadiusEvent.eventType,
      this.onNewLightPositionRadius
    );

    this.performInitialCalculations();
  }

  public destroy() {
    this.eventAggregator.removeEventListener(NewLightTypeEvent.eventType, this.onNewLightType);
    this.eventAggregator.removeEventListener(
      NewLightPositionRadiusEvent.eventType,
      this.onNewLightPositionRadius
    );
    this.stopMovingLight();
  }

  private performInitialCalculations() {
    this.horizontalStepInRadians = configuration.movingLight.tickInterval /
      configuration.movingLight.horizontalLapTime *
      2 *
      Math.PI;

    this.minVerticalAngle = configuration.movingLight.minVerticalAngle;
    this.verticalAngleDelta = configuration.movingLight.maxVerticalAngle -
      this.minVerticalAngle;

    this.verticalStepInRadians = configuration.movingLight.tickInterval /
      configuration.movingLight.verticalLapTime *
      this.verticalAngleDelta;
  }

  private onNewLightType(event: NewLightTypeEvent) {
    switch (event.payload) {
      case LightType.Constant:
        this.stopMovingLight();
        this.dispatchLightPosition(new Vector3(0, 0, 1));
        event.handled = true;
        break;

      case LightType.Moving:
        this.startMovingLight();
        event.handled = true;
        break;

      default:
        throw new Error('Unknown light type');
    }
  }

  private dispatchLightPosition(position: Vector3) {
    this.eventAggregator.dispatchEvent(new NewLightPositionEvent(position));
  }

  private startMovingLight() {
    this.movingLightIntervalId = setInterval(
      this.movingLightTick,
      configuration.movingLight.tickInterval
    );
  }

  private movingLightTick() {
    const { x: centerX, y: centerY } = this.centerPoint;
    const verticalAngle =
      configuration.movingLight.minVerticalAngle + this.lightVerticalAngleOffset;

    const horizontalRadius = this.lightPositionRadius * Math.cos(verticalAngle);

    const x = centerX + horizontalRadius * Math.cos(this.lightHorizontalAngle);
    const y = centerY + horizontalRadius * Math.sin(this.lightHorizontalAngle);
    const z = this.lightPositionRadius * Math.sin(verticalAngle);

    const lightPosition = new Vector3(x, y, z);
    this.dispatchLightPosition(lightPosition);
    this.eventAggregator.dispatchEvent(new RenderEvent());

    this.horizontalTick();
    this.verticalTick();
  }

  private horizontalTick() {
    this.lightHorizontalAngle += this.horizontalStepInRadians;
    if (this.lightHorizontalAngle >= this.horizontalRadiansModuloValue) {
      this.lightHorizontalAngle -= this.horizontalRadiansModuloValue;
    }
  }

  private verticalTick() {
    if (this.lightVerticalRising) {
      this.lightVerticalAngleOffset += this.verticalStepInRadians;
      if (this.lightVerticalAngleOffset >= this.verticalAngleDelta) {
        this.lightVerticalRising = false;
      }
    } else {
      this.lightVerticalAngleOffset -= this.verticalStepInRadians;
      if (this.lightVerticalAngleOffset <= 0) {
        this.lightVerticalRising = true;
      }
    }
  }

  private stopMovingLight() {
    clearInterval(this.movingLightIntervalId);
    this.lightHorizontalAngle = 0;
    this.lightVerticalAngleOffset = configuration.movingLight.minVerticalAngle;
    this.lightVerticalRising = true;
  }

  private onNewLightPositionRadius(event: NewLightPositionRadiusEvent) {
    this.lightPositionRadius = event.payload;
  }
}
