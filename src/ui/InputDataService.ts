import { EventAggregator } from 'events/EventAggregator';
import { NewBackgroundTexture } from 'events/input-data/NewBackgroundTexture';
import { NewHeightMap } from 'events/input-data/NewHeightMap';
// import { NewLightColor } from 'events/input-data/NewLightColor';
import { NewNormalMap } from 'events/input-data/NewNormalMap';

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

  private openHeightMapDialogButton: HTMLButtonElement;
  private heightMapDialog: ImageSelectDialog;

  private openNormalMapDialogButton: HTMLButtonElement;
  private normalMapDialog: ImageSelectDialog;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;

    this.setupBackgroundTextureDialog();
    this.setupNormalMapDialog();
    this.setupHeightMapDialog();
  }

  public init() {
    const inputDataContainer = document.getElementById('input-data-container');
    if (!inputDataContainer) {
      throw new Error('Input data container not found');
    }

    this.inputDataContainer = inputDataContainer;
    this.inputDataContainer.appendChild(this.openBackgroundTextureDialogButton);
    this.inputDataContainer.appendChild(this.openNormalMapDialogButton);
    this.inputDataContainer.appendChild(this.openHeightMapDialogButton);

    const dialogOverlay = document.querySelector('app-dialog-overlay');
    if (!dialogOverlay) {
      throw new Error('Dialog overlay not found');
    }
    this.dialogOverlay = <DialogOverlay>dialogOverlay;

    this.openBackgroundTextureDialogButton.addEventListener(
      'click',
      this.openBackgroundTextureDialog
    );

    this.openNormalMapDialogButton.addEventListener(
      'click',
      this.openNormalMapDialog
    );

    this.openHeightMapDialogButton.addEventListener(
      'click',
      this.openHeightMapDialog
    );
  }

  public destroy() {
    // tslint:disable-next-line
    this.inputDataContainer.innerHTML = '';

    this.openBackgroundTextureDialogButton.removeEventListener('click', this.openBackgroundTextureDialog);
    this.backgroundTextureDialog.removeEventListener('close', this.onBackgroundTextureDialogClosed);
    this.backgroundTextureDialog.close();

    this.openHeightMapDialogButton.removeEventListener('click', this.openHeightMapDialog);
    this.heightMapDialog.removeEventListener('close', this.onHeightMapDialogClosed);
    this.heightMapDialog.close();

    this.openNormalMapDialogButton.removeEventListener('click', this.openNormalMapDialog);
    this.normalMapDialog.removeEventListener('close', this.onNormalMapDialogClosed);
    this.normalMapDialog.close();
  }

  // #region Background texture dialog
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
    const imageData = await this.imageDownloader.imageToImageData(selectedImage);

    this.eventAggregator.dispatchEvent(new NewBackgroundTexture(imageData));
    console.log('New background texture', imageData);
  }
  // #endregion

  // #region Light color dialog
  // TODO
  // #endregion

  // #region Normal map dialog
  private setupNormalMapDialog() {
    this.openNormalMapDialogButton = document.createElement('button');
    this.openNormalMapDialogButton.innerText = 'Select normal map';

    this.normalMapDialog = new ImageSelectDialog(configuration.presetNormalMaps);
    this.normalMapDialog.name = 'Normal map';

    this.openNormalMapDialog = this.openNormalMapDialog.bind(this);
    this.onNormalMapDialogClosed = this.onNormalMapDialogClosed.bind(this);

    this.normalMapDialog.addEventListener('close', this.onNormalMapDialogClosed);
  }

  private openNormalMapDialog() {
    this.dialogOverlay.showDialog(this.normalMapDialog);
  }

  private async onNormalMapDialogClosed() {
    if (this.normalMapDialog.wasCancelled) {
      return;
    }

    const selectedImage = this.normalMapDialog.selectedImage;
    const imageData = await this.imageDownloader.imageToImageData(selectedImage);

    this.eventAggregator.dispatchEvent(new NewNormalMap(imageData));
    console.log('New normal map texture', imageData);
  }
  // #endregion

  // TODO: light wersor

  // #region Height map dialog
  private setupHeightMapDialog() {
    this.openHeightMapDialogButton = document.createElement('button');
    this.openHeightMapDialogButton.innerText = 'Select height map';

    this.heightMapDialog = new ImageSelectDialog(configuration.presetHeightMaps);
    this.heightMapDialog.name = 'Height map';

    this.openHeightMapDialog = this.openHeightMapDialog.bind(this);
    this.onHeightMapDialogClosed = this.onHeightMapDialogClosed.bind(this);

    this.heightMapDialog.addEventListener('close', this.onHeightMapDialogClosed);
  }

  private openHeightMapDialog() {
    this.dialogOverlay.showDialog(this.heightMapDialog);
  }

  private async onHeightMapDialogClosed() {
    if (this.heightMapDialog.wasCancelled) {
      return;
    }

    const selectedImage = this.heightMapDialog.selectedImage;
    const imageData = await this.imageDownloader.imageToImageData(selectedImage);

    this.eventAggregator.dispatchEvent(new NewHeightMap(imageData));
    console.log('New height map texture', imageData);
  }
  // #endregion
}
