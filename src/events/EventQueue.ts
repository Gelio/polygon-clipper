import { AppEvent } from 'events/AppEvent';

export class EventQueue {
  private _queue: AppEvent[] = [];

  public enqueue(event: AppEvent) {
    this._queue.push(event);
  }

  public dequeue(): AppEvent {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this._queue.splice(0, 1)[0];
  }

  public getLength() {
    return this._queue.length;
  }

  public isEmpty() {
    return this.getLength() === 0;
  }
}
