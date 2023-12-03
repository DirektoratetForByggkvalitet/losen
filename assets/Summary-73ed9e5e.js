import{i as d,s as a}from"./inject-styles-a5bba7af.js";const t=d(a.div`${({styles:i,error:o})=>`
  width: 100%;
  padding: ${i.padding.xLarge} 0;
  h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${i.padding.large};
  }
  button {
    align-self: flex-start;
    margin: 0 0 0 ${i.padding.medium};
  }
  ${o?`
      h2 {
        color: ${i.color2.error};
      }
    `:""}
  @media screen and (max-width: 900px) {
    h2 {
      display: block;
    }
    button {
      margin: 6px 0 0;
      display: block;
    }
  }
  @media print {
    page-break-inside: avoid;
    padding: 0;
    padding-bottom: ${i.padding.xLarge};
    h2 {
      width: 100%;
      border-bottom: 1px solid ${i.color2.primary};
    }
  }
`}`),n=d(a.div`${({styles:i,error:o})=>`
  background: ${o?i.color2.errorXLight:i.color2.secondaryXLight};
  padding: ${i.padding.medium} ${i.padding.large};
  margin-bottom: ${i.padding.xSmall};
  border-radius: ${i.borderRadius.small};
  h3 {
    font-size: ${i.text.body.fontSize};
    font-weight: ${i.text.body.fontWeight};
    line-height: ${i.text.body.lineHeight};
    letter-spacing: ${i.text.body.letterSpacing};
    margin-bottom: ${i.padding.xxSmall}};
  }
  @media print {
    padding: ${i.padding.small} 0;
    font-size: 12px;
    h3 {
      font-size: 12px;
    }
  }
`}`);d(a.div`${({styles:i,missing:o})=>`
  font-style: ${o?"italic":"normal"};
  color: ${o?i.color2.error:i.color2.textDark};
  font-size: ${i.text.body.fontSize};
  font-weight: ${i.text.body.boldWeight};
`}`);export{n as N,t as P};
