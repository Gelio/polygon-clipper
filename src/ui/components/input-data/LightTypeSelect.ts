import { LightType } from 'common/LightType';

import { EventAggregator } from 'events/EventAggregator';
import { NewLightTypeEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { LightPositionRadiusInput } from 'ui/components/input-data/LightPositionRadiusInput';

export interface LightTypeSelectDependencies {
  eventAggregator: EventAggregator;
}

export class LightTypeSelect extends HTMLElement {
  private readonly eventAggregator: EventAggregator;

  private readonly lightTypeInfoList = [
    {
      lightType: LightType.Constant,
      optionValue: 'constant',
      optionLabel: 'Constant ([0, 0, 1])'
    },
    {
      lightType: LightType.Moving,
      optionValue: 'moving',
      optionLabel: 'Moving above the screen'
    }
  ];

  private lightTypeSelect: HTMLSelectElement;
  private lightPositionRadiusInput: LightPositionRadiusInput;

  constructor(dependencies: LightTypeSelectDependencies) {
    super();
    this.style.display = 'block';

    this.eventAggregator = dependencies.eventAggregator;

    this.setupLightTypeLabel();
    this.setupLightTypeSelect();

    this.onLightTypeChange = this.onLightTypeChange.bind(this);
    this.lightPositionRadiusInput = new LightPositionRadiusInput({
      eventAggregator: this.eventAggregator
    });
    this.lightPositionRadiusInput.style.marginLeft = '5px';
  }

  public get selectedLightType(): LightType {
    const selectedValue = this.lightTypeSelect.value;
    const selectedLightTypeInfo = this.lightTypeInfoList.find(
      lightTypeInfo => lightTypeInfo.optionValue === selectedValue
    );

    if (!selectedLightTypeInfo) {
      throw new Error('Invalid light type selected');
    }

    return selectedLightTypeInfo.lightType;
  }

  public set selectedLightType(lightType: LightType) {
    const foundLightTypeInfo = this.lightTypeInfoList.find(
      lightTypeInfo => lightTypeInfo.lightType === lightType
    );
    if (!foundLightTypeInfo) {
      throw new Error('Light type not supported');
    }

    this.lightTypeSelect.value = foundLightTypeInfo.optionValue;
    this.onLightTypeChange();
  }

  public connectedCallback() {
    this.lightTypeSelect.addEventListener('change', this.onLightTypeChange);
  }

  public disconnectedCallback() {
    this.lightTypeSelect.removeEventListener('change', this.onLightTypeChange);
  }

  private setupLightTypeLabel() {
    const lightTypeLabel = document.createElement('label');
    lightTypeLabel.setAttribute('for', 'light-type-select');
    lightTypeLabel.innerText = 'Light type: ';

    this.appendChild(lightTypeLabel);
  }

  private setupLightTypeSelect() {
    this.lightTypeSelect = document.createElement('select');
    this.lightTypeSelect.id = 'light-type-select';
    this.appendChild(this.lightTypeSelect);

    this.lightTypeInfoList.forEach(lightType => {
      const option = document.createElement('option');
      option.innerText = lightType.optionLabel;
      option.value = lightType.optionValue;

      this.lightTypeSelect.appendChild(option);
    });
  }

  private onLightTypeChange() {
    const lightType = this.selectedLightType;

    this.eventAggregator.dispatchEvent(new NewLightTypeEvent(lightType));
    this.eventAggregator.dispatchEvent(new RenderEvent());

    if (lightType === LightType.Moving) {
      this.appendChild(this.lightPositionRadiusInput);
    } else {
      this.removeChild(this.lightPositionRadiusInput);
    }
  }
}

customElements.define('app-light-type-select', LightTypeSelect);
