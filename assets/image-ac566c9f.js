import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-00468680.js";import{T as d}from"./Table-92ceadca.js";import{t as o,s as c,a as h}from"./common-ddf7fa8d.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function n(i){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Building blocks/Image"}),`
`,e.jsx(t.h1,{id:"image",children:"Image"}),`
`,e.jsx(t.p,{children:"An image."}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(d,{children:[o,e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For
an image, this property must be set to `,e.jsx(t.code,{children:"Image"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the image"}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"image"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`Image to show with description, represented as an object with two
properties: `,e.jsx(t.code,{children:"url"})," and ",e.jsx(t.code,{children:"alt"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:"Additional description that follows the image."}),e.jsx("td",{})]}),c,h]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "cat.image",
  "type": "Image",
  "text": "Dette er en bildeblokk",
  "image": {
    "url": "//media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
    "alt": "alt for image"
  }
}
`})})]})}function D(i={}){const{wrapper:t}=Object.assign({},r(),i.components);return t?e.jsx(t,Object.assign({},i,{children:e.jsx(n,i)})):n(i)}export{D as default};
