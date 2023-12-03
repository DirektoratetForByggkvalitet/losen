import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-c707cce4.js";import{T as o}from"./Table-70bf50a1.js";import{t as d,i as l,b as c,c as h}from"./common-ddf7fa8d.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2dbb56a1.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-a5bba7af.js";import"./styles-36622289.js";function i(t){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Building blocks/Select"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:[`Dropdown list. Just like Radio, but with a select element and no support for
image/descriptive text. `,e.jsx(n.code,{children:"Answer"})," nodes for a select will not show the ",e.jsx(n.code,{children:"text"}),", so make sure to put the text you need in the Answer heading."]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o,{children:[d,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a select, this property must be set to `,e.jsx(n.code,{children:"Select"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the select input"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["An array of ",e.jsx(n.a,{href:"?path=?path=/docs/building-blocks-answer--docs",children:e.jsx(n.code,{children:"Answer"})}),`
nodes. Options that the user can select.`]})}),e.jsx("td",{children:"Yes"})]}),l,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The text to follow the heading for this input field."}),e.jsx("td",{})]}),c,h]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "id": "living.floor",
  "property": "living.floor",
  "type": "Select",
  "heading": "I hvilken etasje bor du?",
  "text": "Hvis du bor veldig høyt oppe kan katten falle ned og dø.",
  "hide": {
    "type": "or",
    "clauses": [
      {
        "field": "living.type",
        "operator": "not"
      },
      {
        "field": "living.type",
        "operator": "eq",
        "value": "enebolig"
      }
    ]
  },
  "options": [
    {
      "id": "living.floor.1",
      "type": "Answer",
      "heading": "1",
      "value": "1"
    },
    {
      "id": "living.floor.2",
      "type": "Answer",
      "heading": "2",
      "value": "2"
    },
    {
      "id": "living.floor.3",
      "type": "Answer",
      "heading": "3",
      "value": "3"
    }
  ]
}
`})})]})}function T(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{T as default};
