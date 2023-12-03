import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-c707cce4.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2dbb56a1.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",em:"em",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Schema intro"}),`
`,e.jsx(n.h1,{id:"schema-introduction",children:"Schema introduction"}),`
`,e.jsxs(n.p,{children:[`The wizard framework is based upon a schema, frequently referred to as "the schema" in the docs 🤓. The schema features is a description of the wizard, and contains information about what kind of input fields to show, when to show them and also contains logical checks and branching. In the documentation we'll refer to the things that constitutes the schema as `,e.jsx(n.em,{children:"nodes"}),"."]}),`
`,e.jsx(n.h2,{id:"prior-art",children:"Prior art"}),`
`,e.jsx(n.p,{children:"Everything is based on something. When designing the schema and mental models upon which the wizard framework is built, we've had the traditional text-based role playing games in mind. More specificly the way you interact with it through anwering questions that determines how the game progress."}),`
`,e.jsx(n.h2,{id:"the-algorithm",children:"The algorithm"}),`
`,e.jsx(n.p,{children:"The algorithm is based around the idea that the branches and fields contains rules that dictates whether or not the path is active or not. The rules are built as checks against the data provided by the user, and when a part of the tree (the wizard) is deemed not active, it's removed and will no longer be visible to the user – unless the user input changes in such a way that it should be visible. An example is shown below."}),`
`,e.jsx(n.h3,{id:"an-example-schema",children:"An example schema"}),`
`,e.jsx(n.p,{children:"The schema below contains a yes/no question, and a branch with one branch where the children should just show if the user said yes to the first question."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  meta: {
    title: 'My wizard',
    name: 'wizard',
    footer: 'Your footer here!'
  },
  schema: [
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
}
`})}),`
`,e.jsxs(n.p,{children:["Given that the user said yes, the property ",e.jsx(n.code,{children:"continue"})," is ",e.jsx(n.em,{children:"true"})," and the branch test will evaluate to true. The schema will be reduced to the following before it's rendered:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`[
  {
    id: "intoPage",
    type: "Page",
    lead: "The intro page is not very interesting.",
    children: [
      {
        type: "Radio",
        property: "continue",
        heading: "Do you want to continue?",
        options: [
          {
            type: "Answer",
            text: "Yes",
            value: true,
          },
          {
            type: "Answer",
            text: "No",
            value: false,
          },
        ],
      },
      {
        property: "living.gone",
        type: "Number",
        heading: "For how many hours do you leave your pets each day?",
        placeholder: "Hours",
        minimum: 0,
        maximum: 24,
        step: 1,
      },
    ],
  },
];
`})}),`
`,e.jsxs(n.p,{children:["As you can see, the ",e.jsx(n.em,{children:"Branch"})," node itself is removed as it has no mission past the point where the test is run. The reducer inside the framework works in this way in order to hide the complexity involved in determining the nodes to show. This greatly reduces the complexity when presenting the wizard and makes it possible to test it in isolation."]}),`
`,e.jsx(n.p,{children:"A more in depth explanation of the different properties, node types and such can be found in the following chapters."}),`
`,e.jsx(n.h3,{id:"allowed-root-types",children:"Allowed root types"}),`
`,e.jsxs(n.p,{children:["On the top level of the schema, only ",e.jsx(n.code,{children:"Page"}),", ",e.jsx(n.code,{children:"Result"})," and ",e.jsx(n.code,{children:"Error"})," nodes are allowed. In addition you are allowed to use ",e.jsx(n.code,{children:"Branch"})," nodes as long as the children of the branches are of one of these types."]}),`
`,e.jsx(n.p,{children:"An example of a schema"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  meta: {
    title: 'My wizard',
    name: 'wizard',
    footer: 'Your footer here!'
  },
  schema: [
    {
      id: 'intoPage',
      type: 'Page',
      lead: 'The intro page is not very interesting.',
      children: [
        //...
      ]
    },

    // This 👇 is OK because the child node of the branch(es) are Page, Result or Error nodes
    {
      id: 'mybranch',
      type: 'Branch',
      branches: [
        {
          test: {
            field: 'firstname',
            operator: 'eq',
            value: 'Torgeir'
          },
          children: [
            {
              id: 'torgeirOnlyPage',
              type: 'Page',
              lead: 'This page is just for Torgeir',
              children: [
                //...
              ]
            }
          ]
        }
      ]
    }
  ]
}
`})})]})}function w(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{w as default};
