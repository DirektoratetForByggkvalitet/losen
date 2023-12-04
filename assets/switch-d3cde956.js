import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-d7a79eca.js";import{T as d}from"./Table-92ceadca.js";import{t as o,i as c,s as h,a as l}from"./common-ddf7fa8d.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function s(n){const t=Object.assign({h1:"h1",em:"em",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Building blocks/Switch"}),`
`,e.jsxs(t.h1,{id:"switch---deprecated",children:["Switch - ",e.jsx(t.em,{children:"deprecated"})]}),`
`,e.jsx(t.p,{children:`The switch is a checkbox that can be used to change the value of other input types. It
is used in the wizard "How big can you build?" ("Hvor stort kan du bygge") to reset the
value for defined properties the selected options for this checkbox group changes.`}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For
a switch input, this property must be set to `,e.jsx(t.code,{children:"Switch"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the switch input"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options"})}),e.jsx("td",{children:e.jsxs(t.p,{children:["An array of ",e.jsx(t.a,{href:"?path=?path=/docs/building-blocks-answer--docs",children:e.jsx(t.code,{children:"Answer"})}),`
nodes. Options that the user can select.`]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"update"})}),e.jsx("td",{children:e.jsx(t.p,{children:"An array of the properties to unset when the selection is changed."})}),e.jsx("td",{children:"Yes"})]}),c,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The text to follow the heading for this input field."}),e.jsx("td",{})]}),h,l]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "noResidenceToggle",
  "property": "noResidenceToggle",
  "type": "Switch",
  "optional": true,
  "update": [
    "builtResidence",
    "builtGarage",
    "builtSmallBuilding",
    "builtOther"
  ],
  "options": [
    {
      "id": "noResidenceToggle.yes",
      "type": "Answer",
      "text": "Det er ingen bebyggelse på eiendommen",
      "value": "yes"
    }
  ]
}
`})})]})}function R(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{R as default};
