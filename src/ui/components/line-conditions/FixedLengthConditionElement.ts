import { FixedLengthLineCondition } from 'conditions/FixedLengthLineCondition';
import { LineCondition } from 'conditions/LineCondition';
import { LineConditionElement } from 'ui/components/line-conditions/LineConditionElement';
import { LineConditionElementDependencies } from 'ui/components/line-conditions/LineConditionElementDependencies';

export class FixedLengthConditionElement extends LineConditionElement {
  constructor(dependencies: LineConditionElementDependencies) {
    super(dependencies);

    this.button.textContent = 'Fixed length';
  }

  protected getLineConditionConstructor() {
    return FixedLengthLineCondition;
  }

  protected createNewCondition(): LineCondition | null {
    if (!this.selectedTarget.line || !this.selectedTarget.polygon) {
      throw new Error('Target not selected');
    }

    let length = Number.NaN;
    const originalLineLength = this.selectedTarget.line.getLength().toFixed(1);

    while (Number.isNaN(length) || length === 0) {
      const value = prompt('Provide the fixed length', originalLineLength);

      if (!value) {
        return null;
      }

      length = parseFloat(value);
    }

    return new FixedLengthLineCondition(
      this.selectedTarget.line,
      this.selectedTarget.polygon,
      length
    );
  }
}

customElements.define('fixed-length-condition', FixedLengthConditionElement);
