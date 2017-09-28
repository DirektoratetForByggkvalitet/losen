import React from 'react';

import { H1, H2 } from '../../src/web/primitives/Heading';

export default function SchemaValidation() {
  return (
    <div>
      <H1>Schema validation</H1>
      <p>
        Since the schema has a lot of properties and quite a few things can go awry. To make it
        a little easier to find out if the schema is OK, the wizard framework provides a CLI
        tool that can be used to validate the schema. The
        <a href="https://github.com/netliferesearch/dibk-wizard-framework/tree/master/example">example wizard</a>
        contains an npm script (<code>validate</code>) that validates the schema that comes with
        the example. Perform <code>npm run validate</code> to check the schema.
      </p>

      <H2>Validator CLI</H2>
      <p>
        In order to use the validator directly, call the bin file installed in <code>node_modules/.bin</code>
        in your project like this when standing in the project root:
      </p>

      <pre>{`
$ ./node_modules/.bin/dibk-wizard-framework validate ./path/to/schema.js
Schema is valid
`}
      </pre>
    </div>
  );
}
