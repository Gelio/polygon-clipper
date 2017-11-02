import { DialogBox } from 'ui/components/DialogBox';
import 'ui/components/DialogBox.scss';

import { Color } from 'common/Color';

import 'ui/components/color-select-dialog/ColorSelectDialog.scss';

const classNames = {
  DIALOG_BOX: 'dialog-box',
  DIALOG: 'color-select-dialog',
  HEADER: 'color-select-dialog__header',
  HEADING: 'color-select-dialog__heading',
  BLOCK: 'image-select-dialog__block',
  BOTTOM_BUTTONS: 'color-select-dialog__bottom-buttons'
};

export class ColorSelectDialog extends HTMLElement implements DialogBox {
  private _wasCancelled = true;

  private header: HTMLElement;
  private heading: HTMLHeadingElement;

  private colorInput: HTMLInputElement;

  private bottomButtonsContainer: HTMLDivElement;
  private cancelButton: HTMLButtonElement;
  private confirmButton: HTMLButtonElement;

  constructor() {
    super();

    this.classList.add(classNames.DIALOG_BOX);
    this.classList.add(classNames.DIALOG);

    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
    this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);

    this.createHeader();
    this.createColorInput();
    this.createBottomButtons();
  }

  public static get observedAttributes() {
    return ['name'];
  }

  public get name(): string {
    return this.getAttribute('name') || 'Color select';
  }

  public set name(value: string) {
    this.setAttribute('name', value);
    this.heading.innerText = value;
  }

  public get selectedColor() {
    return Color.fromHexString(this.colorInput.value);
  }

  public set selectedColor(color: Color) {
    this.colorInput.value = color.toHexString();
  }

  public connectedCallback() {
    this._wasCancelled = true;

    this.appendChild(this.header);
    this.appendChild(this.colorInput);
    this.appendChild(this.bottomButtonsContainer);
    this.cancelButton.addEventListener('click', this.onCancelButtonClick);
    this.confirmButton.addEventListener('click', this.onConfirmButtonClick);
  }

  public disconnectedCallback() {
    this.removeChild(this.header);
    this.removeChild(this.colorInput);
    this.removeChild(this.bottomButtonsContainer);
    this.cancelButton.removeEventListener('click', this.onCancelButtonClick);
    this.confirmButton.removeEventListener('click', this.onConfirmButtonClick);
  }

  public get wasCancelled() {
    return this._wasCancelled;
  }

  public close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  public canClose() {
    return true;
  }

  private createHeader() {
    this.header = this.createBlock();
    this.header.classList.add(classNames.HEADER);

    this.heading = document.createElement('h2');
    this.heading.classList.add(classNames.HEADING);
    this.heading.innerText = this.name;

    this.header.appendChild(this.heading);
  }

  private createColorInput() {
    this.colorInput = document.createElement('input');
    this.colorInput.type = 'color';
  }

  private createBottomButtons() {
    this.bottomButtonsContainer = document.createElement('div');
    this.bottomButtonsContainer.classList.add(classNames.BOTTOM_BUTTONS);

    this.cancelButton = document.createElement('button');
    this.cancelButton.innerText = 'Cancel';

    this.confirmButton = document.createElement('button');
    this.confirmButton.innerText = 'Confirm';

    this.bottomButtonsContainer.appendChild(this.cancelButton);
    this.bottomButtonsContainer.appendChild(this.confirmButton);
  }

  private onCancelButtonClick() {
    this.close();
  }

  private onConfirmButtonClick() {
    this._wasCancelled = false;
    this.close();
  }

  private createBlock() {
    const block = document.createElement('div');
    block.classList.add(classNames.BLOCK);

    return block;
  }
}

customElements.define('app-color-select-dialog', ColorSelectDialog);
