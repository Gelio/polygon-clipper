export interface AppEvent {
  // tslint:disable-next-line no-any
  readonly payload: any;
  readonly eventType: string;
  handled: boolean;
}
