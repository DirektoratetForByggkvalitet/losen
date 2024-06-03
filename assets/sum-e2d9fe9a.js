import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-1dbb4c1e.js";import{T as d}from"./Table-92ceadca.js";import{t as o,h as a,o as h,s as l,a as c}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-664b5535.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function t(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Sum"}),`
`,e.jsx(n.h1,{id:"sum",children:"Sum"}),`
`,e.jsx(n.p,{children:"A block that shows the sum of an expression. Make sure to have the same number of operations and values."}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a sum, this property must be set to `,e.jsx(n.code,{children:"Sum"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the sum"}),e.jsx("td",{children:"Yes"})]}),a,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"values"})}),e.jsx("td",{children:e.jsx(n.p,{children:`An array of the ids to the elements you want to sum. Default operation
is +.`})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"operations"})}),e.jsx("td",{children:e.jsx(n.p,{children:`An array of operations to be used. First operation is between 0 and the
first element so usually +. If no operations is specified, all the
values will be added together.`})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"unit"})}),e.jsx("td",{children:"Text appended after the value"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minimum"})}),e.jsx("td",{children:"If you want it to have a minimum set this value."}),e.jsx("td",{})]}),h,l,c]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "id": "parkeringssum",
  "property": "parkeringssum",
  "type": "Sum",
  "values": [
    "requiredParkingSpots",
    "numberOfParkinglotsInCarport",
    "parkingPlaceArea"
  ],
  "operations": ["+", "-", "*"],
  "minimum": 0,
  "optional": true,
  "heading": "Nødvendig parkeringsareal på terreng:",
  "unit": "m<sup>2</sup>"
}
`})})]})}function A(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{A as default};
