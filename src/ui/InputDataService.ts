import { EventAggregator } from 'events/EventAggregator';
import {
  NewBackgroundTextureEvent,
  NewHeightMapEvent,
  NewLightColorEvent,
  NewLightVersorTypeEvent,
  NewNormalMapEvent
} from 'events/input-data';

import { configuration } from 'configuration';
import { UIService } from 'ui/UIService';

import { ColorSelectDialog } from 'ui/components/color-select-dialog/ColorSelectDialog';
import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';
import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';

import { ImageDownloader } from 'common/ImageDownloader';
import { LightVersorType } from 'common/LightVersorType';

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

  private openLightColorDialogButton: HTMLButtonElement;
  private lightColorDialog: ColorSelectDialog;

  private lightVersorContainer: HTMLElement;
  private lightVersorSelect: HTMLSelectElement;

  private openHeightMapDialogButton: HTMLButtonElement;
  private heightMapDialog: ImageSelectDialog;

  private openNormalMapDialogButton: HTMLButtonElement;
  private normalMapDialog: ImageSelectDialog;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;

    this.setupBackgroundTextureDialog();
    this.setupLightVersorSelect();
    this.setupLightColorDialog();
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
    this.inputDataContainer.appendChild(this.openLightColorDialogButton);
    this.inputDataContainer.appendChild(this.openNormalMapDialogButton);
    this.inputDataContainer.appendChild(this.openHeightMapDialogButton);
    this.inputDataContainer.appendChild(this.lightVersorContainer);

    const dialogOverlay = document.querySelector('app-dialog-overlay');
    if (!dialogOverlay) {
      throw new Error('Dialog overlay not found');
    }
    this.dialogOverlay = <DialogOverlay>dialogOverlay;

    this.openBackgroundTextureDialogButton.addEventListener(
      'click',
      this.openBackgroundTextureDialog
    );
    this.openLightColorDialogButton.addEventListener('click', this.openLightColorDialog);
    this.openNormalMapDialogButton.addEventListener('click', this.openNormalMapDialog);
    this.openHeightMapDialogButton.addEventListener('click', this.openHeightMapDialog);
    this.lightVersorSelect.addEventListener('change', this.onLightVersorSelectChange);
  }

  public destroy() {
    // tslint:disable-next-line
    this.inputDataContainer.innerHTML = '';

    this.openBackgroundTextureDialogButton.removeEventListener(
      'click',
      this.openBackgroundTextureDialog
    );
    this.backgroundTextureDialog.removeEventListener('close', this.onBackgroundTextureDialogClosed);
    this.backgroundTextureDialog.close();

    this.openLightColorDialogButton.removeEventListener('close', this.openLightColorDialog);
    this.lightColorDialog.removeEventListener('close', this.onLightColorDialogClosed);
    this.lightColorDialog.close();

    this.openHeightMapDialogButton.removeEventListener('click', this.openHeightMapDialog);
    this.heightMapDialog.removeEventListener('close', this.onHeightMapDialogClosed);
    this.heightMapDialog.close();

    this.openNormalMapDialogButton.removeEventListener('click', this.openNormalMapDialog);
    this.normalMapDialog.removeEventListener('close', this.onNormalMapDialogClosed);
    this.normalMapDialog.close();

    this.lightVersorSelect.removeEventListener('change', this.onLightVersorSelectChange);
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

    this.eventAggregator.dispatchEvent(new NewBackgroundTextureEvent(imageData));
  }
  // #endregion

  // #region Light color dialog
  private setupLightColorDialog() {
    this.openLightColorDialogButton = document.createElement('button');
    this.openLightColorDialogButton.innerText = 'Select light color';

    this.lightColorDialog = new ColorSelectDialog();
    this.lightColorDialog.name = 'Light color';
    this.lightColorDialog.selectedColor = configuration.presetLightColor;

    this.openLightColorDialog = this.openLightColorDialog.bind(this);
    this.onLightColorDialogClosed = this.onLightColorDialogClosed.bind(this);
  }

  private openLightColorDialog() {
    this.dialogOverlay.showDialog(this.lightColorDialog);
    this.lightColorDialog.addEventListener('close', this.onLightColorDialogClosed);
  }

  private async onLightColorDialogClosed() {
    if (this.lightColorDialog.wasCancelled) {
      return;
    }

    const lightColor = this.lightColorDialog.selectedColor;
    this.eventAggregator.dispatchEvent(new NewLightColorEvent(lightColor));
  }
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

    this.eventAggregator.dispatchEvent(new NewNormalMapEvent(imageData));
  }
  // #endregion

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
  }

  // #endregion

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

    this.eventAggregator.dispatchEvent(new NewHeightMapEvent(imageData));
  }
  // #endregion
}
