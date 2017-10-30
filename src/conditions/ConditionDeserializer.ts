import { Line } from 'common/Line';
import { Polygon } from 'common/Polygon';
import { LineCondition, SerializableLineCondition } from 'conditions/LineCondition';

import { FixedLengthLineCondition } from 'conditions/FixedLengthLineCondition';
import { HorizontalLineCondition } from 'conditions/HorizontalLineCondition';
import { VerticalLineCondition } from 'conditions/VerticalLineCondition';

export class ConditionDeserializer {
  public deserializeCondition(
    polygon: Polygon,
    serializableLineCondition: SerializableLineCondition
  ): LineCondition {
    const p1 = polygon.getVertex(serializableLineCondition.p1Index);
    const p2 = polygon.getVertex(serializableLineCondition.p2Index);
    const line = new Line(p1, p2);

    switch (serializableLineCondition.name) {
      case FixedLengthLineCondition.name:
        return new FixedLengthLineCondition(
          line,
          polygon,
          // tslint:disable-next-line no-string-literal
          <number>serializableLineCondition['fixedLength']
        );

      case HorizontalLineCondition.name:
        return new HorizontalLineCondition(line, polygon);

      case VerticalLineCondition.name:
        return new VerticalLineCondition(line, polygon);

      default:
        throw new Error('Invalid line condition name');
    }
  }
}
