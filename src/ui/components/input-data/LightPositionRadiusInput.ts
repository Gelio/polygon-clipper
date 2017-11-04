import { EventAggregator } from 'events/EventAggregator';
import { NewLightPositionRadiusEvent } from 'events/input-data';

import { configuration } from 'configuration';

interface LightPositionRadiusInputDependencies {
  eventAggregator: EventAggregator;
}

export class LightPositionRadiusInput extends HTMLElement {
  private readonly eventAggregator: EventAggregator;

  private input: HTMLInputElement;

  constructor(dependencies: LightPositionRadiusInputDependencies) {
    super();

    this.eventAggregator = dependencies.eventAggregator;

    const label = document.createElement('label');
    label.setAttribute('for', 'light-position-radius-input');
    label.innerText = 'Light position radius: ';
    this.appendChild(label);

    this.input = document.createElement('input');
    this.input.type = 'number';
    this.input.id = 'light-position-radius-input';
    this.input.min = '0';
    this.input.style.width = '80px';
    this.appendChild(this.input);

    this.setInputValue(configuration.movingLight.defaultRadius);
    this.onLightPositionRadiusChange = this.onLightPositionRadiusChange.bind(this);
  }

  public get lightPositionRadius(): number {
    return parseFloat(this.input.value);
  }

  public set lightPositionRadius(value: number) {
    this.setInputValue(value);
    this.onLightPositionRadiusChange();
  }

  public connectedCallback() {
    this.input.addEventListener('change', this.onLightPositionRadiusChange);
  }

  public disconnectedCallback() {
    this.input.removeEventListener('change', this.onLightPositionRadiusChange);
  }

  private onLightPositionRadiusChange() {
    const lightPositionRadius = this.lightPositionRadius;
    this.setInputValue(lightPositionRadius);

    this.eventAggregator.dispatchEvent(new NewLightPositionRadiusEvent(lightPositionRadius));
  }

  private setInputValue(value: number) {
    this.input.value = value.toFixed(2);
  }
}

customElements.define('app-light-position-radius-input', LightPositionRadiusInput);
