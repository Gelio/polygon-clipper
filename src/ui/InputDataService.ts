import { EventAggregator } from 'events/EventAggregator';
import { NewLightVersorTypeEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { ImageDownloader } from 'services/ImageDownloader';
import { Service } from 'services/Service';

import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';

import { LightVersorType } from 'common/LightVersorType';

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

  private lightVersorContainer: HTMLElement;
  private lightVersorSelect: HTMLSelectElement;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;

    this.setupLightVersorSelect();
  }

  public init() {
    this.findInputDataContainer();
    this.findDialogOverlay();
    this.setupButtons();

    this.inputDataContainer.appendChild(this.backgroundSelectButton);
    this.inputDataContainer.appendChild(this.lightColorSelectButton);
    this.inputDataContainer.appendChild(this.normalMapSelectButton);
    this.inputDataContainer.appendChild(this.heightMapSelectButton);
    this.inputDataContainer.appendChild(this.lightVersorContainer);

    this.lightVersorSelect.addEventListener('change', this.onLightVersorSelectChange);
  }

  public destroy() {
    this.inputDataContainer.removeChild(this.backgroundSelectButton);
    this.inputDataContainer.removeChild(this.lightColorSelectButton);
    this.inputDataContainer.removeChild(this.normalMapSelectButton);
    this.inputDataContainer.removeChild(this.heightMapSelectButton);

    // tslint:disable-next-line
    this.inputDataContainer.innerHTML = '';

    this.lightVersorSelect.removeEventListener('change', this.onLightVersorSelectChange);
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

  // #region Light versor select
  private setupLightVersorSelect() {
    this.lightVersorContainer = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', 'light-wersor-select');
    label.innerText = 'Light versor: ';
    this.lightVersorContainer.appendChild(label);

    this.lightVersorSelect = document.createElement('select');
    const constantVersorOption = document.createElement('option');
    constantVersorOption.innerText = 'Constant ([0, 0, 1])';
    constantVersorOption.value = 'constant';

    const movingVersorOption = document.createElement('option');
    movingVersorOption.innerText = 'Circling above the screen';
    movingVersorOption.value = 'circling';

    this.lightVersorSelect.appendChild(constantVersorOption);
    this.lightVersorSelect.appendChild(movingVersorOption);

    this.lightVersorContainer.appendChild(this.lightVersorSelect);

    this.onLightVersorSelectChange = this.onLightVersorSelectChange.bind(this);
  }

  private onLightVersorSelectChange() {
    const value = this.lightVersorSelect.value;
    const versorTypes: { [name: string]: LightVersorType } = {
      constant: LightVersorType.Constant,
      circling: LightVersorType.Circling
    };

    const versorType = versorTypes[value];

    this.eventAggregator.dispatchEvent(new NewLightVersorTypeEvent(versorType));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }

  // #endregion
}
