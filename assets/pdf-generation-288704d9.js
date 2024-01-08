import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-0fa836ad.js";import"./Table-92ceadca.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bed129da.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function i(n){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ol:"ol",li:"li"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Schema/PDF generation"}),`
`,e.jsx(t.h1,{id:"pdf-generation",children:"PDF generation"}),`
`,e.jsxs(t.p,{children:[`Since browsers aren't good or reliable when it comes to printing and saving to PDF format
losen integrates with a ready made `,e.jsx("a",{href:"https://github.com/DirektoratetForByggkvalitet/losen-pdf",children:`
companion service`})," for building PDFs."]}),`
`,e.jsxs(t.p,{children:["You can deploy this app to the serverless function service by Zeit called ",e.jsx(t.code,{children:"now"}),` – it runs
on top of amazon lambda. To deploy the app you need to clone the repo and follow the deploy
instructions in the readme.`]}),`
`,e.jsx(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(t.p,{children:`In order to print the result page, the wizard grab the localstorage data stored for the
wizard and the current url and sends it to the PDF service. The PDF service then opens up
the url sent to it, loads the localstorage data into the browser (Chrome) and print the page.
The PDF is then returned and the file is downloaded.`}),`
`,e.jsx(t.h2,{id:"telling-the-wizard-where-the-pdf-service-is",children:"Telling the wizard where the PDF service is"}),`
`,e.jsxs(t.p,{children:[`The wizard need to know two things in order to make PDFs: the localstorage holding the state
data and the url to the PDF service. This is set in the `,e.jsx(t.code,{children:"meta"}),` section of the schema JSON file.
Like this:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "meta": {
    // ...
    "pdfServiceUrl": "https://pdf.dibk.kunde.netlife.com/pdf",
    "localStorageKey": "reduxPersist:@WIZARD_STATE"
  }
  // ...
}
`})}),`
`,e.jsx(t.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The wizard must be publicly available over the internet (no localhost)"}),`
`,e.jsxs(t.li,{children:["The wizard must use the ",e.jsx(t.code,{children:"redux-persist"})," plugin or similar, storing the data in localstorage"]}),`
`,e.jsx(t.li,{children:"The url to the the wizard must be on the list of allowed hosts for the PDF service (see the dibk-pdf README for explanation)"}),`
`]})]})}function b(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{b as default};
