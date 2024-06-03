import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-1dbb4c1e.js";import{T as o}from"./Table-92ceadca.js";import{t as d,i as l,b as a,o as p,s as c,a as h}from"./common-ddf7fa8d.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-664b5535.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Building blocks/Input"}),`
`,e.jsx(t.h1,{id:"input",children:"Input"}),`
`,e.jsx(t.p,{children:"Regular text input field."}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o,{children:[d,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For
a text input, this property must be set to `,e.jsx(t.code,{children:"Input"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the input"}),e.jsx("td",{children:"Yes"})]}),l,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The text to follow the heading for this input field."}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"validator"})}),e.jsxs("td",{children:[e.jsx(t.p,{children:`Input validation. If a validator is provided, the following
structure is expected:`}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "pattern": "^\\\\d+(,\\\\d+)?$",
  "error": "Value should be on either one of these formats: 123 or 123,1239."
}
`})})]}),e.jsx("td",{})]}),a,p,c,h]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "favourite.actor",
  "property": "favourite.actor",
  "type": "Input",
  "autocomplete": "name",
  "validator": {
    "pattern": "^\\\\d+(,\\\\d+)?$",
    "error": "Oppgi på formatet 123,1239"
  },
  "heading": "Hvem er din favorittskuespiller?",
  "text": "Input burde kanskje ikke ha brødtekst som skiller spørsmål fra inputfelt?",
  "placeholder": "Kit Harington"
}
`})})]})}function C(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{C as default};
