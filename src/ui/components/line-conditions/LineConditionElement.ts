import { LineCondition } from 'conditions/LineCondition';
import { LEX } from 'LEX';
import {
  LineConditionElementDependencies,
  SelectedTarget
} from 'ui/components/line-conditions/LineConditionElementDependencies';

import 'ui/components/line-conditions/LineConditionElement.scss';

const LINE_CONDITION_ACTIVE_CLASS = 'line-condition--active';

export class LineConditionElement extends HTMLElement {
  protected readonly button: HTMLButtonElement;
  protected readonly selectedTarget: SelectedTarget;

  constructor(dependencies: LineConditionElementDependencies) {
    super();
    this.selectedTarget = dependencies.selectedTarget;

    this.button = document.createElement('button');
    this.button.className = 'line-condition__button';
    this.button.addEventListener('click', this.onButtonClick.bind(this));
  }

  public connectedCallback() {
    this.appendChild(this.button);
  }

  public disconnectedCallback() {
    this.removeChild(this.button);
  }

  public updateButton() {
    const targetConditions = this.getTargetConditions();
    const otherConditions = this.getOtherTargetConditions(targetConditions);

    this.button.disabled = otherConditions.length > 0;

    if (targetConditions.length - otherConditions.length === 1) {
      this.classList.add(LINE_CONDITION_ACTIVE_CLASS);
    } else {
      this.classList.remove(LINE_CONDITION_ACTIVE_CLASS);
    }
  }

  protected createNewCondition(): LineCondition | null {
    throw new Error('Not implemented');
  }

  protected getLineConditionConstructor(): Function {
    throw new Error('Not implemented');
  }

  private onButtonClick(event: MouseEvent) {
    event.stopPropagation();

    const targetConditions = this.getTargetConditions();
    const otherConditions = this.getOtherTargetConditions(targetConditions);

    if (targetConditions.length - otherConditions.length === 1) {
      const condition = targetConditions[0];

      this.dispatchEvent(
        new CustomEvent(LEX.REMOVE_CONDITION_EVENT_NAME, { bubbles: true, detail: condition })
      );
    } else {
      const condition = this.createNewCondition();
      if (!condition) {
        return;
      }

      this.dispatchEvent(
        new CustomEvent(LEX.NEW_CONDITION_EVENT_NAME, { bubbles: true, detail: condition })
      );
    }
  }

  private getTargetConditions() {
    if (!this.selectedTarget.line || !this.selectedTarget.polygon) {
      throw new Error('Target not selected');
    }

    const polygon = this.selectedTarget.polygon;
    const line = this.selectedTarget.line;
    const lineConditions = polygon.getLineConditions();

    return lineConditions.filter(lineCondition => lineCondition.line.equals(line));
  }

  private getOtherTargetConditions(targetConditions: LineCondition[]) {
    const lineConditionConstructor = this.getLineConditionConstructor();

    return targetConditions.filter(
      lineCondition => !(lineCondition instanceof lineConditionConstructor)
    );
  }
}
