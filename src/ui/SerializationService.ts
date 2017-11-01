import { EventAggregator } from 'events/EventAggregator';

import { Stage } from 'Stage';

import { LoadButton } from 'ui/components/serialization/LoadButton';
import { SaveButton } from 'ui/components/serialization/SaveButton';

import { Service } from 'services/Service';

interface SerializationServiceDependencies {
  eventAggregator: EventAggregator;
  stage: Stage;
}

export class SerializationService implements Service {
  private serializationContainer: HTMLElement;
  private eventAggregator: EventAggregator;
  private stage: Stage;

  constructor(dependencies: SerializationServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.stage = dependencies.stage;
  }

  public init() {
    const serializationContainer = document.getElementById('serialization-container');
    if (!serializationContainer) {
      throw new Error('Serialization container not found');
    }

    this.serializationContainer = serializationContainer;

    const loadButton = new LoadButton({
      eventAggregator: this.eventAggregator,
      stage: this.stage
    });
    const saveButton = new SaveButton({
      stage: this.stage
    });

    this.serializationContainer.appendChild(loadButton);
    this.serializationContainer.appendChild(saveButton);
  }

  public destroy() {
    // tslint:disable-next-line
    this.serializationContainer.innerHTML = '';
  }
}
