import { configuration } from 'configuration';

import { EventAggregator } from 'events/EventAggregator';
import { NewHeightMapIntensityEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

interface HeightMapIntensityInputDependencies {
  eventAggregator: EventAggregator;
}

export class HeightMapIntensityInput extends HTMLElement {
  private readonly eventAggregator: EventAggregator;
  private readonly input: HTMLInputElement;

  constructor(dependencies: HeightMapIntensityInputDependencies) {
    super();

    this.eventAggregator = dependencies.eventAggregator;
    this.style.display = 'block';

    const label = document.createElement('label');
    label.setAttribute('for', 'height-map-intensity');
    label.innerText = 'Height map intensity: ';
    this.appendChild(label);

    this.input = document.createElement('input');
    this.input.type = 'number';
    this.input.min = '0';
    this.input.max = '1';
    this.input.step = '0.01';
    this.resetInputValue();
    this.appendChild(this.input);

    this.onInputChange = this.onInputChange.bind(this);
  }

  public connectedCallback() {
    this.input.addEventListener('change', this.onInputChange);
  }

  public disconnectedCallback() {
    this.input.removeEventListener('change', this.onInputChange);
  }

  private onInputChange() {
    const intensity = parseFloat(this.input.value);
    if (Number.isNaN(intensity)) {
      this.resetInputValue();
      alert('Height map intensity must be a number');

      return;
    }

    this.eventAggregator.dispatchEvent(new NewHeightMapIntensityEvent(intensity));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }

  private resetInputValue() {
    this.input.value = configuration.presetHeightMapIntensity.toString();
  }
}

customElements.define('height-map-intensity-input', HeightMapIntensityInput);
