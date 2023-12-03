import{i as e,s as n}from"./inject-styles-a5bba7af.js";const a=e(n.figure`${({styles:t,debug:i})=>`
  padding: 0;
  position: relative;
  margin: ${t.padding.small} 0;
  
  figcaption {
    font-style: ${t.text.caption.fontStyle};
    font-size: ${t.text.caption.fontSize};
    font-weight: ${t.text.caption.fontWeight};
    line-height: ${t.text.caption.lineHeight};
    letter-spacing: ${t.text.caption.letterSpacing};
  }
  ${i?`
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
  }`:""}
`}`);export{a as F};
