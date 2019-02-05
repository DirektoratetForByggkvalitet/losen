import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function DslCustomErros() {
  return (
    <div>
      <H1>Custom errors</H1>
      <p>
        When showing more complex errors to the user, you might want to add custom errors that
        is more descriptive or less technical to make the wizard easier to use. This can be done
        by adding a <code>errorMessage</code> property to the DSL expression.
      </p>

      <p>
        In the case of a nested, complex expression (<code>and/or</code>), the outmost error will
        be returned in order to have a way of overriding a tree of errors. In other words, if you
        set an error message on the and-statement, nested errors will be omitted in the output.
      </p>

      <p>
        If you have an <code>and</code> or <code>or</code> statement without
        the <code>errorMessage</code> property, nested properties will be output as usual.
      </p>

      <H2>Error format</H2>
      <p>
        The error is formatted as an array containing strings, numbers and field references (
        <code>{`{ field: 'theField' }`}</code>). The heading for the referenced field will be pulled
        from the schema when the error is transformed to a string.
      </p>

      <H2>Examples</H2>
      <H3>Simple expression example</H3>

      <pre>{`{
  field: 'myField',
  operator: 'gt',
  value: { field: 'yourField' },
  errorMessage: [
    '👮 :',
    { field: 'myField' },
    "ain't as big as",
    { field: 'yourField' },
    '😭 '
  ]
}`}</pre>

      <H3>Complex expression example</H3>

      <pre>{`{
  type: 'or',
  clauses: [
    { field: 'myField', operator: 'eq', value: '🦄 ' },
    { field: 'myField', operator: 'eq', value: '🌈 ' }
  ],
  errorMessage: ['Rainbows of unicorns, man 👮 ']
`}</pre>
    </div>
  );
}
