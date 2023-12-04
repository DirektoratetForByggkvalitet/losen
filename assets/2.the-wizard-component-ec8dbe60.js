import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-d7a79eca.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function r(n){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"The wizard component"}),`
`,e.jsx(t.h1,{id:"the-wizard-component",children:"The Wizard component"}),`
`,e.jsxs(t.p,{children:["The wizard framework exports a few components, of which Wizard is the most important. The Wizard component expects to have a Redux context, meaning is has to be put inside a ",e.jsx(t.code,{children:"react-redux"})," Provider node. The reason we do it this way is because the wizard you create might want to make use of the data from the wizard, and if the Redux context was created inside the framework getting hold of the data would be more cumbersome. In addition to the Redux context, the Wizard requires one prop: ",e.jsx(t.code,{children:"schema"}),", being the wizard description json."]}),`
`,e.jsx(t.h2,{id:"optional-props",children:"Optional props"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"styles"}),": styles object to override default styles in the framework."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"exports"}),": an object with data export functions. The functions can be referred to from the Result page node in order to give the user a way of exportin their data. The functions is passed the entire wizard state data object and can do whatever it want with it before returning something that will be JSON encoded and presented to to the user."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"warningBeforeUnload"}),": whether or not the user should be prompted if he really wants to leave and that information may be lost, when he navigates away from the wizard or close the window. Boolean value, default: ",e.jsx(t.code,{children:"true"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"translations"}),": An object containing translations/texts for the wizard. Described in further details in the translations chapter."]}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import { Wizard, StyleProvider } from "losen";
import store from "./store";
import catWizardSchema from "./api/cat.json";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Wizard wizard={catWizardSchema} warningBeforeUnload={false} />
      </Provider>
    );
  }
}
`})})]})}function w(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{w as default};
