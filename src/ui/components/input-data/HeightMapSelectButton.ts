import { NewHeightMapEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { configuration } from 'configuration';

import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';
import { ImageSelectDialogButton, ImageSelectDialogButtonDependencies } from 'ui/components/image-select-dialog/ImageSelectDialogButton';

export class HeightMapSelectButton extends ImageSelectDialogButton {
  constructor(dependencies: ImageSelectDialogButtonDependencies) {
    super(dependencies);

    this.button.innerText = 'Select height map';
  }

  protected setupDialogBox() {
    this.dialogBox = new ImageSelectDialog(
      configuration.presetHeightMaps,
      configuration.initialCustomHeightMapColorHex
    );
    this.dialogBox.name = 'Height map';
  }

  protected async onDialogBoxClosed() {
    if (this.dialogBox.wasCancelled) {
      return;
    }

    const imageData = await this.getSelectedImageData();

    this.eventAggregator.dispatchEvent(new NewHeightMapEvent(imageData));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}

customElements.define('app-height-map-select-button', HeightMapSelectButton);
