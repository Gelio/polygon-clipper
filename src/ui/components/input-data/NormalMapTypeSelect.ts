import { NormalMapType } from 'common/NormalMapType';

import { EventAggregator } from 'events/EventAggregator';
import { NewNormalMapTypeEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

interface NormalMapTypeSelectDependencies {
  eventAggregator: EventAggregator;
}

export class NormalMapTypeSelect extends HTMLElement {
  private readonly eventAggregator: EventAggregator;

  private selectElement: HTMLSelectElement;

  constructor(dependencies: NormalMapTypeSelectDependencies) {
    super();

    this.style.display = 'block';

    this.eventAggregator = dependencies.eventAggregator;
    this.onSelectChange = this.onSelectChange.bind(this);

    this.addLabel();
    this.addSelectElement();
  }

  public connectedCallback() {
    this.selectElement.addEventListener('change', this.onSelectChange);
  }

  public disconnectedCallback() {
    this.selectElement.removeEventListener('change', this.onSelectChange);
  }

  private addLabel() {
    const label = document.createElement('label');
    label.setAttribute('for', 'normal-map-type-select');
    label.innerText = 'Normal map type: ';
    this.appendChild(label);
  }

  private addSelectElement() {
    this.selectElement = document.createElement('select');
    this.selectElement.id = 'normal-map-type-select';
    this.appendChild(this.selectElement);

    const stationaryOption = document.createElement('option');
    stationaryOption.value = NormalMapType.Stationary.toString();
    stationaryOption.innerText = 'Stationary';
    this.selectElement.appendChild(stationaryOption);

    const followingOption = document.createElement('option');
    followingOption.value = NormalMapType.FollowingTheMouse.toString();
    followingOption.innerText = 'Following the mouse';
    this.selectElement.appendChild(followingOption);
  }

  private onSelectChange() {
    let normalMapType = NormalMapType.Stationary;

    if (this.selectElement.value === NormalMapType.FollowingTheMouse.toString()){
      normalMapType = NormalMapType.FollowingTheMouse;
    }

    this.eventAggregator.dispatchEvent(new NewNormalMapTypeEvent(normalMapType));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}

customElements.define('app-normal-map-type-select', NormalMapTypeSelect);
