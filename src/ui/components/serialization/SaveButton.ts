import { LEX } from 'LEX';
import { Stage } from 'Stage';


export interface SaveButtonDependencies {
  stage: Stage;
}

export class SaveButton extends HTMLElement {
  private readonly stage: Stage;
  private readonly buttonElement: HTMLButtonElement;

  constructor(dependencies: SaveButtonDependencies) {
    super();

    this.stage = dependencies.stage;
    this.buttonElement = document.createElement('button');
    this.buttonElement.innerText = 'Save';

    this.onClick = this.onClick.bind(this);
  }

  public connectedCallback() {
    this.buttonElement.addEventListener('click', this.onClick);
    this.appendChild(this.buttonElement);
  }

  public disconnectedCallback() {
    this.removeChild(this.buttonElement);
    this.buttonElement.removeEventListener('click', this.onClick);
  }

  private onClick() {
    const polygonLayer = this.stage.findLayerByName(LEX.POLYGON_LAYER_NAME);
    const serializableObject = polygonLayer.toSerializableObject();

    const serializedData = JSON.stringify(serializableObject);
    console.log(serializedData);
    prompt('Copy the data', serializedData);
  }
}

customElements.define('app-save-button', SaveButton);
