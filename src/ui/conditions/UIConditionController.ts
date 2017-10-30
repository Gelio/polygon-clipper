import { ConditionPicker } from 'ui/components/ConditionPicker';
import { UIService } from 'ui/UIService';

import { Line } from 'common/Line';
import { Polygon } from 'common/Polygon';
import { LineCondition } from 'conditions/LineCondition';
import { configuration } from 'configuration';
import { EventAggregator } from 'events/EventAggregator';
import { LineClickEvent } from 'events/LineClickEvent';
import { LEX } from 'LEX';

import { ConditionMatcher } from 'conditions/ConditionMatcher';
import { BidirectionalConditionFixer } from 'conditions/fixers/BidirectionalConditionFixer';

import { RenderEvent } from 'events/RenderEvent';
import { SyncComponentsEvent } from 'events/ui/SyncComponentsEvent';

interface UIConditionControllerDependencies {
  eventAggregator: EventAggregator;
  applicationUIContainer: HTMLElement;
  conditionMatcher: ConditionMatcher;
}

export class UIConditionController implements UIService {
  private readonly eventAggregator: EventAggregator;
  private readonly applicationUIContainer: HTMLElement;
  private readonly conditionMatcher: ConditionMatcher;

  private readonly conditionPicker: ConditionPicker = new ConditionPicker();
  private previousLineClickTimestamp = 0;

  constructor(dependencies: UIConditionControllerDependencies) {
    this.eventAggregator = dependencies.eventAggregator;
    this.applicationUIContainer = dependencies.applicationUIContainer;
    this.conditionMatcher = dependencies.conditionMatcher;

    this.onLineClick = this.onLineClick.bind(this);
    this.onNewCondition = this.onNewCondition.bind(this);
    this.onRemoveCondition = this.onRemoveCondition.bind(this);
  }

  public init() {
    this.eventAggregator.addEventListener(LineClickEvent.eventType, this.onLineClick);
    this.applicationUIContainer.appendChild(this.conditionPicker);
    this.conditionPicker.addEventListener(LEX.NEW_CONDITION_EVENT_NAME, this.onNewCondition);
    this.conditionPicker.addEventListener(LEX.REMOVE_CONDITION_EVENT_NAME, this.onRemoveCondition);
    this.conditionPicker.setAttribute('data-visible', 'false');
  }

  public destroy() {
    this.eventAggregator.removeEventListener(LineClickEvent.eventType, this.onLineClick);
    this.conditionPicker.removeEventListener(LEX.NEW_CONDITION_EVENT_NAME, this.onNewCondition);
    this.conditionPicker.removeEventListener(
      LEX.REMOVE_CONDITION_EVENT_NAME,
      this.onRemoveCondition
    );
    this.applicationUIContainer.removeChild(this.conditionPicker);
  }

  private onLineClick(event: LineClickEvent) {
    if (!(event.payload.path instanceof Polygon)) {
      return;
    }

    const previousClickTimestamp = this.previousLineClickTimestamp;
    const currentTimestamp = Date.now();
    this.previousLineClickTimestamp = currentTimestamp;

    if (currentTimestamp - previousClickTimestamp <= configuration.doubleClickMaxDelay) {
      return this.conditionPicker.setAttribute('data-visible', 'false');
    }

    this.conditionPicker.setAttribute('data-x', event.payload.position.x.toString());
    this.conditionPicker.setAttribute('data-y', event.payload.position.y.toString());
    this.conditionPicker.updateSelectedLine(event.payload.line, event.payload.path);
    this.conditionPicker.setAttribute('data-visible', 'true');
  }

  private onNewCondition(event: CustomEvent) {
    const lineCondition: LineCondition = event.detail;

    try {
      lineCondition.verifyCanBeApplied();
      this.conditionMatcher.verifyConditionAllowed(lineCondition);
    } catch (error) {
      return alert(`Cannot apply condition: ${error.message}`);
    }

    if (!lineCondition.isMet()) {
      this.fixUnmetLineCondition(lineCondition);
    }

    lineCondition.polygon.addLineCondition(lineCondition);
    this.dispatchUpdate();
  }

  private fixUnmetLineCondition(lineCondition: LineCondition) {
    const realPolygon = lineCondition.polygon;
    const p1Index = realPolygon.findPointIndex(lineCondition.line.p1);
    const p2Index = realPolygon.findPointIndex(lineCondition.line.p2);
    const polygonClone = realPolygon.clone();

    const conditionFixer = new BidirectionalConditionFixer(polygonClone, polygonClone.getVertex(p1Index), [
      lineCondition.duplicateForNewLine(
        new Line(polygonClone.getVertex(p1Index), polygonClone.getVertex(p2Index)),
        polygonClone
      )
    ]);
    conditionFixer.tryFix();

    if (!conditionFixer.fixSuccessful) {
      conditionFixer.startingPoint = polygonClone.getVertex(p1Index);
      conditionFixer.reset();
      conditionFixer.tryFix();
    }

    if (!conditionFixer.fixSuccessful) {
      return alert('Cannot add a condition');
    }

    realPolygon.moveTo(polygonClone);
  }

  private onRemoveCondition(event: CustomEvent) {
    const lineCondition: LineCondition = event.detail;

    lineCondition.polygon.removeLineCondition(lineCondition);
    this.dispatchUpdate();
  }

  private dispatchUpdate() {
    this.eventAggregator.dispatchEvent(new RenderEvent());
    this.eventAggregator.dispatchEvent(new SyncComponentsEvent());
    this.conditionPicker.updateButtons();
  }
}
