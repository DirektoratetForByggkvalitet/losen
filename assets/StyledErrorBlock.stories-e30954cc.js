import{j as a}from"./jsx-runtime-ffb262ed.js";import{i as l,s}from"./inject-styles-a5bba7af.js";import{I as u}from"./InfoIcon-e8d2c279.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const g=l(s.div`
    ${({styles:r,grouped:m})=>`
  padding: ${r.padding.large} 0;
  width: 100%;
  ${m?`&:not(last-child) { margin-bottom: ${r.padding.xLarge} ; }`:""};

  svg {
    position: absolute;
    top: ${r.padding.large};
    left: ${r.padding.large};
    width: ${r.iconSize.medium};
    height: ${r.iconSize.medium};
    display: inline-block;
    vertical-align: middle;
  }

  > div {
    padding: 0;
  }

  > div:first-of-type {
    position: relative;
    border-left: 4px solid ${r.color2.negative};
    background: ${r.color2.negativeXLight};
    padding: ${r.padding.large};
    padding-left: calc(${r.padding.large} + 1.2em +  ${r.padding.large});
    animation: messageIn 1000ms ${r.easing.easeOut};
  }

  > div:nth-of-type(2) {
    padding: 0 33px 36px;
  }

  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
    margin: 0;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
`}
  `),E={component:g,argTypes:{grouped:{control:"boolean"}}},e={args:{children:"ErrorBlock"},render:({children:r})=>a.jsx(g,{children:a.jsxs("div",{children:[a.jsx(u,{}),r]})})},o={args:{children:"ErrorBlock",grouped:!0}};var i,n,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'ErrorBlock'
  },
  render: ({
    children
  }) => <StyledErrorBlock><div><InfoIcon />{children}</div></StyledErrorBlock>
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var t,p,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'ErrorBlock',
    grouped: true
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["Default","Grouped"];export{e as Default,o as Grouped,S as __namedExportsOrder,E as default};
