export interface DialogBox extends HTMLElement {
  canClose(): boolean;
  close(): void;
}
