import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-00468680.js";import"./Table-92ceadca.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function i(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Logical expressions/Simple types"}),`
`,e.jsx(n.h1,{id:"simple-types-in-the-dsl",children:"Simple types in the DSL"}),`
`,e.jsx(n.p,{children:`The simple types is the comparisons, existence checks and negations that
give power to the expression. Each of the types is described in detail
below.`}),`
`,e.jsx(n.h2,{id:"field-reference-as-expression-value",children:"Field reference as expression value"}),`
`,e.jsx(n.p,{children:`The comparisons can reference fields for the value to compare agains by
using a "field reference". The field reference is an object with a field
property, like this:`}),`
`,e.jsx(n.h3,{id:"example-of-comparing-against-a-scalar-value",children:"Example of comparing against a scalar value"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "field": "some.field",
  "operator": "gt",
  "value": 4
}
`})}),`
`,e.jsx(n.h3,{id:"example-of-comparing-agains-another-field",children:"Example of comparing agains another field"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "field": "some.field",
  "operator": "gt",
  "value": {
    "field": "some.other.field"
  }
}
`})}),`
`,e.jsx(n.h2,{id:"the-expression-types",children:"The expression types"}),`
`,e.jsx(n.h3,{id:"gt",children:"gt"}),`
`,e.jsx(n.p,{children:"Expression describing a greater than comparison."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "gt", "value": 3 }
`})}),`
`,e.jsx(n.h3,{id:"lt",children:"lt"}),`
`,e.jsx(n.p,{children:"Expression describing a less than comparison."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "lt", "value": 3 }
`})}),`
`,e.jsx(n.h3,{id:"gte",children:"gte"}),`
`,e.jsx(n.p,{children:"Expression describing a greater than or equal comparison."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "gte", "value": 3 }
`})}),`
`,e.jsx(n.h3,{id:"lte",children:"lte"}),`
`,e.jsx(n.p,{children:"Expression describing a less than or equal comparison."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "lte", "value": 3 }
`})}),`
`,e.jsx(n.h3,{id:"eq",children:"eq"}),`
`,e.jsx(n.p,{children:"Expression describing a equality check."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "eq", "value": "apekatt" }
`})}),`
`,e.jsx(n.h3,{id:"neq",children:"neq"}),`
`,e.jsx(n.p,{children:"Expression describing a not equal comparison."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "neq", "value": true }
`})}),`
`,e.jsx(n.h3,{id:"between",children:"between"}),`
`,e.jsx(n.p,{children:"Expression describing a range check, the value being between two values."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{"{ field: 'some.field', operartor: 'between', value: [3, 6] }"}
`})}),`
`,e.jsx(n.h3,{id:"required",children:"required"}),`
`,e.jsx(n.p,{children:"Expression describing a required value, meaning that the field exists."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "required" }
`})}),`
`,e.jsx(n.h3,{id:"not",children:"not"}),`
`,e.jsx(n.p,{children:`Expression describing a check for a property that must have a falsy
value.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "not" }
`})}),`
`,e.jsx(n.h3,{id:"is",children:"is"}),`
`,e.jsx(n.p,{children:"Expression describing a check for a property that must have a truthy value."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "field": "some.field", "operartor": "is" }
`})})]})}function v(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{v as default};
