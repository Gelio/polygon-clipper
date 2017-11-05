import 'ui/components/dialog-overlay/DialogOverlay.scss';

import { DialogBox } from 'ui/components/DialogBox';

export class DialogOverlay extends HTMLElement {
  private overlayElement: HTMLElement;
  private dialogBoxStack: DialogBox[];

  constructor() {
    super();

    this.dialogBoxStack = [];
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
    if (this.dialogBoxStack.length === 0) {
      this.showOverlay();
    }

    this.dialogBoxStack.push(dialogBox);
    this.appendChild(dialogBox);
    dialogBox.addEventListener('close', this.onDialogClose);

    requestAnimationFrame(() => {
      dialogBox.classList.add('dialog-box--active');
    });
  }

  private onOverlayClick() {
    if (this.dialogBoxStack.length === 0) {
      return;
    }

    const topmostDialogBox = this.dialogBoxStack[this.dialogBoxStack.length - 1];
    if (!topmostDialogBox.canClose()) {
      return;
    }

    topmostDialogBox.close();
  }

  private onDialogClose(event: CustomEvent) {
    const dialogBox = <DialogBox>event.target;
    this.removeChild(dialogBox);
    dialogBox.removeEventListener('close', this.onDialogClose);

    requestAnimationFrame(() => {
      dialogBox.classList.remove('dialog-box--active');
    });

    const dialogBoxIndex = this.dialogBoxStack.indexOf(dialogBox);
    this.dialogBoxStack.splice(dialogBoxIndex, 1);

    if (this.dialogBoxStack.length === 0) {
      this.hideOverlay();
    }
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
