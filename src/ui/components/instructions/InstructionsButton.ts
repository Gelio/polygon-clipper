import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';
import { InstructionsDialog } from 'ui/components/instructions/InstructionsDialog';

export class InstructionsButton extends HTMLElement {
  private button: HTMLButtonElement;
  private instructionsDialog: InstructionsDialog;

  constructor() {
    super();

    this.button = document.createElement('button');
    this.button.textContent = 'Instructions';
    this.button.className = 'instructions-button';

    this.onButtonClick = this.onButtonClick.bind(this);
    this.instructionsDialog = new InstructionsDialog();
  }

  public static get observedAttributes() {
    return ['dialog-overlay-id'];
  }

  public get dialogOverlayId() {
    return this.getAttribute('dialog-overlay-id') || '';
  }

  public set dialogOverlayId(value: string) {
    this.setAttribute('dialog-overlay-id', value);
  }

  public connectedCallback() {
    this.appendChild(this.button);
    this.button.addEventListener('click', this.onButtonClick);
  }

  public disconnectedCallback() {
    this.removeChild(this.button);
    this.button.removeEventListener('click', this.onButtonClick);
  }

  private onButtonClick() {
    const dialogOverlay = <DialogOverlay>document.getElementById(this.dialogOverlayId);
    if (!dialogOverlay) {
      throw new Error('Dialog overlay not found');
    }

    dialogOverlay.showDialog(this.instructionsDialog);
  }
}

window.customElements.define('app-instructions-button', InstructionsButton);
