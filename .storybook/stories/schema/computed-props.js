import React from 'react';

import { H1, H2 } from '../../../src/web/primitives/Heading';

export default function ComputedProps() {
  return (
    <div>
      <H1>Computed properties</H1>
      <p>
        When building complex wizards we often end up with a complex logical 
        structure and lots of repeated logical tests. Getting the logic right
        once is a hard job, and keeping track of and updating duplicates of the
        same logic in your schema is both tedious and error prone.
      </p>

      <p>
        Losen features <em>computed props</em> as a solution to this. In essence
        computed props is a way of declaring a logical expression (with the DSL)
        and being able to refer to the current result of that expression from 
        anywhere in your schema just as if it was a value in the state.
      </p>

      <H2>Declaring a computed prop</H2>
      <p>
        A computed prop is declared by putting a key in the <code>computed</code> part 
        of your schema, like this:
      </p>

        <pre>{`{
  "meta": { ... },
  "computed": {
    "oldEnough": { field: 'age', operator: 'gte', value: 21 },
  },
  "schema": { ... }
}`}</pre>

      <H2>Computing the property</H2>
      <p>
        You don't need to compute it yourself. It will be updated whenever data
        is updated in the wizard. This happens when the <code>SET_DATA</code> redux 
        action is reduces, but is not something you need to pay attention to. As 
        long as you build your wizard using the provided logic, it will 
        happen automagically.
      </p>

      <H2>Referring to the computed properties</H2>
      <p>
        When referring to the computed properties, prefix the computed property 
        name with <code>$computed.</code> So if you have a computed prop 
        called <code>oldEnough</code> you refer to it 
        using <code>$computed.oldEnough</code>. Like this:
      </p>

      <pre>{`{
  type: 'Branch',
  branches: [
    {
      test: { operator: 'is', field: '$computed.oldEnough' },
      children: [
        ...
      ]
    },
    ...
  ]
}`}</pre>
    </div>
  );
}
