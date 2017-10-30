import { AppEvent } from 'events/AppEvent';
import { EventQueue } from 'events/EventQueue';

type EventListener = (event: AppEvent) => void;

export class EventAggregator {
  private readonly listenerMap = new Map<string, EventListener[]>();
  private readonly eventQueue = new EventQueue();
  private isDispatching = false;

  public addEventListener(eventType: string, listener: EventListener) {
    const eventListeners = this.getEventListeners(eventType);

    if (eventListeners.indexOf(listener) === -1) {
      eventListeners.push(listener);
    }

    this.listenerMap.set(eventType, eventListeners);
  }

  public removeEventListener(eventType: string, listener: EventListener) {
    const eventListeners = this.getEventListeners(eventType);
    const listenerIndex = eventListeners.indexOf(listener);

    if (listenerIndex !== -1) {
      eventListeners.splice(listenerIndex, 1);
    }

    this.listenerMap.set(eventType, eventListeners);
  }

  public dispatchEvent(event: AppEvent) {
    this.eventQueue.enqueue(event);

    if (!this.isDispatching) {
      this.dispatchEventFromQueue();
    }
  }

  private dispatchEventFromQueue() {
    this.isDispatching = true;

    const event = this.eventQueue.dequeue();
    const eventListeners = this.getEventListeners(event.eventType);
    eventListeners.forEach(listener => listener(event));

    if (this.eventQueue.isEmpty()) {
      this.isDispatching = false;
    } else {
      this.dispatchEventFromQueue();
    }
  }

  private getEventListeners(eventType: string) {
    return this.listenerMap.get(eventType) || [];
  }
}
