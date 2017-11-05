import { Service } from 'services/Service';

import { EventAggregator } from 'events/EventAggregator';
import { LoadingFinishedEvent } from 'events/ui/LoadingFinishedEvent';
import { LoadingStartedEvent } from 'events/ui/LoadingStartedEvent';

import { DialogOverlay } from 'ui/components/dialog-overlay/DialogOverlay';
import { LoadingBarDialog } from 'ui/components/loading-bar-dialog/LoadingBarDialog';

import { configuration } from 'configuration';

interface LoadingUIServiceDependencies {
  eventAggregator: EventAggregator;
  dialogOverlay: DialogOverlay;
}

export class LoadingUIService implements Service {
  private readonly eventAggregator: EventAggregator;
  private readonly dialogOverlay: DialogOverlay;
  private readonly loadingBarDialog: LoadingBarDialog;

  private loadedAssetsCount = 0;
  private totalAssetsToLoadCount = 0;

  private hideLoadingBarTimeoutId: number | null = null;

  constructor(dependencies: LoadingUIServiceDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.dialogOverlay = dependencies.dialogOverlay;

    this.loadingBarDialog = new LoadingBarDialog();

    this.onLoadingStartedEvent = this.onLoadingStartedEvent.bind(this);
    this.onLoadingFinishedEvent = this.onLoadingFinishedEvent.bind(this);
    this.hideLoadingBar = this.hideLoadingBar.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(
      LoadingFinishedEvent.eventType,
      this.onLoadingFinishedEvent
    );
    this.eventAggregator.addEventListener(
      LoadingStartedEvent.eventType,
      this.onLoadingStartedEvent
    );
  }

  public destroy() {
    this.eventAggregator.removeEventListener(
      LoadingFinishedEvent.eventType,
      this.onLoadingFinishedEvent
    );
    this.eventAggregator.removeEventListener(
      LoadingStartedEvent.eventType,
      this.onLoadingStartedEvent
    );
    this.hideLoadingBar();
  }

  private onLoadingStartedEvent() {
    if (this.totalAssetsToLoadCount === 0) {
      this.showLoadingBar();
    }

    this.totalAssetsToLoadCount += 1;
    this.updateLoadingBar();
    this.abortDelayedHideLoadingBar();
  }

  private onLoadingFinishedEvent() {
    this.loadedAssetsCount += 1;
    this.updateLoadingBar();

    if (this.loadedAssetsCount === this.totalAssetsToLoadCount) {
      this.delayedHideLoadingBar();
    }
  }

  private reset() {
    this.loadedAssetsCount = 0;
    this.totalAssetsToLoadCount = 0;
  }

  private showLoadingBar() {
    this.dialogOverlay.showDialog(this.loadingBarDialog);
  }

  private delayedHideLoadingBar() {
    this.hideLoadingBarTimeoutId = setTimeout(
      this.hideLoadingBar,
      configuration.loadingBarHideDelay
    );
  }

  private abortDelayedHideLoadingBar() {
    if (this.hideLoadingBarTimeoutId) {
      clearTimeout(this.hideLoadingBarTimeoutId);
    }
  }

  private hideLoadingBar() {
    this.reset();
    this.loadingBarDialog.close();
    this.hideLoadingBarTimeoutId = null;
  }

  private updateLoadingBar() {
    this.loadingBarDialog.loadedAssetsCount = this.loadedAssetsCount.toFixed(0);
    this.loadingBarDialog.totalAssetsCount = this.totalAssetsToLoadCount.toFixed(0);
  }
}
