import{j as e}from"./jsx-runtime-ffb262ed.js";import{T as l,a as r}from"./Table-92ceadca.js";import{i as d,s as n}from"./inject-styles-aae5f119.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const c=d(n.div`
  overflow: auto;
  max-width: 100%;
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${({$styles:t})=>t.color2.secondary};
    border-collapse: collapse;
    th {
      font-weight: inherit;
      ${({$simple:t})=>t?`
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        background: #ffffff;
      `:" "}
    }
    th,
    td {
      border: 1px solid ${({$styles:t})=>t.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    td,
    th {
      ${({$debug:t})=>t?`
        :hover {
          position: relative;
          :before {
            content: attr(data-id);
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            background: deeppink;
            color: white;
            font-size: 14px;
            padding: 2px 6px;
          }
        }
      `:""}
    }
  }
`),g={component:l,argTypes:{simple:{control:"boolean"}}},p=t=>e.jsx(c,{...t,children:e.jsxs(l,{children:[e.jsxs("tr",{children:[e.jsx(r,{children:"Table header"}),e.jsx(r,{children:"Table header"}),e.jsx(r,{children:"Table header"})]}),e.jsxs("tr",{children:[e.jsx(r,{children:"Table data"}),e.jsx(r,{children:"Table data"}),e.jsx(r,{children:"Table data"})]}),e.jsxs("tr",{children:[e.jsx(r,{children:"Table data"}),e.jsx(r,{children:"Table data"}),e.jsx(r,{children:"Table data"})]})]})}),a={render:p};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: template
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,g as default};
