import { LineCondition } from 'conditions/LineCondition';
import { VerticalLineCondition } from 'conditions/VerticalLineCondition';
import { LineConditionElement } from 'ui/components/line-conditions/LineConditionElement';
import { LineConditionElementDependencies } from 'ui/components/line-conditions/LineConditionElementDependencies';

export class VerticalLineConditionElement extends LineConditionElement {
  constructor(dependencies: LineConditionElementDependencies) {
    super(dependencies);

    this.button.textContent = 'Vertical';
  }

  protected getLineConditionConstructor() {
    return VerticalLineCondition;
  }

  protected createNewCondition(): LineCondition | null {
    if (!this.selectedTarget.line || !this.selectedTarget.polygon) {
      throw new Error('Target not selected');
    }

    return new VerticalLineCondition(this.selectedTarget.line, this.selectedTarget.polygon);
  }
}

customElements.define('vertical-line-condition', VerticalLineConditionElement);
