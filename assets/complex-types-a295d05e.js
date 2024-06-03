import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-1dbb4c1e.js";import"./Table-92ceadca.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-664b5535.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function s(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Logical expressions/Complex expressions"}),`
`,e.jsx(n.h1,{id:"dcomplex-types-in-the-dsl",children:"DComplex types in the DSL"}),`
`,e.jsxs(n.p,{children:[`In order to be able to compose expressions in a meaningful way, the DSL features two
complex expression types: `,e.jsx("code",{children:"and"})," and ",e.jsx("code",{children:"or"}),"."]}),`
`,e.jsx(n.h2,{id:"and",children:"and"}),`
`,e.jsx(n.p,{children:"Logical and. All clauses must yield a truthy value."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "and",
  "clauses": [
    { "field": "myField", "operator": "gt", "value": { "field": "yourField" } },
    { "field": "myField", "operator": "ls", "value": 1000 }
  ]
}
`})}),`
`,e.jsx(n.h2,{id:"or",children:"or"}),`
`,e.jsx(n.p,{children:"Logical or. At least one of the clauses must yield a truthy value."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "or",
  "clauses": [
    { "field": "myField", "operator": "eq", "value": "🦄 " },
    { "field": "myField", "operator": "eq", "value": "🌈 " }
  ]
}
`})})]})}function v(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(s,o)})):s(o)}export{v as default};
