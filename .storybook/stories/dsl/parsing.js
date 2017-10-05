import React from 'react';

import { H1, H2 } from '../../../src/web/primitives/Heading';

export default function DslParsing() {
  return (
    <div>
      <H1>DSL parsing</H1>
      <p>
        The logical expressions is parsed as part of the wizard flow logic, but if you want to use
        the dsl parser to build functions from logical expressions you can do so by importing it
        from the <code>losen</code>.
      </p>

      <H2>Parse your own expressions</H2>
      <pre>{`
import { dsl } from 'losen';

const expression = { field: 'some.field', operator: 'gt', value: 4 };
const data = { some: { field: 8 } };

// A function is returned from parse, that can be called with data
// to validate the expression agains.
const func = dsl.parse(expression);

console.log(func(state));
// -> { errors: [], valid: true }
`}</pre>

      <p>If the provided expression is malformed, the parser will throw an expression.</p>
    </div>
  );
}
