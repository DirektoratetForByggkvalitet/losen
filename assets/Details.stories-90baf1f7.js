import{j as i}from"./jsx-runtime-ffb262ed.js";import{i as o,s as m}from"./inject-styles-a5bba7af.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styles-36622289.js";const p=o(m.details`
    ${({styles:e})=>`
  display: block;
  text-align: right;
  margin: 0;
  margin-top: ${e.padding.large};
  & > div {
    text-align: left;
    background: ${e.color2.secondaryXLight};
    margin: 0;
    padding: ${e.padding.large};
    h3,
    h4 {
      font-size: 1em;
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
  &[open] summary {
    border-bottom-color: transparent;
    & ~ * {
      animation: detailsIn 400ms ${e.easing.easeOut} both;
    }
    &:after {
      transform: translateY(-1px) rotate(135deg);
    }
  }
  @keyframes detailsIn {
    0% { opacity: 0; transform: translateY(-1em); }
  }
`}
  `),l=o(m.summary`
    ${({styles:e})=>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: ${e.padding.xxSmall} 0 ${e.padding.xxSmall} ${e.padding.small}; 
  list-style: none;
  font-family: ${e.font.body};
  font-size: ${e.text.body.fontSize};
  font-weight: ${e.text.body.boldWeight};
  line-height: ${e.text.body.lineHeight};
  letter-spacing: ${e.text.body.letterSpacing};
  border-bottom: 1px solid ${e.color2.link};
  color: ${e.color2.link};
  &::-webkit-details-marker {
    display:none;
  }
  &:after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    pointer-events: none;
    margin-left: ${e.padding.xSmall};
    width: 5px;
    height: 5px;
    transform: translateY(-1px) rotate(-45deg);
    transform-origin: 2px 4px;
    border-left: 2px solid ${e.color2.link};
    border-bottom: 2px solid ${e.color2.link};
    transition: transform 400ms ${e.easing.easeOut};
  }
`}
  `),g={component:p},r={render:()=>i.jsxs(p,{children:[i.jsx(l,{children:"See examples"}),i.jsxs("div",{children:[i.jsx("h3",{children:"An example"}),i.jsx("p",{children:"Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei."}),i.jsx("h3",{children:"Another example"}),i.jsx("p",{children:"Omnium prompta placerat in sed. Oporteat periculis instructior est in, vis habeo reprimique ei."}),i.jsx("h3",{children:"A different example"}),i.jsx("p",{children:"Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei."})]})]})};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Details>
    <Summary>See examples</Summary>
    <div>
    <h3>An example</h3>
    <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
    <h3>Another example</h3>
    <p>Omnium prompta placerat in sed. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
    <h3>A different example</h3>
    <p>Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
    </div>
  </Details>
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const h=["Default"];export{r as Default,h as __namedExportsOrder,g as default};
