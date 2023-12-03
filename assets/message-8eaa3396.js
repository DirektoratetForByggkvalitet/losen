import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-c707cce4.js";import{T as o}from"./Table-70bf50a1.js";import{t as d}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2dbb56a1.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-a5bba7af.js";import"./styles-36622289.js";function t(s){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Message"}),`
`,e.jsx(n.h1,{id:"message",children:"Message"}),`
`,e.jsxs(n.p,{children:["Message for ",e.jsx(n.code,{children:"Answer"}),` node that is shown if
test is truthy or not specified.`]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o,{children:[d,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"message"})}),e.jsx("td",{children:"Message to show on the Answer node."}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"test"})}),e.jsx("td",{children:e.jsx(n.p,{children:"A logical test used to determine whether or not to show this message"})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"warning"})}),e.jsx("td",{children:e.jsx(n.p,{children:`Boolean indicating whether or not this is a warning. By default messages
are not warnings`})}),e.jsx("td",{})]})]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "Radio",
  // ...
  "options": [
    {
      "type": "Answer",
      // ...
      "messages": [
        {
          "message": "Firmaet ditt har tilstrekkelig kompetanse",
          "test": {
            "type": "and",
            "clauses": [
              {
                "field": "competence.education",
                "operator": "gte",
                "value": 1
              },
              {
                "field": "competence.experience",
                "operator": "gte",
                "value": 2
              }
            ]
          }
        },
        {
          "message": "Krever fag-/svenneprøve og minst to års erfaring",
          "warning": true,
          "test": {
            "type": "or",
            "clauses": [
              {
                "field": "competence.education",
                "operator": "gte",
                "value": 1
              },
              {
                "field": "competence.experience",
                "operator": "required"
              }
            ]
          }
        }
      ]
    }
    //...
  ]
}
`})})]})}function v(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{v as default};
