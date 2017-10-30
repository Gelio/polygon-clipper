import { HorizontalLineCondition } from 'conditions/HorizontalLineCondition';
import { LineCondition } from 'conditions/LineCondition';
import { LineConditionElement } from 'ui/components/line-conditions/LineConditionElement';
import { LineConditionElementDependencies } from 'ui/components/line-conditions/LineConditionElementDependencies';

export class HorizontalLineConditionElement extends LineConditionElement {
  constructor(dependencies: LineConditionElementDependencies) {
    super(dependencies);

    this.button.textContent = 'Horizontal';
  }

  protected getLineConditionConstructor() {
    return HorizontalLineCondition;
  }

  protected createNewCondition(): LineCondition | null {
    if (!this.selectedTarget.line || !this.selectedTarget.polygon) {
      throw new Error('Target not selected');
    }

    return new HorizontalLineCondition(this.selectedTarget.line, this.selectedTarget.polygon);
  }
}

customElements.define('horizontal-line-condition', HorizontalLineConditionElement);
