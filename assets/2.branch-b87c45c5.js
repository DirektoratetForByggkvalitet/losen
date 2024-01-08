import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-0fa836ad.js";import{T as o}from"./Table-92ceadca.js";import{t as h,s as c,a as d}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bed129da.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function s(t){const n=Object.assign({h1:"h1",p:"p",code:"code",em:"em",h2:"h2",pre:"pre",ul:"ul",li:"li"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Branch"}),`
`,e.jsx(n.h1,{id:"branch",children:"Branch"}),`
`,e.jsxs(n.p,{children:[`In order to build a wizard you often need to be able to branch based on
user input. The `,e.jsx(n.code,{children:"Branch"}),` node gives you this posibility, as
described briefly in `,e.jsx(n.em,{children:"Getting started"}),` section, where the schema
is shown in an example.`]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o,{children:[h,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a branch node, this property must be set to `,e.jsx(n.code,{children:"Branch"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"branches"})}),e.jsxs("td",{children:[e.jsx(n.p,{children:`An array of objects containing a test, and list of nodes to show if the
test passes. Should follow this structure:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`[
    {
        test: {
            field: 'continue',
            operator: 'eq',
            value: true
        },
        children: [ /* nodes to show */ ]
    },
    // ...
]
`})})]}),e.jsx("td",{children:"Yes"})]}),c,d]})]}),`
`,e.jsx(n.h2,{id:"key-concepts",children:"Key concepts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The tests decide which branch will be shown"}),`
`,e.jsx(n.li,{children:"The first branch test that returns a truthy value will be used"}),`
`,e.jsx(n.li,{children:"One or no branches will be selected"}),`
`]}),`
`,e.jsx(n.h2,{id:"branching-anatomy",children:"Branching anatomy"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.em,{children:"Branch"}),` node is not represented in the user interface, and the
user will never have to deal with the branching itself. It's an
implementation detail in the algorithm. As a consequence of this, the
branch has no text, heading or any other properties than
`,e.jsx(n.code,{children:"branches"}),"."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Branch",
  "branches": [
    {
      "test": { "field": "continue", "operator": "eq", "value": true },
      "children": [
        // ...nodes for when the user continues
      ]
    },
    {
      "test": { "field": "continue", "operator": "neq", "value": true },
      "children": [
        // ...nodes for when the user choose not to continue
      ]
    }
  ]
}
`})}),`
`,e.jsx(n.h2,{id:"the-test",children:"The test"}),`
`,e.jsxs(n.p,{children:[`The test is described in a structured format that allows for describing
most logical expressions and that features a way of referencing data
from fields in the schema. This will be referred to as the `,e.jsx(n.code,{children:"DSL"})," - short for Domain Specific Language."]}),`
`,e.jsx(n.p,{children:`The DSL is described in greater detail in a separate section of the
documentation.`})]})}function D(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{D as default};
