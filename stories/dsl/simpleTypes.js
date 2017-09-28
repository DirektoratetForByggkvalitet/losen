import React from 'react';

import { H1, H2, H3 } from '../../src/web/primitives/Heading';

export default function DslSimpleTypes() {
  return (
    <div>
      <H1>Simple types in the DSL</H1>
      <p>
        The simple types is the comparisons, existence checks and negations that give power
        to the expression. Each of the types is described in detail below.
      </p>

      <H2>Field reference as expression value</H2>
      <p>
        The comparisons can reference fields for the value to compara agains by using a "field
        reference". The field reference is an object with a field property, like this:
      </p>

      <H3>Example of comparing against a scalar value</H3>
      <pre>{'{ field: \'some.field\', operator: \'gt\', value: 4 }'}</pre>

      <H3>Example of comparing agains another field</H3>
      <pre>{`{
  field: 'some.field',
  operator: 'gt',
  value: {
    field: 'some.other.field'
  }
}`}</pre>

      <H2>gt</H2>
      <p>Expression describing a greater than comparison.</p>
      <pre>{'{ field: \'some.field\', operartor: \'gt\', value: 3 }'}</pre>

      <H2>lt</H2>
      <p>Expression describing a less than comparison.</p>
      <pre>{'{ field: \'some.field\', operartor: \'lt\', value: 3 }'}</pre>

      <H2>gte</H2>
      <p>Expression describing a greater than or equal comparison.</p>
      <pre>{'{ field: \'some.field\', operartor: \'gte\', value: 3 }'}</pre>

      <H2>lte</H2>
      <p>Expression describing a less than or equal comparison.</p>
      <pre>{'{ field: \'some.field\', operartor: \'lte\', value: 3 }'}</pre>

      <H2>eq</H2>
      <p>Expression describing a equality check.</p>
      <pre>{'{ field: \'some.field\', operartor: \'eq\', value: \'apekatt\' }'}</pre>

      <H2>between</H2>
      <p>Expression describing a range check, the value being between two values.</p>
      <pre>{'{ field: \'some.field\', operartor: \'between\', value: [3, 6] }'}</pre>

      <H2>neq</H2>
      <p>Expression describing a not equal comparison.</p>
      <pre>{'{ field: \'some.field\', operartor: \'eq\', value: true }'}</pre>

      <H2>required</H2>
      <p>Expression describing a required value, meaning that the field exists.</p>
      <pre>{'{ field: \'some.field\', operartor: \'required\' }'}</pre>

      <H2>not</H2>
      <p>Expression describing a check for a property that must have a falsy value.</p>
      <pre>{'{ field: \'some.field\', operartor: \'not\' }'}</pre>
    </div>
  );
}
