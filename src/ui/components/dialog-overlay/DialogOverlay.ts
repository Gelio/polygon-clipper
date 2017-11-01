import 'ui/components/dialog-overlay/DialogOverlay.scss';

import { DialogBox } from 'ui/components/DialogBox';

export class DialogOverlay extends HTMLElement {
  private overlayElement: HTMLElement;
  private dialogBox: DialogBox | undefined;

  constructor() {
    super();

    this.overlayElement = document.createElement('div');
    this.overlayElement.classList.add('overlay');

    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onDialogClose = this.onDialogClose.bind(this);
  }

  public connectedCallback() {
    this.appendChild(this.overlayElement);
    this.overlayElement.addEventListener('click', this.onOverlayClick);
  }

  public disconnectedCallback() {
    this.removeChild(this.overlayElement);
    this.overlayElement.removeEventListener('click', this.onOverlayClick);
  }

  public showDialog(dialogBox: DialogBox) {
    this.dialogBox = dialogBox;
    this.showOverlay();
    this.appendChild(dialogBox);
    dialogBox.addEventListener('close', this.onDialogClose);
  }

  private onOverlayClick() {
    if (!this.dialogBox || !this.dialogBox.canClose()) {
      return;
    }

    this.dialogBox.close();
  }

  private onDialogClose() {
    if (this.dialogBox) {
      this.removeChild(this.dialogBox);
      this.dialogBox.removeEventListener('close', this.onDialogClose);
    }
    this.dialogBox = undefined;
    this.hideOverlay();
  }

  private showOverlay() {
    this.overlayElement.classList.add('overlay--visible');
  }

  private hideOverlay() {
    this.overlayElement.classList.remove('overlay--visible');
  }
}

customElements.define('app-dialog-overlay', DialogOverlay);