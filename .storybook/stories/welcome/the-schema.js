import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function SchemaIntro() {
  return (
    <div>
      <H1>Schema introduction</H1>
      <p>
        The wizard framework is based upon a schema, frequently referred to as "the schema" in the docs 🤓. The schema
        features is a description of the wizard, and contains information about what kind of input fields to show, when
        to show them and also contains logical checks and branching. In the documentation we'll refer to the things that 
        constitutes the schema as <em>nodes</em>.

      </p>

      <H2>Prior art</H2>
      <p>
        Everything is based on something. When designing the schema and mental models upon which the wizard framework is
        built, we've had the traditional text-based role playing games in mind. More specificly the way you interact with
        it through anwering questions that determines how the game progress.
      </p>

      <H2>The algorithm</H2>
      <p>
        The algorithm is based around the idea that the branches and fields contains rules that dictates whether or not
        the path is active or not. The rules are built as checks against the data provided by the user, and when a part of
        the tree (the wizard) is deemed not active, it's removed and will no longer be visible to the user – unless the
        user input changes in such a way that it should be visible. An example is shown below.
      </p>
      <div>
        <H3>An example schema</H3>
        <p>
          The schema below contains a yes/no question, and a branch with one branch where the children should just show
          if the user said yes to the first question.
        </p>

        <pre>{`{
  "meta": {
    "title": "My wizard",
    "name": "wizard",
    "footer": "Your footer here!"
  },
  "schema": [
    {
      id: 'intoPage',
      type: 'Page',
      lead: 'The intro page is not very interesting.',
      children: [
        {
          type: 'Radio',
          property: 'continue',
          heading: 'Do you want to continue?',
          options: [
            {
              type: 'Answer',
              text: 'Yes',
              value: true
            },
            {
              type: 'Answer',
              text: 'No',
              value: false
            }
          ]
        }
        {
          type: 'Branch',
          branches: [
            {
              test: { field: 'continue', operator: 'eq', value: true },
              children: [
                {
                  {
                    property: 'living.gone',
                    type: 'Number',
                    heading: 'For how many hours do you leave your pets each day?',
                    placeholder: 'Hours',
                    minimum: 0,
                    maximum: 24,
                    step: 1,
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}`}</pre>
      </div>

      <p>
        Given that the user said yes, the property <code>continue</code> is <em>true</em> and
        the branch test will evaluate to true. The schema will be reduced to the following
        before it's rendered:
      </p>

      <pre>{`[
  {
    id: 'intoPage',
    type: 'Page',
    lead: 'The intro page is not very interesting.',
    children: [
      {
        type: 'Radio',
        property: 'continue',
        heading: 'Do you want to continue?',
        options: [
          {
            type: 'Answer',
            text: 'Yes',
            value: true
          },
          {
            type: 'Answer',
            text: 'No',
            value: false
          }
        ]
      },
      {
        property: 'living.gone',
        type: 'Number',
        heading: 'For how many hours do you leave your pets each day?',
        placeholder: 'Hours',
        minimum: 0,
        maximum: 24,
        step: 1,
      }
    ]
  }
]`}</pre>

      <p>
        As you can see, the <em>Branch</em> node itself is removed as it has no mission past
        the point where the test is run. The reducer inside the framework works in this way
        in order to hide the complexity involved in determining the nodes to show. This greatly
        reduces the complexity when presenting the wizard and makes it possible to test it in
        isolation.
      </p>

      <p>
        A more in depth explanation of the different properties, node types and such can be
        found in the following chapters.
      </p>

      <H3>Allowed root types</H3>
      <p>
        On the top level of the schema, only <code>Page</code>, <code>Result</code> and <code>Error</code> nodes are 
        allowed. In addition you are allowed to use <code>Branch</code> nodes as long as the children of the branches
        are of one of these types.
      </p>

      <p>An example of a schema </p>

      <pre>{`{
  "meta": {
    "title": "My wizard",
    "name": "wizard",
    "footer": "Your footer here!"
  },
  "schema": [
    {
      id: 'intoPage',
      type: 'Page',
      lead: 'The intro page is not very interesting.',
      children: [
        ...
      ]
    },

    // This 👇 is OK because the child node of the branch(es) are Page, Result or Error nodes
    {
      "id": "mybranch",
      "type": "Branch",
      "branches": [
        {
          "test": {
            "field": "firstname",
            "operator": "eq",
            "value": "Torgeir"
          },
          "children": [
            {
              id: 'torgeirOnlyPage',
              type: 'Page',
              lead: 'This page is just for Torgeir',
              children: [
                ...
              ]
            }
          ]
        }
      ]
    }
  ]
}`}</pre>
    </div>

  );
}
