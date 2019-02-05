import React from 'react';

import { H1, H2 } from '../../../src/web/primitives/Heading';

export default function DslComplexTypes() {
  return (
    <div>
      <H1>Complex types in the DSL</H1>
      <p>
        In order to be able to compose expressions in a meaningful way, the DSL features two
        complex expression types: <code>and</code> and <code>or</code>.
      </p>

      <H2>and</H2>
      <p>Logical and. All clauses must yield a truthy value.</p>

      <pre>{`{
  type: 'and',
  clauses: [
    { field: 'myField', operator: 'gt', value: { field: 'yourField' } },
    { field: 'myField', operator: 'ls', value: 1000 }
  ]
`}</pre>

      <H2>or</H2>
      <p>Logical or. At least one of the clauses must yield a truthy value.</p>

      <pre>{`{
  type: 'or',
  clauses: [
    { field: 'myField', operator: 'eq', value: '🦄 ' },
    { field: 'myField', operator: 'eq', value: '🌈 ' }
  ]
`}</pre>
    </div>
  );
}
