import { EventAggregator } from 'events/EventAggregator';

import { UIService } from 'ui/UIService';

import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';
import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';

interface SerializationServiceDependencies {
  eventAggregator: EventAggregator;
}

export class InputDataService implements UIService {
  private inputDataContainer: HTMLElement;
  private dialogOverlay: DialogOverlay;
  private popupContainer: HTMLElement;
  private eventAggregator: EventAggregator;

  private openBackgroundTextureDialogButton: HTMLButtonElement;
  private backgroundTextureDialog: ImageSelectDialog;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;

    this.popupContainer = document.createElement('div');

    this.openBackgroundTextureDialogButton = document.createElement('button');
    this.openBackgroundTextureDialogButton.innerText = 'Select background texture';

    this.backgroundTextureDialog = new ImageSelectDialog([
      'https://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg',
      'https://www.petfinder.com/wp-content/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg',
      'https://s2.dmcdn.net/Ub1O8/1280x720-mCQ.jpg',
      // tslint:disable-next-line
      'https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg'
    ]);

    this.openBackgroundTextureDialog = this.openBackgroundTextureDialog.bind(this);
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

    this.openBackgroundTextureDialogButton.addEventListener('click', this.openBackgroundTextureDialog);
  }

  public destroy() {
    // tslint:disable-next-line
    this.inputDataContainer.innerHTML = '';
  }

  private openBackgroundTextureDialog() {
    this.dialogOverlay.showDialog(this.backgroundTextureDialog);
    this.backgroundTextureDialog.addEventListener('close', () => console.log('Texture closed'));
  }
}
