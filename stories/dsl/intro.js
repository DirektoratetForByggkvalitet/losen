import React from 'react';

import { H1, H2, H3 } from '../../src/web/primitives/Heading';

export default function DslIntro() {
  return (
    <div>
      <H1>DSL</H1>
      <p>
        The wizard framework use a Domain Specific Language, a DSL for short, to express logical
        expressions in the schema. The expressions is parsed and translated to functions that can
        be run on the user data.
      </p>
      <p>
        This gives a rich language for describing dependencies in data, validation rules and
        preriqusites that must be met in order for something to show, hide etc.
      </p>
      <p>
        The expressions consist of a few types that is used for composing other expressions:
        <code>or</code> and <code>and</code>. These can be used to combine simple (and complex)
        expressions in order to express more complex expressions. An example:
      </p>

      <H2>Examples</H2>
      <p>Below is a few examples to show how the expressions are constructed.</p>

      <H3>Two simple expressions</H3>
      <p>
        <code>person.age</code> is greater than or equal to 20 <strong>and </strong>
        <code>person.sex</code> is required to have a value.
      </p>

      <pre>{`
{
  type: 'and',
  clauses: [
    { field: 'person.age', operator: 'gte', value: 20 },
    { field: 'person.sex', operator: 'required' }
  ]
}
`}</pre>

      <H3>Nested complex expression</H3>
      <p>
        (<code>person.age</code> is greater than or equal to 25 <strong>and </strong>
        <code>person.sex</code> is required to have a value) <strong>or </strong>
        <code>person.age</code> is less than 20.
      </p>

      <pre>{`
{
  type: 'or',
  clauses: [
    {
      type: 'and',
      clauses: [
        { field: 'person.age', operator: 'gte', value: 25 },
        { field: 'person.sex', operator: 'required' }
      ]
    },
    { field: 'person.age', operator: 'lt', value: 20 }
  ]
}
`}</pre>
    </div>
  );
}
