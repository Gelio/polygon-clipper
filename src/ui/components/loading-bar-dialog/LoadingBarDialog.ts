import { DialogBox } from 'ui/components/DialogBox';

import 'ui/components/loading-bar-dialog/LoadingBarDialog.scss';

export class LoadingBarDialog extends HTMLElement implements DialogBox {
  private backgroundBar: HTMLElement;
  private progressLabel: HTMLElement;

  constructor() {
    super();

    this.className = 'loading-bar-dialog dialog-box';

    this.backgroundBar = document.createElement('div');
    this.backgroundBar.className = 'loading-dialog__background-bar';
    this.backgroundBar.innerText = ' ';

    this.progressLabel = document.createElement('span');

    const text = document.createElement('span');
    text.innerText = 'Loading... ';
    text.appendChild(this.progressLabel);

    this.appendChild(this.backgroundBar);
    this.appendChild(text);

    this.totalAssetsCount = '0';
    this.loadedAssetsCount = '0';
    this.update();
  }

  public static get observedAttributes() {
    return ['total-assets-count', 'loaded-assets-count'];
  }

  public connectedCallback() {
    // Empty
  }

  public disconnectedCallback() {
    // Empty
  }

  public attributeChangedCallback(attribute: string, _oldValue: string, _newValue: string) {
    if (attribute === 'total-assets-count' || attribute === 'loaded-assets-count') {
      this.update();
    }
  }

  public close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  public canClose() {
    return false;
  }

  public get totalAssetsCount() {
    return this.getAttribute('total-assets-count') || '';
  }

  public set totalAssetsCount(value: string) {
    this.setAttribute('total-assets-count', value);
  }

  public get loadedAssetsCount() {
    return this.getAttribute('loaded-assets-count') || '';
  }

  public set loadedAssetsCount(value: string) {
    this.setAttribute('loaded-assets-count', value);
  }

  private update() {
    const loadedAssetsCount = parseInt(this.loadedAssetsCount, 10);
    const totalAssetsCount = parseInt(this.totalAssetsCount, 10);

    let progress = 100;
    if (totalAssetsCount > 0) {
      progress = Math.round(loadedAssetsCount / totalAssetsCount * 100);
    }

    this.backgroundBar.style.width = `${progress}%`;

    this.progressLabel.innerText = `${loadedAssetsCount} / ${totalAssetsCount} (${progress} %)`;
  }
}

window.customElements.define('app-loading-bar-dialog', LoadingBarDialog);
