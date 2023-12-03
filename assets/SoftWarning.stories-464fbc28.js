import{i as s,s as m}from"./inject-styles-a5bba7af.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-ffb262ed.js";import"./styles-36622289.js";const d=s(m.p`${({styles:r,warning:n})=>`
  display: inline-block;
  margin-top: 0;
  padding: ${r.padding.xSmall} 0;
  color: ${n?r.color2.error:r.color2.positive};
  font-weight: normal !important;
  font-family: ${r.font.body};
  font-size: ${r.text.subHeading.fontSize};
  font-weight: ${r.text.subHeading.fontWeight};
  line-height: ${r.text.subHeading.lineHeight};
  text-transform: ${r.text.subHeading.textTransform};
  letter-spacing: ${r.text.subHeading.letterSpacing};
  &:before {
    content: "${n?"✖":"✔"}";
    margin-right: 0.5rem;
  }
`}`),$={component:d,argTypes:{children:{control:"text"},warning:{control:"boolean"}}},a={args:{children:"Paragraph"}},e={args:{children:"Paragraph",warning:!0}};var t,o,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Paragraph"
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,g,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Paragraph",
    warning: true
  }
}`,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const b=["Default","Warning"];export{a as Default,e as Warning,b as __namedExportsOrder,$ as default};
