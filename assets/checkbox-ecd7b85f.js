import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as d}from"./index-0fa836ad.js";import{T as i}from"./Table-92ceadca.js";import{t as o,i as c,c as h}from"./common-ddf7fa8d.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bed129da.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function t(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Building blocks/Checkbox"}),`
`,e.jsx(r.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(r.p,{children:"A group of checkboxes. One or more values can be selected."}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(i,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(r.p,{children:[`The type is required in order to determine what type of node it is. For
a checkbox group, this property must be set to `,e.jsx(r.code,{children:"Checkbox"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the checkbox group"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options"})}),e.jsx("td",{children:e.jsxs(r.p,{children:["An array of ",e.jsx(r.a,{href:"?path=?path=/docs/building-blocks-answer--docs",children:e.jsx(r.code,{children:"Answer"})}),`
nodes. Options that the user can select.`]})}),e.jsx("td",{children:"Yes"})]}),c,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"The text to follow the heading for this input field."}),e.jsx("td",{})]}),h,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"grid"})}),e.jsx("td",{children:"Display options in a three column grid."}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"allMandatory"})}),e.jsx("td",{children:e.jsx(r.p,{children:`Required user to check all the options in the list, in order for it to
be "valid".`})}),e.jsx("td",{})]})]})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-json",children:`{
  "id": "preferences.predator",
  "property": "preferences.predator",
  "type": "Checkbox",
  "heading": "Trenger du en katt som kan fange ekle dyr i huset ditt?",
  "options": [
    {
      "id": "preferences.predator.edderkopp",
      "type": "Answer",
      "heading": "🕷",
      "value": "edderkopp"
    },
    {
      "id": "preferences.predator.mus",
      "type": "Answer",
      "heading": "🐁",
      "value": "mus",
      "disabled": {
        "field": "preferences.predator.edderkopp",
        "operator": "neq",
        "value": true
      }
    },
    {
      "id": "preferences.predator.fluer",
      "type": "Answer",
      "heading": "🦗",
      "value": "fluer"
    },
    {
      "id": "preferences.predator.rotter",
      "type": "Answer",
      "heading": "🐀",
      "value": "rotter"
    }
  ]
}
`})})]})}function C(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{C as default};
