import { DialogBox } from 'ui/components/DialogBox';

import 'ui/components/instructions/InstructionsDialog.scss';

export class InstructionsDialog extends HTMLElement implements DialogBox {
  private dismissButton: HTMLButtonElement;

  constructor() {
    super();

    this.className = 'instructions-dialog dialog-box';

    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Instructions';
    titleElement.className = 'instructions-dialog__title';
    this.appendChild(titleElement);

    this.createUsageList();

    this.dismissButton = document.createElement('button');
    this.dismissButton.textContent = 'Dismiss';
    this.appendChild(this.dismissButton);

    this.close = this.close.bind(this);
  }

  public connectedCallback() {
    this.dismissButton.addEventListener('click', this.close);
  }

  public disconnectedCallback() {
    this.dismissButton.removeEventListener('click', this.close);
  }

  public close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  public canClose() {
    return true;
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

    this.appendChild(list);
  }

  private createUsageListItem(textContent: string) {
    const item = document.createElement('li');
    item.textContent = textContent;

    return item;
  }
}

window.customElements.define('app-instructions-dialog', InstructionsDialog);
