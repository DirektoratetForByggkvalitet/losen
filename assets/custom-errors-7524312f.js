import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as t}from"./index-d7a79eca.js";import"./Table-92ceadca.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function o(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Logical expressions/Custom errors"}),`
`,e.jsx(r.h1,{id:"custom-errors",children:"Custom errors"}),`
`,e.jsxs(r.p,{children:[`When showing more complex errors to the user, you might want to add custom errors that
is more descriptive or less technical to make the wizard easier to use. This can be done
by adding a `,e.jsx("code",{children:"errorMessage"})," property to the DSL expression."]}),`
`,e.jsxs(r.p,{children:["In the case of a nested, complex expression (",e.jsx("code",{children:"and/or"}),`), the outmost error will
be returned in order to have a way of overriding a tree of errors. In other words, if you
set an error message on the and-statement, nested errors will be omitted in the output.`]}),`
`,e.jsxs(r.p,{children:["If you have an ",e.jsx("code",{children:"and"})," or ",e.jsx("code",{children:"or"}),` statement without
the `,e.jsx("code",{children:"errorMessage"})," property, nested properties will be output as usual."]}),`
`,e.jsx(r.h2,{id:"error-format",children:"Error format"}),`
`,e.jsxs(r.p,{children:["The error is formatted as an array containing strings, numbers and field references (",e.jsx(r.code,{children:"{ field: 'theField' }"}),`). The heading for the referenced field
will be pulled from the schema when the error is transformed to a string.`]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"simple-expression-example",children:"Simple expression example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-json",children:`{
  "field": "myField",
  "operator": "gt",
  "value": { "field": "yourField" },
  "errorMessage": [
    "👮 :",
    { "field": "myField" },
    "ain't as big as",
    { "field": "yourField" },
    "😭 "
  ]
}
`})}),`
`,e.jsx(r.h3,{id:"complex-expression-example",children:"Complex expression example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-json",children:`{
  "type": "or",
  "clauses": [
    { "field": "myField", "operator": "eq", "value": "🦄 " },
    { "field": "myField", "operator": "eq", "value": "🌈 " }
  ],
  "errorMessage": ["Rainbows of unicorns, man 👮 "]
}
`})})]})}function w(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{w as default};
