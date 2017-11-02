import 'ui/components/instructions/InstructionsDialog.scss';

export class InstructionsDialog extends HTMLElement {
  private overlay: HTMLElement;
  private dialogContainer: HTMLDivElement;
  private dismissButton: HTMLButtonElement;

  constructor() {
    super();

    this.className = 'instructions-dialog-wrapper';

    this.overlay = document.createElement('div');
    this.overlay.className = 'instructions-dialog__overlay';

    this.dialogContainer = document.createElement('div');
    this.dialogContainer.className = 'instructions-dialog';

    const title = document.createElement('h1');
    title.textContent = 'Instructions';
    title.className = 'instructions-dialog__title';
    this.dialogContainer.appendChild(title);

    this.dialogContainer.appendChild(this.createUsageList());

    this.dismissButton = document.createElement('button');
    this.dismissButton.textContent = 'Dismiss';
    this.dismissButton.className = 'instructions-dialog__dismiss-button';

    this.dialogContainer.appendChild(this.dismissButton);

    this.dismiss = this.dismiss.bind(this);
  }

  public connectedCallback() {
    this.appendChild(this.overlay);
    this.appendChild(this.dialogContainer);
    this.dismissButton.addEventListener('click', this.dismiss);
    this.overlay.addEventListener('click', this.dismiss);

    requestAnimationFrame(() => {
      this.overlay.classList.add('instructions-dialog__overlay--active');
      this.dialogContainer.classList.add('instructions-dialog--active');
    });
  }

  public disconnectedCallback() {
    this.removeChild(this.overlay);
    this.removeChild(this.dialogContainer);
    this.dismissButton.removeEventListener('click', this.dismiss);
    this.overlay.removeEventListener('click', this.dismiss);

    this.overlay.classList.remove('instructions-dialog__overlay--active');
    this.dialogContainer.classList.remove('instructions-dialog--active');
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
