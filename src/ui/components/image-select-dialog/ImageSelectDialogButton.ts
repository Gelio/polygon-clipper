import { EventAggregator } from 'events/EventAggregator';

import { ImageDownloader } from 'services/ImageDownloader';

import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';

import { DialogBoxButton, DialogBoxButtonDependencies } from 'ui/components/DialogBoxButton';

export interface ImageSelectDialogButtonDependencies extends DialogBoxButtonDependencies {
  eventAggregator: EventAggregator;
  imageDownloader: ImageDownloader;
}

export abstract class ImageSelectDialogButton extends DialogBoxButton {
  protected readonly eventAggregator: EventAggregator;
  protected readonly imageDownloader: ImageDownloader;

  protected dialogBox: ImageSelectDialog;

  constructor(dependencies: ImageSelectDialogButtonDependencies) {
    super({ dialogOverlay: dependencies.dialogOverlay });

    this.eventAggregator = dependencies.eventAggregator;
    this.imageDownloader = dependencies.imageDownloader;

    this.button.innerText = 'Select image';
  }

  protected getSelectedImageData(): Promise<ImageData> {
    const selectedImage = this.dialogBox.selectedImage;

    return this.imageDownloader.imageToImageData(selectedImage);
  }
}

customElements.define('app-image-select-dialog-button', ImageSelectDialogButton);
