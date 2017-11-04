import { EventAggregator } from 'events/EventAggregator';
import { NewLightTypeEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { ImageDownloader } from 'services/ImageDownloader';
import { Service } from 'services/Service';

import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';

import { LightType } from 'common/LightType';

import {
  BackgroundSelectButton,
  HeightMapSelectButton,
  LightColorSelectButton,
  NormalMapSelectButton
} from 'ui/components/input-data';

interface SerializationServiceDependencies {
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
}

export class InputDataService implements Service {
  private inputDataContainer: HTMLElement;
  private dialogOverlay: DialogOverlay;
  private eventAggregator: EventAggregator;
  private imageDownloader: ImageDownloader;

  private backgroundSelectButton: BackgroundSelectButton;
  private heightMapSelectButton: HeightMapSelectButton;
  private lightColorSelectButton: LightColorSelectButton;
  private normalMapSelectButton: NormalMapSelectButton;

  private lightTypeContainer: HTMLElement;
  private lightTypeSelect: HTMLSelectElement;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;

    this.setupLightTypeSelect();
  }

  public init() {
    this.findInputDataContainer();
    this.findDialogOverlay();
    this.setupButtons();

    this.inputDataContainer.appendChild(this.backgroundSelectButton);
    this.inputDataContainer.appendChild(this.lightColorSelectButton);
    this.inputDataContainer.appendChild(this.normalMapSelectButton);
    this.inputDataContainer.appendChild(this.heightMapSelectButton);
    this.inputDataContainer.appendChild(this.lightTypeContainer);

    this.lightTypeSelect.addEventListener('change', this.onLightTypeSelectChange);
  }

  public destroy() {
    this.inputDataContainer.removeChild(this.backgroundSelectButton);
    this.inputDataContainer.removeChild(this.lightColorSelectButton);
    this.inputDataContainer.removeChild(this.normalMapSelectButton);
    this.inputDataContainer.removeChild(this.heightMapSelectButton);

    // tslint:disable-next-line
    this.inputDataContainer.innerHTML = '';

    this.lightTypeSelect.removeEventListener('change', this.onLightTypeSelectChange);
  }

  private findInputDataContainer() {
    const inputDataContainer = document.getElementById('input-data-container');
    if (!inputDataContainer) {
      throw new Error('Input data container not found');
    }

    this.inputDataContainer = inputDataContainer;
  }

  private findDialogOverlay() {
    const dialogOverlay = document.querySelector('app-dialog-overlay');
    if (!dialogOverlay) {
      throw new Error('Dialog overlay not found');
    }

    this.dialogOverlay = <DialogOverlay>dialogOverlay;
  }

  private setupButtons() {
    const { eventAggregator, dialogOverlay, imageDownloader } = this;

    const imageSelectButtonDependencies = { eventAggregator, dialogOverlay, imageDownloader };
    const colorSelectButtonDependencies = { dialogOverlay, eventAggregator };

    this.backgroundSelectButton = new BackgroundSelectButton(imageSelectButtonDependencies);
    this.heightMapSelectButton = new HeightMapSelectButton(imageSelectButtonDependencies);
    this.lightColorSelectButton = new LightColorSelectButton(colorSelectButtonDependencies);
    this.normalMapSelectButton = new NormalMapSelectButton(imageSelectButtonDependencies);
  }

  private setupLightTypeSelect() {
    this.lightTypeContainer = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', 'light-type-select');
    label.innerText = 'Light type: ';
    this.lightTypeContainer.appendChild(label);

    this.lightTypeSelect = document.createElement('select');
    const constantLightTypeOption = document.createElement('option');
    constantLightTypeOption.innerText = 'Constant ([0, 0, 1])';
    constantLightTypeOption.value = 'constant';

    const movingLightTypeOption = document.createElement('option');
    movingLightTypeOption.innerText = 'Moving above the screen';
    movingLightTypeOption.value = 'moving';

    this.lightTypeSelect.appendChild(constantLightTypeOption);
    this.lightTypeSelect.appendChild(movingLightTypeOption);

    this.lightTypeContainer.appendChild(this.lightTypeSelect);

    this.onLightTypeSelectChange = this.onLightTypeSelectChange.bind(this);
  }

  private onLightTypeSelectChange() {
    const value = this.lightTypeSelect.value;
    const lightTypes: { [name: string]: LightType } = {
      constant: LightType.Constant,
      moving: LightType.Moving
    };

    const lightType = lightTypes[value];

    this.eventAggregator.dispatchEvent(new NewLightTypeEvent(lightType));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}
