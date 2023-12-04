import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-d7a79eca.js";import{T as o}from"./Table-92ceadca.js";import{t as d,s as c,a as h}from"./common-ddf7fa8d.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function t(r){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Building blocks/Reference"}),`
`,e.jsx(n.h1,{id:"references",children:"References"}),`
`,e.jsxs(n.p,{children:[`When you need to show something, for instance an Error or a Result page, in more
than one place you want to use the `,e.jsx(n.code,{children:"Reference"}),` instead of manually
duplicating the node in your schema. It will be duplicated for you, and it makes
it a lot easier to manage your schema over time.`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx("em",{children:"Reference"}),` node is not represented in the user interface, and the
reference is invisible both to losen and the end user - as long as the referenced
node exists in the schema, it's just as if you duplicated the node in your schema.
It looks like this:`]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o,{children:[d,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a reference node, this property must be set to `,e.jsx(n.code,{children:"Reference"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"nodeId"})}),e.jsx("td",{children:"The id of the node we're referencing."}),e.jsx("td",{children:"Yes"})]}),c,h]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  // ...,
  "schema": [
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
              "text": "😎😎😎"
            }
          ]
        }
      ]
    }
  ]
}
`})}),`
`,e.jsx(n.h2,{id:"gotchas",children:"Gotchas"}),`
`,e.jsx(n.p,{children:`Beware of referencing something inside itself. It will create an infinite loop,
and there will be 🐉🐲🔥.`})]})}function I(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{I as default};
