import { Vector3 } from 'common/Vector3';
import { configuration } from 'configuration';

import { EventAggregator } from 'events/EventAggregator';
import { NewLightColorEvent } from 'events/input-data';
import { RenderEvent } from 'events/RenderEvent';

import { ColorSelectDialog } from 'ui/components/color-select-dialog/ColorSelectDialog';

import { DialogBoxButton, DialogBoxButtonDependencies } from 'ui/components/DialogBoxButton';

export interface LightColorSelectButtonDependencies extends DialogBoxButtonDependencies {
  eventAggregator: EventAggregator;
}

export class LightColorSelectButton extends DialogBoxButton {
  protected readonly eventAggregator: EventAggregator;

  protected dialogBox: ColorSelectDialog;

  constructor(dependencies: LightColorSelectButtonDependencies) {
    super({ dialogOverlay: dependencies.dialogOverlay });

    this.eventAggregator = dependencies.eventAggregator;

    this.button.innerText = 'Select light color';
  }

  protected setupDialogBox() {
    this.dialogBox = new ColorSelectDialog();
    this.dialogBox.name = 'Light color';
    this.dialogBox.selectedColor = configuration.presetLightColor.toColor();
  }

  protected onDialogBoxClosed() {
    if (this.dialogBox.wasCancelled) {
      return;
    }

    const lightColor = this.dialogBox.selectedColor;
    const lightVector = Vector3.fromColor(lightColor);
    this.eventAggregator.dispatchEvent(new NewLightColorEvent(lightVector));
    this.eventAggregator.dispatchEvent(new RenderEvent());
  }
}

customElements.define('app-light-color-select-button', LightColorSelectButton);
