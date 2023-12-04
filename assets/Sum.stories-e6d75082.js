import{j as o}from"./jsx-runtime-ffb262ed.js";import{i as p,s}from"./inject-styles-aae5f119.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const a=p(s.div`
  ${({$styles:t,$groupedSimple:d})=>`
  padding: 0 0 2rem;
  width: 100%;
  vertical-align: top;
  font-family: ${t.font.body};
  font-size: ${t.text.subHeading.fontSize};
  font-weight: ${t.text.subHeading.fontWeight};
  line-height: ${t.text.subHeading.lineHeight};
  letter-spacing: ${t.text.subHeading.letterSpacing};
  text-transform: ${t.text.subHeading.textTransform};
  &:nth-child(odd) {
    padding-right: 2rem;
  }

  span {
    padding: 0;
    font-family: ${t.font.body};
    text-transform: none;
    display: block;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.1;

    &:first-of-type {
      padding-top: 0.5rem;
    }

    &:last-of-type {
      font-weight: bold;
    }

    &.sad {
      color: ${t.color2.error};
    }
    &.happy {
      color: ${t.color2.positive};
    }
  }

  ${d?`
      display: inline-block;
      width: 50%;
      `:""}
  @media screen and (max-width: 900px) {
    width: 100%;
    span {
      font-size: 20px;
    }
  }
`}
`),x={component:a,argTypes:{groupedSimple:{control:"boolean"},type:{control:"select",options:["happy","sad",void 0]}}},c=t=>o.jsx(a,{...t,children:o.jsxs("div",{children:["Caption",o.jsx("span",{className:t.type,children:"42"})]})}),e={render:c};var n,i,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: template
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,x as default};
