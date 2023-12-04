import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-d7a79eca.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d3e8958d.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function t(s){const n=Object.assign({h2:"h2",p:"p",h3:"h3",ol:"ol",li:"li",strong:"strong",a:"a",h4:"h4",code:"code",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting started"}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"The Losen framework contains the logic and building blocks necessary to building wizards large and small. The easiest way to get started is to use our example. Also, if you want to, you can play around with an example over at codesandbox, before setting it up on your own machine."}),`
`,e.jsx(n.h3,{id:"setup",children:"Setup"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Grab our ",e.jsx(n.a,{href:"https://github.com/DirektoratetForByggkvalitet/losen/tree/master/example",target:"_blank",rel:"nofollow noopener noreferrer",children:"example repo"})," from GitHub"]}),`, and follow the instructions.
This contains a complete working wizard, where data handling, JSON export, offline storage and all is set up for you.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Edit or replace the example schema."}),`
Take a look at our schema documentation for how to set up your custom schema structure.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Custom styling
Losen uses Styled Components for styling. Currently only a few theming options are available.`}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"build-and-deploy",children:"Build and deploy"}),`
`,e.jsx(n.p,{children:"The wizard can be be used as a stand alone site or embedded on your current site."}),`
`,e.jsx(n.h4,{id:"use-as-a-stand-alone-site",children:"Use as a stand alone site"}),`
`,e.jsxs(n.p,{children:["Run ",e.jsx(n.code,{children:"npm run build"}),`
This creates a `,e.jsx(n.code,{children:"/build"})," folder with a index.html. Run it to see your wizard."]}),`
`,e.jsx(n.h4,{id:"use-embedded",children:"Use embedded"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Create an empty placeholder on your site where you want the wizard to show up, and give it an unique id.
Example:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div id="wizard-example"></div>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Update ",e.jsx(n.code,{children:"index.js"}),` to match your unique id.
Example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`ReactDOM.render(<App />, document.getElementById("wizard-example"));
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Run ",e.jsx(n.code,{children:"npm run build"}),`
This creates a /build folder. Copy the /build/static/js file and embed on your site. Example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script type="text/javascript" src="/static/js/main.536c234c.js"><\/script>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"The wizard should now show up on your site 😊"}),`
`]}),`
`]})]})}function g(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{g as default};
