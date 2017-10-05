import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function SchemaIntro() {
  return (
    <div>
      <H1>Schema introduction</H1>
      <p>
        The wizard framework is based upon a schema, frequently referred to as "the schema" in the docs 🤓. The schema
        features is a description of the wizard, and contains information about what kind of input fields to show, when
        to show them and also contains logical checks and branching.
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
        suggestedAnswer: [
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
]`}</pre>
      </div>

      <p>
        Given that the user said yes, the property <code>continue</code> is
        <em>true</em> and the branch test will evaluate to true. The schema will be reduced
        to the following before it's rendered:
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
        suggestedAnswer: [
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
    </div>
  );
}
