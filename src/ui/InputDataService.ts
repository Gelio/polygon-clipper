import { EventAggregator } from 'events/EventAggregator';

import { ImageDownloader } from 'services/ImageDownloader';
import { Service } from 'services/Service';

import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';

import {
  BackgroundSelectButton,
  HeightMapIntensityInput,
  HeightMapSelectButton,
  LightColorSelectButton,
  LightTypeSelect,
  NormalMapSelectButton,
  NormalMapTypeSelect
} from 'ui/components/input-data';

interface SerializationServiceDependencies {
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
  dialogOverlay: DialogOverlay;
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
  private heightMapIntensityInput: HeightMapIntensityInput;
  private normalMapTypeSelect: NormalMapTypeSelect;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;
    this.dialogOverlay = dependencies.dialogOverlay;
  }

  public init() {
    this.findInputDataContainer();
    this.setupElements();

    this.inputDataContainer.appendChild(this.backgroundSelectButton);
    this.inputDataContainer.appendChild(this.lightColorSelectButton);
    this.inputDataContainer.appendChild(this.normalMapSelectButton);
    this.inputDataContainer.appendChild(this.heightMapSelectButton);
    this.inputDataContainer.appendChild(this.lightTypeSelect);
    this.inputDataContainer.appendChild(this.heightMapIntensityInput);
    this.inputDataContainer.appendChild(this.normalMapTypeSelect);
  }

  public destroy() {
    this.inputDataContainer.removeChild(this.backgroundSelectButton);
    this.inputDataContainer.removeChild(this.lightColorSelectButton);
    this.inputDataContainer.removeChild(this.normalMapSelectButton);
    this.inputDataContainer.removeChild(this.heightMapSelectButton);
    this.inputDataContainer.removeChild(this.lightTypeSelect);
    this.inputDataContainer.removeChild(this.heightMapIntensityInput);
    this.inputDataContainer.removeChild(this.normalMapTypeSelect);
  }

  private findInputDataContainer() {
    const inputDataContainer = document.getElementById('input-data-container');
    if (!inputDataContainer) {
      throw new Error('Input data container not found');
    }

    this.inputDataContainer = inputDataContainer;
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
    this.heightMapIntensityInput = new HeightMapIntensityInput({ eventAggregator });
    this.normalMapTypeSelect = new NormalMapTypeSelect({ eventAggregator });
  }
}
