import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-d7a79eca.js";import{T as d}from"./Table-92ceadca.js";import{t as o,o as a,s as l,a as h}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function s(n){const t=Object.assign({h1:"h1",em:"em",p:"p",h2:"h2",code:"code",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Evaluation"}),`
`,e.jsxs(t.h1,{id:"evaulation---deprecated",children:["Evaulation - ",e.jsx(t.em,{children:"deprecated"})]}),`
`,e.jsx(t.p,{children:`A block that shows different information given an expression. It can be used with one value
and shows sad stat if that value is less than 0 or otherwise happy state. Can also compare
two numbers`}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For
an evaluation node, this property must be set to `,e.jsx(t.code,{children:"Evaluation"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the evaluation node"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"testing"})}),e.jsx("td",{children:e.jsx(t.p,{children:`The id of the element you want to evaluate or an array of the two
elements you want to evaulate.`})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sad"})}),e.jsx("td",{children:"The text string to be used when sad state"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"happy"})}),e.jsx("td",{children:"The text string to be used when happy state"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"showValue"})}),e.jsx("td",{children:e.jsx(t.p,{children:`Boolean value for if the number should be shown. Only shows absoulte
values.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"unit"})}),e.jsx("td",{children:"Text appended after the value"}),e.jsx("td",{})]}),a,l,h]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "evalish",
  "type": "Evaluation",
  "testing": ["utnyttingsgrad", "planArea2"],
  "sad": "Du planlegger å bygge mer enn det som er tillatt på eiendommen din.",
  "happy": "Du er innenfor det som er tillatt å bygge på eiendommen din.",
  "optional": true
}
`})})]})}function D(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{D as default};
