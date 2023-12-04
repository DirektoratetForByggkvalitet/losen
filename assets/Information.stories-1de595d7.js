import{j as n}from"./jsx-runtime-ffb262ed.js";import{i as t,s as m}from"./inject-styles-aae5f119.js";import{I as c}from"./InfoIcon-e8d2c279.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const d=t(m.div`${({$styles:r})=>`
  position: relative;  
  background: ${r.color2.sectionBackground};
  border: 1px solid ${r.color2.secondaryLight};
  border-radius: ${r.borderRadius.small};
  padding: ${r.padding.large};
  padding-left: calc(${r.padding.large} + 1.2em +  ${r.padding.large});
  color: ${r.color2.textDark};
  animation: messageIn 1000ms ${r.easing.easeOut};
  svg {
    position: absolute;
    top: ${r.padding.large};
    left: ${r.padding.large};
    width: ${r.iconSize.medium};
    height: ${r.iconSize.medium};
    display: inline-block;
    vertical-align: middle;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
`}`),I={component:d},o={args:{children:"Information"},render:({children:r})=>n.jsxs(d,{children:[n.jsx(c,{}),r]})};var a,i,e;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Information'
  },
  render: ({
    children
  }) => <Information><InfoIcon />{children}</Information>
}`,...(e=(i=o.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,I as default};
