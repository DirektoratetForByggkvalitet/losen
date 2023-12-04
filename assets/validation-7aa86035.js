import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-d7a79eca.js";import"./Table-92ceadca.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function i(n){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Schema/Validation"}),`
`,e.jsx(t.h1,{id:"schema-validation",children:"Schema validation"}),`
`,e.jsxs(t.p,{children:[`Since the schema has a lot of properties and quite a few things can go awry. To make it
a little easier to find out if the schema is OK, the wizard framework provides a CLI
tool that can be used to validate the schema. The `,e.jsx(t.a,{href:"https://github.com/netliferesearch/losen/tree/master/example",target:"_blank",rel:"nofollow noopener noreferrer",children:"example wizard"}),`
contains an npm script (`,e.jsx("code",{children:"validate"}),`) that validates the schema that comes
with the example. Perform `,e.jsx("code",{children:"npm run validate"})," to check the schema."]}),`
`,e.jsx(t.h2,{id:"validator-cli",children:"Validator CLI"}),`
`,e.jsx(t.p,{children:"In order to use the validator directly, call the bin file installed in"}),`
`,e.jsxs(t.p,{children:[e.jsx("code",{children:"node_modules/.bin"}),` in your project like this when standing in the project
root:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`$ ./node_modules/.bin/losen validate ./path/to/schema.js

🌈 The schema is ok
`})}),`
`,e.jsx(t.p,{children:"or in case something is wrong with your schema, it'll look more like this 👇"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`./node_modules/.bin/losen validate ./src/api/cat.json

🚒 There seems to be something wrong with your schema 👇

schema.3.children.0:
Group is missing the text property
`})})]})}function b(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{b as default};
