import 'ui/components/dialog-overlay/DialogOverlay.scss';

import { DialogBox } from 'ui/components/DialogBox';

export class DialogOverlay extends HTMLElement {
  private overlayElement: HTMLElement;
  private dialogBox: DialogBox | undefined;

  constructor() {
    super();

    this.overlayElement = document.createElement('div');
    this.overlayElement.classList.add('overlay');
    this.appendChild(this.overlayElement);

    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onDialogClose = this.onDialogClose.bind(this);
  }

  public connectedCallback() {
    this.overlayElement.addEventListener('click', this.onOverlayClick);
  }

  public disconnectedCallback() {
    this.overlayElement.removeEventListener('click', this.onOverlayClick);
  }

  public showDialog(dialogBox: DialogBox) {
    this.dialogBox = dialogBox;
    this.showOverlay();
    this.appendChild(dialogBox);
    dialogBox.addEventListener('close', this.onDialogClose);

    requestAnimationFrame(() => {
      dialogBox.classList.add('dialog-box--active');
    });
  }

  private onOverlayClick() {
    if (!this.dialogBox || !this.dialogBox.canClose()) {
      return;
    }

    this.dialogBox.close();
  }

  private onDialogClose() {
    if (this.dialogBox) {
      const dialogBox = this.dialogBox;
      this.removeChild(dialogBox);
      dialogBox.removeEventListener('close', this.onDialogClose);

      requestAnimationFrame(() => {
        dialogBox.classList.remove('dialog-box--active');
      });
    }

    this.dialogBox = undefined;
    this.hideOverlay();
  }

  private showOverlay() {
    this.overlayElement.classList.add('overlay--visible');
    document.body.classList.add('popup-active');
  }

  private hideOverlay() {
    this.overlayElement.classList.remove('overlay--visible');
    document.body.classList.remove('popup-active');
  }
}

customElements.define('app-dialog-overlay', DialogOverlay);
