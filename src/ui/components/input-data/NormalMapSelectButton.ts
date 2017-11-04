import { NewNormalMapEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { configuration } from 'configuration';

import { ImageSelectDialog } from 'ui/components/image-select-dialog/ImageSelectDialog';
import { ImageSelectDialogButton, ImageSelectDialogButtonDependencies } from 'ui/components/image-select-dialog/ImageSelectDialogButton';

export class NormalMapSelectButton extends ImageSelectDialogButton {
  constructor(dependencies: ImageSelectDialogButtonDependencies) {
    super(dependencies);

    this.button.innerText = 'Select normal map';
  }

  protected setupDialogBox() {
    this.dialogBox = new ImageSelectDialog(
      configuration.presetNormalMaps,
      configuration.initialCustomNormalMapColorHex
    );
    this.dialogBox.name = 'Normal map';
  }

  protected async onDialogBoxClosed() {
    if (this.dialogBox.wasCancelled) {
      return;
    }

    const imageData = await this.getSelectedImageData();

    this.eventAggregator.dispatchEvent(new NewNormalMapEvent(imageData));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}

customElements.define('app-normal-map-select-button', NormalMapSelectButton);
