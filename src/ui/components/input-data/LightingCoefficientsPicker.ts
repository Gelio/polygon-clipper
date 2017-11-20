import { EventAggregator } from 'events/EventAggregator';
import { NewLightingCoefficientsEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

interface LightingCoefficientsPickerDependencies {
  eventAggregator: EventAggregator;
}

export class LightingCoefficientsPicker extends HTMLElement {
  private readonly eventAggregator: EventAggregator;

  private kDRange: HTMLInputElement;
  private kSRange: HTMLInputElement;
  private mRange: HTMLInputElement;

  constructor(dependencies: LightingCoefficientsPickerDependencies) {
    super();

    this.eventAggregator = dependencies.eventAggregator;

    this.style.display = 'block';

    const kDLabel = document.createElement('label');
    kDLabel.setAttribute('for', 'kd-range');
    kDLabel.innerText = 'kD: ';
    this.appendChild(kDLabel);

    this.kDRange = document.createElement('input');
    this.kDRange.type = 'range';
    this.kDRange.min = '0';
    this.kDRange.max = '1';
    this.kDRange.value = '1';
    this.kDRange.step = '0.01';
    this.kDRange.id = 'kd-range';
    this.appendChild(this.kDRange);

    const kSLabel = document.createElement('label');
    kSLabel.setAttribute('for', 'ks-range');
    kSLabel.innerText = 'kS: ';
    this.appendChild(kSLabel);

    this.kSRange = document.createElement('input');
    this.kSRange.type = 'range';
    this.kSRange.min = '0';
    this.kSRange.max = '1';
    this.kSRange.value = '0';
    this.kSRange.step = '0.01';
    this.kSRange.id = 'ks-range';
    this.appendChild(this.kSRange);

    const mLabel = document.createElement('label');
    mLabel.setAttribute('for', 'm-range');
    mLabel.innerText = 'm: ';
    this.appendChild(mLabel);

    this.mRange = document.createElement('input');
    this.mRange.type = 'range';
    this.mRange.min = '1';
    this.mRange.max = '400';
    this.mRange.value = '50';
    this.mRange.step = '1';
    this.mRange.id = 'm-range';
    this.appendChild(this.mRange);

    this.onValueChange = this.onValueChange.bind(this);
  }

  public connectedCallback() {
    this.kDRange.addEventListener('change', this.onValueChange);
    this.kSRange.addEventListener('change', this.onValueChange);
    this.mRange.addEventListener('change', this.onValueChange);
  }

  public disconnectedCallback() {
    this.kDRange.removeEventListener('change', this.onValueChange);
    this.kSRange.removeEventListener('change', this.onValueChange);
    this.mRange.removeEventListener('change', this.onValueChange);
  }

  private onValueChange() {
    const kD = parseFloat(this.kDRange.value);
    const kS = parseFloat(this.kSRange.value);
    const m = parseInt(this.mRange.value, 10);

    this.eventAggregator.dispatchEvent(new NewLightingCoefficientsEvent(kD, kS, m));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}

customElements.define('app-lighting-coefficients-picker', LightingCoefficientsPicker);
