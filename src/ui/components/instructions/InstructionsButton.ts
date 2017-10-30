import { InstructionsDialog } from 'ui/components/instructions/InstructionsDialog';

export class InstructionsButton extends HTMLElement {
  private button: HTMLButtonElement;

  constructor() {
    super();

    this.button = document.createElement('button');
    this.button.textContent = 'Instructions';
    this.button.className = 'instructions-button';

    this.onButtonClick = this.onButtonClick.bind(this);
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
    const instructionsDialog = new InstructionsDialog();
    this.appendChild(instructionsDialog);
  }
}

window.customElements.define('app-instructions-button', InstructionsButton);
