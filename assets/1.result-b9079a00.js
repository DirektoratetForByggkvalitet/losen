import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-00468680.js";import{T as o}from"./Table-92ceadca.js";import{t as d,s as a,a as h}from"./common-ddf7fa8d.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Building blocks/Result"}),`
`,e.jsx(t.h1,{id:"result",children:"Result"}),`
`,e.jsx(t.p,{children:`The result page represents the end of a wizard. Once the algorithm encounters a Result page,
it will be appended after the page it's included as a child in, and no more pages will be
shown. This is intentional as it gives an opening for short-circuiting the wizard once the
user answer in such a way that no further input is necessary in order to give feedback,
either positive or negative.`}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o,{children:[d,e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"type"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`The type is required in order to determine what type of node it is. For a
result page, this property must be set to `,e.jsx(t.code,{children:"Result"}),"."]})}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"id"})}),e.jsx("td",{children:"The id of the result page."}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"heading"})}),e.jsxs("td",{children:[e.jsxs(t.p,{children:["The heading of the page. ",e.jsx("strong",{children:"Required"})]}),e.jsx(t.p,{children:`Can either be a simple
string, or an object if you want different heading depending on whether or
not the wizard is completed and if it has errors. If you an object, it
must have the following structure:`}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "complete": "Done 🌈", 
  "completeWithError": "Done, but with errors",
  "incomplete": "Not done yet, but so far so good 🙏",
  "incompleteWithError": "Not done, no good"
}
`})})]}),e.jsx("td",{children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lead"})}),e.jsx("td",{children:e.jsx(t.p,{children:`A subtitle or lead text for the page. Can be either a string or an object,
just like the heading. See description of heading for explanation, the
lead property works the same way and expects the same object structure.`})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"exporter"})}),e.jsx("td",{children:e.jsx(t.p,{children:`Which exporter to use. Refers to the exports object prop passed to the
Wizard component.`})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsxs(t.p,{children:[`An array of nodes to show for this result page. The nodes can be of any
type except `,e.jsx(t.code,{children:"Page"})," and ",e.jsx(t.code,{children:"Result"}),"."]})}),e.jsx("td",{})]}),a,h]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "id": "hooray",
  "type": "Result",
  "exporter": "dataExport",
  "heading": {
    "complete": "Hurra - du kan ha katt 🌈",
    "completeWithError": "Feil - rett opp svarene dine",
    "incomplete": "Feil - du har ikke svart på alt",
    "incompleteWithError": "Feil - rett opp svarene dine og svar på alt"
  },
  "lead": {
    "complete": "Les nøye gjennom svarene dine, og sjekk at alt stemmer før du tar med deg resultatene til ditt nærmeste adopsjonssenter for katter. Husk at du vil bli stilt til ansvar for at katten får det bra hos deg!",
    "completeWithError": "Du kan ikke ha katt :( Se feilene dine under.",
    "incomplete": "Vi kan ikke gi deg et råd med mindre du svarer på alle spørsmålene.",
    "incompleteWithError": "Du kan ikke ha katt :( Se feil og manglende svar under."
  }
}
`})})]})}function R(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{R as default};
