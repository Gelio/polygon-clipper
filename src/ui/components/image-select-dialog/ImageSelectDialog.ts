import 'ui/components/image-select-dialog/ImageSelectDialog.scss';

import { DialogBox } from 'ui/components/DialogBox';

const classNames = {
  DIALOG_BOX: 'dialog-box',
  DIALOG: 'image-select-dialog',
  HEADER: 'image-select-dialog__header',
  HEADING: 'image-select-dialog__heading',
  BLOCK: 'image-select-dialog__block',
  BLOCK_TITLE: 'image-select-dialog__block-title',
  PRESET_IMAGES_CONTAINER: 'image-select-dialog__preset-images-container',
  SELECTED_IMAGE: 'image-select-dialog__image--selected',
  CUSTOM_IMAGE: 'image-select-dialog__custom-image',
  BOTTOM_BUTTONS: 'image-select-dialog__bottom-buttons'
};

export class ImageSelectDialog extends HTMLElement implements DialogBox {
  private _presetImageUrls: string[];

  private heading: HTMLHeadingElement;

  private presetImagesListContainer: HTMLDivElement;
  private customFileInput: HTMLInputElement;
  private customImage: HTMLImageElement;

  private customColorInput: HTMLInputElement;
  private initialCustomColorHex: string;
  private customColorImage: HTMLImageElement;

  private cancelButton: HTMLButtonElement;
  private confirmButton: HTMLButtonElement;

  private _selectedImage: HTMLImageElement;
  private _wasCancelled = false;

  constructor(presetImageUrls: string[], initialCustomColorHex: string) {
    super();

    this._presetImageUrls = presetImageUrls;
    this.initialCustomColorHex = initialCustomColorHex;

    this.classList.add(classNames.DIALOG_BOX);
    this.classList.add(classNames.DIALOG);

    this.onSelectableImageClick = this.onSelectableImageClick.bind(this);
    this.showCustomImage = this.showCustomImage.bind(this);
    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
    this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
    this.onCustomColorInputChange = this.onCustomColorInputChange.bind(this);

    this.createHeader();
    this.createPresetImagesList();
    this.createCustomImagePicker();
    this.createCustomColorPicker();
    this.createBottomButtons();
  }

  public static get observedAttributes() {
    return ['name'];
  }

  public get name(): string {
    return this.getAttribute('name') || 'Image select';
  }

  public set name(value: string) {
    this.setAttribute('name', value);
    this.heading.innerText = value;
  }

  public get wasCancelled() {
    return this._wasCancelled;
  }

  public get presetImageUrls() {
    return this._presetImageUrls;
  }

  public get selectedImage() {
    return this._selectedImage;
  }

  public connectedCallback() {
    this._wasCancelled = true;

    this.cancelButton.addEventListener('click', this.onCancelButtonClick);
    this.confirmButton.addEventListener('click', this.onConfirmButtonClick);
    this.customFileInput.addEventListener('change', this.showCustomImage);
    this.customImage.addEventListener('click', this.onSelectableImageClick);
    this.customColorInput.addEventListener('change', this.onCustomColorInputChange);
    this.customColorImage.addEventListener('click', this.onSelectableImageClick);

    this.presetImagesListContainer
      .querySelectorAll('img')
      .forEach(image => image.addEventListener('click', this.onSelectableImageClick));
  }

  public disconnectedCallback() {
    this.presetImagesListContainer
      .querySelectorAll('img')
      .forEach(image => image.removeEventListener('click', this.onSelectableImageClick));
    this.customFileInput.removeEventListener('change', this.showCustomImage);
    this.customImage.removeEventListener('click', this.onSelectableImageClick);
    this.customColorInput.removeEventListener('change', this.onCustomColorInputChange);
    this.customColorImage.removeEventListener('click', this.onSelectableImageClick);

    this.cancelButton.removeEventListener('click', this.onCancelButtonClick);
    this.confirmButton.removeEventListener('click', this.onConfirmButtonClick);
  }

  public canClose() {
    return true;
  }

  public close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  private createHeader() {
    const header = this.createBlock();
    header.classList.add(classNames.HEADER);
    this.appendChild(header);

    this.heading = document.createElement('h2');
    this.heading.classList.add(classNames.HEADING);
    this.heading.innerText = this.name;

    header.appendChild(this.heading);
  }

  private createPresetImagesList() {
    const container = this.createBlock();
    const blockTitle = this.createBlockTitle('Choose preset image');
    container.appendChild(blockTitle);

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add(classNames.PRESET_IMAGES_CONTAINER);
    container.appendChild(imagesContainer);
    this.presetImageUrls
      .map(url => this.createSelectableImage(url))
      .forEach(image => imagesContainer.appendChild(image));

    this.presetImagesListContainer = container;
    this.appendChild(this.presetImagesListContainer);

    this.selectImage(<HTMLImageElement>this.presetImagesListContainer.querySelector('img'));
  }

  private createCustomImagePicker() {
    const customImageContainer = this.createBlock();
    this.appendChild(customImageContainer);

    const blockTitle = this.createBlockTitle('Select custom image');
    customImageContainer.appendChild(blockTitle);

    this.customFileInput = document.createElement('input');
    this.customFileInput.type = 'file';
    this.customFileInput.accept = 'image/*';
    customImageContainer.appendChild(this.customFileInput);

    this.customImage = document.createElement('img');
    this.customImage.classList.add(classNames.CUSTOM_IMAGE);
    customImageContainer.appendChild(this.customImage);
  }

  private showCustomImage() {
    if (this.customFileInput.files && this.customFileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        // tslint:disable-next-line no-any
        this.customImage.src = (<any>e.target).result;
        this.selectImage(this.customImage);
      };

      reader.readAsDataURL(this.customFileInput.files[0]);
    }
  }

  private createCustomColorPicker() {
    const customColorContainer = this.createBlock();
    this.appendChild(customColorContainer);

    const title = this.createBlockTitle('Custom solid color');
    customColorContainer.appendChild(title);

    this.customColorInput = document.createElement('input');
    this.customColorInput.type = 'color';
    this.customColorInput.value = this.initialCustomColorHex;
    customColorContainer.appendChild(this.customColorInput);

    this.customColorImage = new Image(20, 20);
    customColorContainer.appendChild(this.customColorImage);

    this.setCustomColorImageColor();
  }

  private onCustomColorInputChange() {
    this.setCustomColorImageColor();
    this.selectImage(this.customColorImage);
  }

  private setCustomColorImageColor() {
    const canvas = document.createElement('canvas');
    canvas.width = this.customColorImage.width;
    canvas.height = this.customColorImage.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Cannot get canvas drawing context');
    }

    ctx.fillStyle = this.customColorInput.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.customColorImage.src = canvas.toDataURL();
  }

  private createBottomButtons() {
    const bottomButtonsContainer = document.createElement('div');
    bottomButtonsContainer.classList.add(classNames.BOTTOM_BUTTONS);
    this.appendChild(bottomButtonsContainer);

    this.cancelButton = document.createElement('button');
    this.cancelButton.innerText = 'Cancel';

    this.confirmButton = document.createElement('button');
    this.confirmButton.innerText = 'Confirm';

    bottomButtonsContainer.appendChild(this.cancelButton);
    bottomButtonsContainer.appendChild(this.confirmButton);
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

  private createBlockTitle(title: string) {
    const blockTitle = document.createElement('h3');
    blockTitle.classList.add(classNames.BLOCK_TITLE);
    blockTitle.innerText = title;

    return blockTitle;
  }

  private createSelectableImage(imageSource: string) {
    const container = document.createElement('div');

    const image = new Image();
    image.src = imageSource;

    container.appendChild(image);

    return container;
  }

  private onSelectableImageClick(event: MouseEvent) {
    this.selectImage(<HTMLImageElement>event.target);
  }

  private selectImage(image: HTMLImageElement) {
    if (image === this._selectedImage) {
      return;
    }

    if (this._selectedImage) {
      this._selectedImage.classList.remove(classNames.SELECTED_IMAGE);
    }

    image.classList.add(classNames.SELECTED_IMAGE);
    this._selectedImage = image;
  }
}

customElements.define('app-image-select-dialog', ImageSelectDialog);
