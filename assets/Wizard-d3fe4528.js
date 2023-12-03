import{i as t,s as n}from"./inject-styles-a5bba7af.js";const d=t(n.div`${({styles:o,noBackground:i})=>`
  background-color:${i?"inherit":o.color2.pageBackground};
  font-family: ${o.font.body};
  padding: ${i?"0":o.padding.medium};
  font-size: ${o.text.body.fontSize};
  font-weight: ${o.text.body.fontWeight};
  line-height: ${o.text.body.lineHeight};
  letter-spacing: ${o.text.body.letterSpacing};
  strong {
    font-weight: ${o.text.body.boldWeight};
  }
  * {
    box-sizing: border-box;
    &:focus {
      outline-color: ${o.color2.outline};
    }
  }
  img {
    max-width: 100%;
  }
  hr {
    border: none;
    border-bottom: ${o.padding.xxSmall} solid ${o.color2.secondaryXLight};
    margin: ${o.padding.xLarge} 0;
  }
  a:not(class) {
    font-size: ${o.text.body.fontSize};
    font-weight: ${o.text.body.fontWeight};
    line-height: ${o.text.body.lineHeight};
    letter-spacing: ${o.text.body.letterSpacing};
    color: ${o.color2.link};
    &:hover {
      color: ${o.color2.link};
      text-decoration: none;
    }
  }
  @media screen and (max-width: 900px) {
    padding: ${o.padding.xSmall};
  }
  @media print {
    background-color: white;
  }
`}`);export{d as W};
