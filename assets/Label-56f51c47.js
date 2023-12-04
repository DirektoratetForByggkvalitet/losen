import{i as t,s as i}from"./inject-styles-aae5f119.js";const n=t(i.label`
  ${({$styles:o,$debug:a,$warning:e})=>`
  display: block;
  position: relative;
  background: ${e?"rgba(255, 0, 0, 0.05)":"transparent"};
  margin-bottom: ${o.padding.xSmall} !important; 
  ${a?`
  > div {
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
  }`:""};
`}
`);t(i.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`);export{n as L};
