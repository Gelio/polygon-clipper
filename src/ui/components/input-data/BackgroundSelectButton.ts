import { NewBackgroundTextureEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { configuration } from 'configuration';

import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';
import { ImageSelectDialogButton, ImageSelectDialogButtonDependencies } from 'ui/components/image-select-dialog/ImageSelectDialogButton';

export class BackgroundSelectButton extends ImageSelectDialogButton {
  constructor(dependencies: ImageSelectDialogButtonDependencies) {
    super(dependencies);

    this.button.innerText = 'Select background texture';
  }

  protected setupDialogBox() {
    this.dialogBox = new ImageSelectDialog(
      configuration.presetBackgroundTextures,
      configuration.initialCustomBackgroundColorHex
    );
    this.dialogBox.name = 'Background texture';
  }

  protected async onDialogBoxClosed() {
    if (this.dialogBox.wasCancelled) {
      return;
    }

    const imageData = await this.getSelectedImageData();

    this.eventAggregator.dispatchEvent(new NewBackgroundTextureEvent(imageData));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}

customElements.define('app-background-select-button', BackgroundSelectButton);
