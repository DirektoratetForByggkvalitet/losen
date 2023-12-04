import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-d7a79eca.js";import"./Table-92ceadca.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./inject-styles-aae5f119.js";import"./styles-36622289.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Schema/Data export"}),`
`,e.jsx(t.h1,{id:"data-export",children:"Data export"}),`
`,e.jsx(t.p,{children:`Losen features a data export feature that lets the users take their data with them and
continue the process in other systems. Specifically this is done by declaring a function
that gets the user input for the wizard as the first and only parameter, and transforms
it to the structure the user should get to take with them.`}),`
`,e.jsx(t.h2,{id:"the-data-exporter-",children:"The data exporter 🤓"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`function exportData(state) {
  return {
    fraSluttbrukersystem: "katteveiviser",
    eiendomByggested: {
      etasje: parseInt(state.living.floor, 10),
    },
    ansvarsrett: {
      noeGreier: "her",
    },
  };
}
`})}),`
`,e.jsxs(t.p,{children:["...so given this state at the end of the wizard: ",e.jsx(t.code,{children:"{ living: { floor: '8' } }"}),", the JSON generated for the user to take with them looks like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "fraSluttbrukersystem": "katteveiviser",
  "eiendomByggested": {
    "etasje": 8
  },
  "ansvarsrett": {
    "noeGreier": "her"
  }
}
`})}),`
`,e.jsx(t.h2,{id:"passing-the-exporter-to-losen",children:"Passing the exporter to losen"}),`
`,e.jsxs(t.p,{children:[`The transformer function is defined in the wizard (not in losen itelf) and is passed as a prop
to the `,e.jsx("code",{children:"Wizard"})," component like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import dataExport from "./path/to/your/exporter";

export default class App extends Component {
  // set up the wzard and store++

  render() {
    return (
      <Provider store={store}>
        <Wizard wizard={cat} exports={{ dataExport }} />
      </Provider>
    );
  }
}
`})}),`
`,e.jsxs(t.p,{children:[`And, later on when you want to connect it to a result page, you reference it with the same name
as the property in the exports array. In this example, you would be able to reference the
exporter by using the name `,e.jsx("code",{children:"dataExport"}),", and it should show on the result page."]})]})}function w(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{w as default};
