import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-c707cce4.js";import{T as d}from"./Table-70bf50a1.js";import{t as o,h as c,s as a,a as l}from"./common-ddf7fa8d.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2dbb56a1.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-a5bba7af.js";import"./styles-36622289.js";function r(t){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Building blocks/Error"}),`
`,e.jsx(n.h1,{id:"error",children:"Error"}),`
`,e.jsxs(n.p,{children:["An error, consisting of one or more ",e.jsx(n.a,{href:"?path=/docs/building-blocks-text--docs",children:e.jsx(n.code,{children:"Text"})})," and ",e.jsx(n.a,{href:"?path=/docs/building-blocks-text--docs",children:e.jsx(n.code,{children:"Image"})})," nodes."]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`The type is required in order to determine what type of node it is. For
a text block, this property must be set to `,e.jsx(n.code,{children:"Text"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the text block"}),e.jsx("td",{children:"Yes"})]}),c,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:e.jsx(n.p,{children:`The text. If you need to, you can put HTML in here to make links etc.,
but make sure that whatever you insert is valid HTML.`})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"warning"})}),e.jsx("td",{children:"Indicate that this is an warning/error message."}),e.jsx("td",{})]}),a,l]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "id": "applymunicipality",
  "property": "applymunicipality",
  "type": "Error",
  "simple": true,
  "children": [
    {
      "id": "insufficientCompentency",
      "type": "Text",
      "warning": true,
      "heading": "Firmaet ditt har ikke tilstrekkelig kompetanse til å gjøre jobben"
    },
    {
      "id": "failedButCanGoOn",
      "type": "Text",
      "text": "<p>Du kan fortsatt gå videre i veiviseren, men du vil ikke kunne erklære ansvar for arbeidet som skal gjøres. Vil du vite mer om kravene? <a href=\\"https://dibk.no/byggeregler/sak/3/11/11-3/\\">Les mer om krav til utdanning og praksis på DiBKs nettsider.</a></p>"
    }
  ]
}
`})})]})}function C(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{C as default};
