import { EventAggregator } from 'events/EventAggregator';
import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

import { LEX } from 'LEX';
import { Stage } from 'Stage';

import { SerializableLayer } from 'common/Layer';

export interface LoadButtonDependencies {
  eventAggregator: EventAggregator;
  stage: Stage;
}

export class LoadButton extends HTMLElement {
  private readonly eventAggregator: EventAggregator;
  private readonly stage: Stage;
  private readonly buttonElement: HTMLButtonElement;

  constructor(dependencies: LoadButtonDependencies) {
    super();

    this.eventAggregator = dependencies.eventAggregator;
    this.stage = dependencies.stage;
    this.buttonElement = document.createElement('button');
    this.buttonElement.innerText = 'Load';

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
    const serializedData = prompt('Please paste the serialized data');

    if (!serializedData) {
      return;
    }

    const polygonLayer = this.stage.findLayerByName(LEX.POLYGON_LAYER_NAME);

    const currentSerializableLayer = polygonLayer.toSerializableObject();

    try {
      const serializableLayer = <SerializableLayer>JSON.parse(serializedData);
      polygonLayer.fromSerializableObject(<SerializableLayer>serializableLayer);
    } catch (error) {
      polygonLayer.fromSerializableObject(currentSerializableLayer);
      alert('Invalid data');
    }

    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
  }
}

customElements.define('app-load-button', LoadButton);
