import{i as a,s as i}from"./inject-styles-aae5f119.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-ffb262ed.js";import"./styles-36622289.js";const d=a(i.div`
  ${({$styles:o})=>`
  background: ${o.color2.secondaryXLight};
  border-left: 4px solid ${o.color2.secondary};
  padding: ${o.padding.medium};
  margin-top: ${o.padding.medium};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.fontWeight};
  &::after {
    content: "...";
    animation: dotdotdot 1s linear infinite;
  }
  @keyframes dotdotdot {
    0% {
      content: " ";
    }
    25% {
      content: " .";
    }
    50% {
      content: " ..";
    }
    75% {
      content: " ...";
    }
    100% {
      content: " ...";
    }
  }
`}
`),l={component:d,argTypes:{children:{control:"text"},warning:{control:"boolean"}}},t={args:{children:"Label"}};var n,e,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Label"
  }
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,l as default};
