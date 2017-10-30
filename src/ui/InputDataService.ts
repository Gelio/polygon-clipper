import { EventAggregator } from 'events/EventAggregator';

import { configuration } from 'configuration';
import { UIService } from 'ui/UIService';

import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';
import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';

import { ImageDownloader } from 'common/ImageDownloader';

interface SerializationServiceDependencies {
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
}

export class InputDataService implements UIService {
  private inputDataContainer: HTMLElement;
  private dialogOverlay: DialogOverlay;
  private eventAggregator: EventAggregator;
  private imageDownloader: ImageDownloader;

  private openBackgroundTextureDialogButton: HTMLButtonElement;
  private backgroundTextureDialog: ImageSelectDialog;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;

    this.setupBackgroundTextureDialog();
  }

  public init() {
    const inputDataContainer = document.getElementById('input-data-container');
    if (!inputDataContainer) {
      throw new Error('Input data container not found');
    }

    this.inputDataContainer = inputDataContainer;
    this.inputDataContainer.appendChild(this.openBackgroundTextureDialogButton);

    const dialogOverlay = document.querySelector('app-dialog-overlay');
    if (!dialogOverlay) {
      throw new Error('Dialog overlay not found');
    }
    this.dialogOverlay = <DialogOverlay>dialogOverlay;

    this.openBackgroundTextureDialogButton.addEventListener(
      'click',
      this.openBackgroundTextureDialog
    );
  }

  public destroy() {
    // tslint:disable-next-line
    this.inputDataContainer.innerHTML = '';
  }

  private setupBackgroundTextureDialog() {
    this.openBackgroundTextureDialogButton = document.createElement('button');
    this.openBackgroundTextureDialogButton.innerText = 'Select background texture';

    this.backgroundTextureDialog = new ImageSelectDialog(configuration.presetBackgroundTextures);
    this.backgroundTextureDialog.name = 'Background texture';

    this.openBackgroundTextureDialog = this.openBackgroundTextureDialog.bind(this);
    this.onBackgroundTextureDialogClosed = this.onBackgroundTextureDialogClosed.bind(this);
  }

  private openBackgroundTextureDialog() {
    this.dialogOverlay.showDialog(this.backgroundTextureDialog);
    this.backgroundTextureDialog.addEventListener('close', this.onBackgroundTextureDialogClosed);
  }

  private async onBackgroundTextureDialogClosed() {
    if (this.backgroundTextureDialog.wasCancelled) {
      return;
    }

    const selectedImage = this.backgroundTextureDialog.selectedImage;
    const backgroundTextureArray = await this.imageDownloader.imageToUint8Array(selectedImage);

    console.log('New background texture', backgroundTextureArray);
    // TODO: convert to a canvas
  }
}
