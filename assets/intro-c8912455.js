import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-00468680.js";import"./Table-92ceadca.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function r(n){const s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",strong:"strong",pre:"pre"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Logical expressions/Intro"}),`
`,e.jsx(s.h1,{id:"logical-expressions",children:"Logical expressions"}),`
`,e.jsx(s.p,{children:`The wizard framework use a Domain Specific Language, a DSL for short, to express logical
expressions in the schema. The expressions is parsed and translated to functions that can
be run on the user data.`}),`
`,e.jsx(s.p,{children:`This gives a rich language for describing dependencies in data, validation rules and
preriqusites that must be met in order for something to show, hide etc.`}),`
`,e.jsx(s.p,{children:"The expressions consist of a few types that is used for composing other expressions:"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"or"})," and ",e.jsx(s.code,{children:"and"}),". These can be used to combine simple (and complex) expressions in order to express more complex expressions. An example:"]}),`
`,e.jsx(s.h2,{id:"examples-below-is-a-few-examples-to-show-how-the-expressions-are-constructed",children:"Examples Below is a few examples to show how the expressions are constructed."}),`
`,e.jsx(s.h3,{id:"two-simple-expressions",children:"Two simple expressions"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"person.age"})," is greater than or equal to 20 ",e.jsx(s.strong,{children:"and"})," ",e.jsx(s.code,{children:"person.sex"})," is required to have a value."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-json",children:`{
  "type": "and",
  "clauses": [
    { "field": "person.age", "operator": "gte", "value": 20 },
    { "field": "person.sex", "operator": "required" }
  ]
}
`})}),`
`,e.jsx(s.h3,{id:"nested-complex-expression",children:"Nested complex expression"}),`
`,e.jsxs(s.p,{children:["(",e.jsx(s.code,{children:"person.age"})," is greater than or equal to 25 ",e.jsx(s.strong,{children:"and"})," ",e.jsx(s.code,{children:"person.sex"})," is required to have a value) ",e.jsx(s.strong,{children:"or"})," ",e.jsx(s.code,{children:"person.age"})," is less than 20."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-json",children:`{
  "type": "or",
  "clauses": [
    {
      "type": "and",
      "clauses": [
        { "field": "person.age", "operator": "gte", "value": 25 },
        { "field": "person.sex", "operator": "required" }
      ]
    },
    { "field": "person.age", "operator": "lt", "value": 20 }
  ]
}
`})})]})}function b(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{b as default};
