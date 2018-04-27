import React from 'react';

import { H1, H2 } from '../../../src/web/primitives/Heading';

export default function References() {
  return (
    <div>
      <H1>References</H1>
      <p>
        When you need to show something, for instance an Error or a Result page, in more 
        than one place you want to use the <code>Reference</code> instead of manually
        duplicating the node in your schema. It will be duplicated for you, and it makes
        it a lot easier to manage your schema over time.
      </p>

      <H2>Branching anatomy</H2>
      <p>
        A <em>Reference</em> node is not represented in the user interface, and the
        reference is invisible both to losen and the end user – as long as the referenced 
        node exists in the schema, it's just as if you duplicated the node in your schema.
        It looks like this:
      </p>

      <pre>{`{
  type: 'Reference',
  nodeId: 'idOfTheNodeWeWantToReference
}`}</pre>

      <H2>Complete example</H2>
      <pre>{`[
  {
    "type": "Page",
    "id": "start"
    "children": [
      { "type": "Reference", "nodeId": "coolError" }
    ]
  },
  {
    "type": "Page",
    "id": "otherPage",
    "children": [
      {
        "id": "coolError",
        "type": "Error",
        "warning": true,
        "children": [
          {
            "id": "coolError.text",
            "type": "Text",
            "text":
              "😎😎😎"
          }
        ]
      }
    ]
  }
]`}</pre>

      <H2>Gotchas</H2>
      <p>
        Beware of referencing something inside itself. It will create an infinite loop,
        and there will be 🐉🐲🔥.
      </p>
    </div>
  );
}
