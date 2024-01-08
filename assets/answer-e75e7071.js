import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-0fa836ad.js";import{T as d}from"./Table-92ceadca.js";import{t as l,s as o,a as h}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bed129da.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function t(n){const s=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Answer"}),`
`,e.jsx(s.h1,{id:"answer",children:"Answer"}),`
`,e.jsx(s.p,{children:"Answer used as an option in Radio, Checkbox or Select"}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[l,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"type"})})}),e.jsx("td",{children:e.jsxs(s.p,{children:[`The type is required in order to determine what type of node it is. For
an answer, this property must be set to `,e.jsx(s.code,{children:"Answer"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"id"})})}),e.jsx("td",{children:"The id of the answer input"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"heading"})})}),e.jsx("td",{children:"The title for the option."}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"value"})})}),e.jsx("td",{children:e.jsx(s.p,{children:"Option value. What is set in the data object, not visible to the user."})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"text"})})}),e.jsx("td",{children:"Additional description that follows the heading for the answer."}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"image"})})}),e.jsxs("td",{children:[e.jsx(s.p,{children:`Image to show with description. If a values is passed, the following
structure is expected:`}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`{
  url: 'https://url.to/image.jpg',
  alt: 'alternative text'
}
`})})]}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.code,{children:"messages"})})}),e.jsx("td",{children:e.jsxs(s.p,{children:["Array of ",e.jsx(s.code,{children:"Message"}),` nodes that can show on an Answer. The first message with either
no test, or a test that yields a truthy value will be returned. No more than one
message will be rendered.`]})}),e.jsx("td",{})]}),o,h]})]}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-json",children:`{
  "id": "living.floor.1",
  "type": "Answer",
  "heading": "78",
  "value": "78",
  "show": {
    "field": "hasClimbingHarness",
    "operator": "required"
  },
  "messages": [
    {
      "message": "Du bør ikke klatre opp til 78. etasje uten klatresele, altså.. 😱",
      "test": {
        "field": "hasClimbingHarness",
        "operator": "eq",
        "value": true
      }
    }
  ]
}
`})})]})}function k(n={}){const{wrapper:s}=Object.assign({},r(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{k as default};
