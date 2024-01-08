import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-0fa836ad.js";import{T as s}from"./Table-92ceadca.js";import{t as d,s as c,a as h}from"./common-ddf7fa8d.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bed129da.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function i(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Building blocks/Information"}),`
`,e.jsx(t.h1,{id:"information-text",children:"Information text"}),`
`,e.jsx(t.p,{children:"Kinda like a text block but with an icon before the text and shown on the result page."}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(s,{children:[d,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For
an information text block, this property must be set to `,e.jsx(t.code,{children:"Information"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the information block"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The information text to show."}),e.jsx("td",{})]}),c,h]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "information",
  "type": "Information",
  "text": "Husk å fylle ut alle feltene!"
}
`})})]})}function I(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{I as default};
