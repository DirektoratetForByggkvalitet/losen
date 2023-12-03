import{j as e}from"./jsx-runtime-ffb262ed.js";import{i as g,s as h}from"./inject-styles-a5bba7af.js";import{L as t}from"./Label-c52a34a1.js";import{R as s}from"./Input-c4e4fb5f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const c=g(h.div`
  ${i=>i.grid?`
    display: flex;
    flex-wrap: wrap;

    > div {
      display: flex;
      width: 32%;
      margin: 0 1.3333333333% 1.3333333333% 0;

      label {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0;
        align-content: flex-start;
      }

      label img {
        width: 100%;
        order: 1;
        margin-bottom: 10px;
      }

      label div {
        order: 3;
        line-height: 1.4;
        margin: 0;
        width: 100%;
        padding: 2px;
        font-weight: 400;
        font-size: 15px;
      }

      label:before {
        display: none;
      }
      
      @media screen and (max-width: 900px) {
        label img {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 700px) {
        width: 46%;
        margin: 2%;
        label img {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 400px) {
        label div {
          font-size: 14px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
        }
      }
    }
    `:" "};
`),L={component:c,argTypes:{grid:{control:"boolean"}}},x=i=>e.jsxs(c,{...i,children:[e.jsxs("div",{children:[e.jsx(s,{checked:!0}),e.jsx(t,{children:"Label"})]}),e.jsxs("div",{children:[e.jsx(s,{}),e.jsx(t,{children:"Label"})]}),e.jsxs("div",{children:[e.jsx(s,{}),e.jsx(t,{children:"Label"})]})]}),r={render:x},a={args:{grid:!0},render:x};var d,o,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: template
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    grid: true
  },
  render: template
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["Default","Grid"];export{r as Default,a as Grid,k as __namedExportsOrder,L as default};
