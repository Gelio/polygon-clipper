import 'index.scss';
import 'normalize.css';

import '@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce';

import { Application } from 'Application';

window.addEventListener('load', bootstrap, false);

function bootstrap(): void {
  const canvasId = 'main-canvas';
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    throw new Error(`Canvas with id ${canvasId} cannot be found`);
  }

  const application = new Application(<HTMLCanvasElement>canvas);
  application.init();
}
