import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-0fa836ad.js";import{T as d}from"./Table-92ceadca.js";import{t as o,h as a,s as h,a as c}from"./common-ddf7fa8d.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bed129da.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Page"}),`
`,e.jsx(t.h1,{id:"page",children:"Page"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx("em",{children:"Page"}),` is the largest building block. Sort of a container for everything else.
Inside a page you can have pretty much anything, but not a Page. Nested pages is not
supported.`]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For a
page, this property must be set to `,e.jsx(t.code,{children:"Page"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the page."}),e.jsx("td",{children:"Yes"})]}),a,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`An array of nodes to show for this page. The nodes can be of any type
except `,e.jsx("em",{children:"Page"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lead"})}),e.jsx("td",{children:"A subtitle or lead text for the page."}),e.jsx("td",{})]}),h,c]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "relation",
  "type": "Page",
  "heading": "Forhold til katter",
  "lead": "Før vi bestemmer type katt må vi sjekke at du ikke er en slem kattehater.",
  "children": [
    // ...
  ]
}
`})})]})}function w(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{w as default};
