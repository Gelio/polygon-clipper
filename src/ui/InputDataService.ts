import { EventAggregator } from 'events/EventAggregator';

import { ImageDownloader } from 'services/ImageDownloader';
import { Service } from 'services/Service';

import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';

import {
  BackgroundSelectButton,
  HeightMapSelectButton,
  LightColorSelectButton,
  LightTypeSelect,
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
  private lightTypeSelect: LightTypeSelect;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;
  }

  public init() {
    this.findInputDataContainer();
    this.findDialogOverlay();
    this.setupElements();

    this.inputDataContainer.appendChild(this.backgroundSelectButton);
    this.inputDataContainer.appendChild(this.lightColorSelectButton);
    this.inputDataContainer.appendChild(this.normalMapSelectButton);
    this.inputDataContainer.appendChild(this.heightMapSelectButton);
    this.inputDataContainer.appendChild(this.lightTypeSelect);
  }

  public destroy() {
    this.inputDataContainer.removeChild(this.backgroundSelectButton);
    this.inputDataContainer.removeChild(this.lightColorSelectButton);
    this.inputDataContainer.removeChild(this.normalMapSelectButton);
    this.inputDataContainer.removeChild(this.heightMapSelectButton);
    this.inputDataContainer.removeChild(this.lightTypeSelect);
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

  private setupElements() {
    const { eventAggregator, dialogOverlay, imageDownloader } = this;

    const imageSelectButtonDependencies = { eventAggregator, dialogOverlay, imageDownloader };
    const colorSelectButtonDependencies = { dialogOverlay, eventAggregator };

    this.backgroundSelectButton = new BackgroundSelectButton(imageSelectButtonDependencies);
    this.heightMapSelectButton = new HeightMapSelectButton(imageSelectButtonDependencies);
    this.lightColorSelectButton = new LightColorSelectButton(colorSelectButtonDependencies);
    this.normalMapSelectButton = new NormalMapSelectButton(imageSelectButtonDependencies);
    this.lightTypeSelect = new LightTypeSelect({ eventAggregator });
  }
}
