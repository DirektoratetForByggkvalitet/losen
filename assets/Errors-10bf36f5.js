import{i as e,s as a}from"./inject-styles-a5bba7af.js";const n=e(a.div`${({styles:i})=>`
  display: flex;
  align-items: center;
  font-family: ${i.font.body};
  font-size: ${i.text.body.fontSize};
  font-weight: ${i.text.body.fontWeight};
  line-height: ${i.text.body.lineHeight};
  letter-spacing: ${i.text.body.letterSpacing};
  color: ${i.color2.error};
  margin: ${i.padding.small} 0 0;
  animation: messageIn 1000ms ${i.easing.easeOut};
  > div {
    display: block;
    margin: 0;
  }
  svg {
    width: ${i.iconSize.small};
    height: ${i.iconSize.small};
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5em;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateX(2em); }
  }
`}`);export{n as E};
