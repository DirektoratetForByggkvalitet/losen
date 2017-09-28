import React from 'react';

import { H1, H2 } from '../../src/web/primitives/Heading';

export default function DslSimpleTypes() {
  return (
    <div>
      <H1>Simple types in the DSL</H1>
      <p>
        The simple types is the comparisons, existence checks and negations that give power
        to the expression. Each of the types is described in detail below.
      </p>

      <H2>gt</H2>
      <p>Expression describing a greater than</p>

      <H2>lt</H2>
      <p>Expression describing a less than</p>

      <H2>gte</H2>
      <p>Expression describing a greater than or equal</p>

      <H2>lte</H2>
      <p>Expression describing a less than or equal</p>

      <H2>eq</H2>
      <p>Expression describing a equal</p>

      <H2>between</H2>
      <p>Expression describing a between two values</p>

      <H2>neq</H2>
      <p>Expression describing a not equal</p>

      <H2>required</H2>
      <p>Expression describing a required, meaning that the field exists</p>
    </div>
  );
}
