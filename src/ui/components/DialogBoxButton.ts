import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';
import { DialogBox } from 'ui/components/DialogBox';

export interface DialogBoxButtonDependencies {
  dialogOverlay: DialogOverlay;
}

export abstract class DialogBoxButton extends HTMLElement {
  protected readonly dialogOverlay: DialogOverlay;

  protected dialogBox: DialogBox;
  protected button: HTMLButtonElement;

  constructor(dependencies: DialogBoxButtonDependencies) {
    super();

    this.dialogOverlay = dependencies.dialogOverlay;

    this.button = document.createElement('button');
    this.button.innerText = 'Open dialog box';

    this.openDialogBox = this.openDialogBox.bind(this);
    this.onDialogBoxClosed = this.onDialogBoxClosed.bind(this);
    this.setupDialogBox();

    if (!this.dialogBox) {
      throw new Error('Dialog box is undefined');
    }
  }

  public connectedCallback() {
    this.appendChild(this.button);

    this.button.addEventListener('click', this.openDialogBox);
  }

  public disconnectedCallback() {
    this.removeChild(this.button);
    this.button.removeEventListener('click', this.openDialogBox);

    this.dialogBox.removeEventListener('close', this.onDialogBoxClosed);
    this.dialogBox.close();
  }

  protected abstract setupDialogBox(): void;
  protected abstract onDialogBoxClosed(event: Event): void;

  protected openDialogBox() {
    this.dialogOverlay.showDialog(this.dialogBox);
    this.dialogBox.addEventListener('close', this.onDialogBoxClosed);
  }
}

customElements.define('app-dialog-box-button', DialogBoxButton);
