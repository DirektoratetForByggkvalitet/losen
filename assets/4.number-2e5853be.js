import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-d7a79eca.js";import{T as d}from"./Table-92ceadca.js";import{t as o,i as h,o as c,s as m,a as l}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Building blocks/Number"}),`
`,e.jsx(n.h1,{id:"number",children:"Number"}),`
`,e.jsx(n.p,{children:"An input field for numbers."}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a number input, this property must be set to `,e.jsx(n.code,{children:"Number"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the number input"}),e.jsx("td",{children:"Yes"})]}),h,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The text to follow the heading for this input field."}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minimum"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The minimum number in the feild. If you only want possitive values set
minimum to `,e.jsx(n.code,{children:"0"}),"."]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maximum"})}),e.jsx("td",{children:"The maximum number for the field."}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"step"})}),e.jsx("td",{children:e.jsx(n.p,{children:`The increment in which the value can be adjusted. It defaults to 1, but
can be set to decimals or higher numbers if needed.`})}),e.jsx("td",{})]}),c,m,l]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "id": "living.gone",
  "property": "living.gone",
  "type": "Number",
  "heading": "Hvor mange timer er du borte fra hjemmet hver dag?",
  "placeholder": "Timer",
  "minimum": "0",
  "maximum": "24",
  "step": "1"
}
`})})]})}function D(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(t,i)})):t(i)}export{D as default};
