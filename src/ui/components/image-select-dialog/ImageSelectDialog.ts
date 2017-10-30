import 'ui/components/image-select-dialog/ImageSelectDialog.scss';

import { DialogBox } from 'ui/components/DialogBox';

const classNames = {
  DIALOG: 'image-select-dialog',
  HEADER: 'image-select-dialog__header',
  HEADING: 'image-select-dialog__heading',
  BLOCK: 'image-select-dialog__block',
  BLOCK_TITLE: 'image-select-dialog__block-title',
  PRESET_IMAGES_CONTAINER: 'image-select-dialog__preset-images-container',
  SELECTED_IMAGE: 'image-select-dialog__image--selected'
};

export class ImageSelectDialog extends HTMLElement implements DialogBox {
  private _presetImageUrls: string[];
  // private _selectedImage: Blob;

  private header: HTMLElement;
  private heading: HTMLHeadingElement;

  private presetImagesListContainer: HTMLDivElement;
  private customImageContainer: HTMLDivElement;
  private bottomButtonsContainer: HTMLDivElement;

  private _selectedImage: HTMLImageElement;

  constructor(presetImageUrls: string[]) {
    super();

    this._presetImageUrls = presetImageUrls;

    this.classList.add(classNames.DIALOG);

    this.createHeader();
    this.createPresetImagesList();
    this.createCustomImagePicker();
    this.createBottomButtons();

    this.onPresetImageClick = this.onPresetImageClick.bind(this);
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

  public get presetImageUrls() {
    return this._presetImageUrls;
  }

  public get selectedImage() {
    return null;
  }

  public connectedCallback() {
    this.appendChild(this.header);
    this.appendChild(this.presetImagesListContainer);
    this.appendChild(this.customImageContainer);
    this.appendChild(this.bottomButtonsContainer);

    this.presetImagesListContainer.querySelectorAll('img')
      .forEach(image => image.addEventListener('click', this.onPresetImageClick));
  }

  public disconnectedCallback() {
    this.presetImagesListContainer.querySelectorAll('img')
      .forEach(image => image.removeEventListener('click', this.onPresetImageClick));

    this.removeChild(this.header);
    this.removeChild(this.presetImagesListContainer);
    this.removeChild(this.customImageContainer);
    this.removeChild(this.bottomButtonsContainer);
  }

  public canClose() {
    return true;
  }

  public close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  private createHeader() {
    this.header = this.createBlock();
    this.header.classList.add(classNames.HEADER);

    this.heading = document.createElement('h2');
    this.heading.classList.add(classNames.HEADING);
    this.heading.innerText = this.name;

    this.header.appendChild(this.heading);
  }

  private createPresetImagesList() {
    const container = this.createBlock();
    const blockTitle = this.createBlockTitle('Choose preset image');
    container.appendChild(blockTitle);

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add(classNames.PRESET_IMAGES_CONTAINER);
    container.appendChild(imagesContainer);
    this.presetImageUrls.map(url => this.createSelectableImage(url))
      .forEach(image => imagesContainer.appendChild(image));

    this.presetImagesListContainer = container;

    this.selectImage(<HTMLImageElement>this.presetImagesListContainer.querySelector('img'));
  }

  private createCustomImagePicker() {
    this.customImageContainer = this.createBlock();
    const blockTitle = this.createBlockTitle('Select custom image');
    this.customImageContainer.appendChild(blockTitle);
  }

  private createBottomButtons() {
    this.bottomButtonsContainer = document.createElement('div');
    this.bottomButtonsContainer.innerText = 'Bottom buttons';
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

  private onPresetImageClick(event: MouseEvent) {
    if (!event.srcElement) {
      return;
    }

    this.selectImage(<HTMLImageElement>event.srcElement);
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
