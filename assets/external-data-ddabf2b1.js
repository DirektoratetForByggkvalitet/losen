import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-00468680.js";import"./Table-92ceadca.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-67bbf1e6.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Schema/External data"}),`
`,e.jsx(t.h1,{id:"external-data",children:"External data"}),`
`,e.jsx(t.p,{children:`The store used by losen is created outside losen in order to make it
possible to manipulate it from the outside. Usually you won't need to,
but you might find the need.`}),`
`,e.jsx(t.p,{children:`As an example: in one of DiBKs wizard there was a need for linking the
user from an article on the page, directly to the second page of the
wizard. This was made possible through a redux middleware that sets
custom data on the store, which losen in turn can react to.`}),`
`,e.jsxs(t.p,{children:[`There are more than one way to do this, depending on what you want to
achieve, but here is the implementation for [deep links](https://github.com/DirektoratetForByggkvalitet/dibk-prodok-sjekkliste/blob/master/src/helpers/handle-deeplink.js in `,e.jsx("code",{children:"dibk-prodok-sjekkliste"}),"."]}),`
`,e.jsx(t.h2,{id:"scope-for-setting-properties",children:"Scope for setting properties"}),`
`,e.jsx(t.p,{children:`Losen cleans up the state and removes values for nodes that no longer
exist in the wizard tree. As a consequence, you cannot just create a
property in the state - it wouldn't belong to a question that is showing
and will be removed by losen.`}),`
`,e.jsxs(t.p,{children:["However, if you set an object property in the ",e.jsx("code",{children:"$external"}),` object
in state, losen won't do anything to it when cleaning up and you can access
it just like any other property in state from the wizard.`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsxs(t.p,{children:[`If you set a property like this 👇, it will be left alone, and you can
reference it in the schema as `,e.jsx("code",{children:"$external.enteredFromMagicLink"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  // ...
  "$external": {
    "enteredFromMagicLink": true
  }
}
`})})]})}function w(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{w as default};
