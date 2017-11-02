import { DialogBox } from 'ui/components/DialogBox';

import 'ui/components/instructions/InstructionsDialog.scss';

export class InstructionsDialog extends HTMLElement implements DialogBox {
  private dismissButton: HTMLButtonElement;
  private titleElement: HTMLElement;
  private usageList: HTMLUListElement;

  constructor() {
    super();

    this.className = 'instructions-dialog dialog-box';

    this.titleElement = document.createElement('h1');
    this.titleElement.textContent = 'Instructions';
    this.titleElement.className = 'instructions-dialog__title';

    this.usageList = this.createUsageList();

    this.dismissButton = document.createElement('button');
    this.dismissButton.textContent = 'Dismiss';
    this.dismissButton.className = 'instructions-dialog__dismiss-button';

    this.dismiss = this.dismiss.bind(this);
  }

  public connectedCallback() {
    this.appendChild(this.titleElement);
    this.appendChild(this.usageList);
    this.appendChild(this.dismissButton);

    this.dismissButton.addEventListener('click', this.dismiss);

    requestAnimationFrame(() => {
      this.classList.add('instructions-dialog--active');
    });
  }

  public disconnectedCallback() {
    this.removeChild(this.titleElement);
    this.removeChild(this.usageList);
    this.removeChild(this.dismissButton);
    this.dismissButton.removeEventListener('click', this.dismiss);

    this.classList.remove('instructions-dialog--active');
  }

  public close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  public canClose() {
    return true;
  }

  private dismiss() {
    this.remove();
  }

  private createUsageList() {
    const list = document.createElement('ul');

    const usage = [
      'Click on the free space in the canvas to start creating vertices',
      'Click on the initial vertex to close the path into a polygon',
      'Alternatively, you may press Escape to cancel adding a new path',
      'Click and drag the vertex to move it',
      'Double click on an edge to add a vertex in the middle of it',
      'Double click on a vertex to remove it',
      'Pressing Ctrl allows dragging a whole polygon',
      "Shift + click to clip the polygons using Sutherland-Hodgman's algorithm",
      'Save allows you to export all the polygons on the screen',
      'Load allows you to restore the polygons'
    ];

    usage
      .map(usageItemText => this.createUsageListItem(usageItemText))
      .forEach(usageListItem => list.appendChild(usageListItem));

    return list;
  }

  private createUsageListItem(textContent: string) {
    const item = document.createElement('li');
    item.textContent = textContent;

    return item;
  }
}

window.customElements.define('app-instructions-dialog', InstructionsDialog);
