import{i,s as n}from"./inject-styles-a5bba7af.js";const g=i(n.h1`
    ${({styles:t,small:e,result:a})=>`
  font-family: ${t.font.headline};
  font-size: ${t.text.h1.fontSize};
  font-weight: ${t.text.h1.fontWeight};
  line-height: ${t.text.h1.lineHeight};
  letter-spacing: ${t.text.h1.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${t.padding.medium};
  color: ${t.color2.textHeading};
  ${e?`
    font-size: ${t.text.h3.fontSize};
    font-weight: ${t.text.h3.fontWeight};
    line-height: ${t.text.h3.lineHeight};
    letter-spacing: ${t.text.h3.letterSpacing};
    color: ${t.color2.textHeading};
    margin-bottom: 10px;
    `:" "};
  ${a?`
      &::before {
        content: 'Resultat';
        display: block;
        color: ${t.color2.textHeading};
        opacity: 0.75;
        font-size: ${t.text.subHeading.fontSize};
        font-weight: ${t.text.subHeading.fontWeight};
        line-height: ${t.text.subHeading.lineHeight};
        letter-spacing: ${t.text.subHeading.letterSpacing};
        text-transform: ${t.text.subHeading.textTransform};
        margin-bottom: ${t.padding.xxSmall};
      }
    `:" "};
  @media screen and (max-width: 700px) {
    font-size: ${e?"0.9rem":"30px"};
  }
  &:last-child {
    margin-bottom: 0;
  }
`}
  `);i(n.h2`
    ${({styles:t,small:e})=>`
  font-family: ${t.font.headline};
  font-size: ${t.text.h2.fontSize};
  font-weight: ${t.text.h2.fontWeight};
  line-height: ${t.text.h2.lineHeight};
  letter-spacing: ${t.text.h2.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${t.padding.small};
  color: ${t.color2.textHeading};
  ${e&&`
    font-size: ${t.text.subHeading.fontSize};
    font-weight: ${t.text.subHeading.fontWeight};
    line-height: ${t.text.subHeading.lineHeight};
    letter-spacing: ${t.text.subHeading.letterSpacing};
    text-transform: ${t.text.subHeading.textTransform};
    opacity: 0.75;
  `}
`}
  `);i(n.h3`
    ${({styles:t})=>`
  font-style: normal;
  font-family: ${t.font.headline};
  font-size: ${t.text.h3.fontSize};
  font-weight: ${t.text.h3.fontWeight};
  line-height: ${t.text.h3.lineHeight};
  letter-spacing: ${t.text.h3.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${t.padding.small};
  color: ${t.color2.textHeading};
`}
  `);i(n.h4`
    ${({styles:t})=>`
  font-family: ${t.font.body};
  font-size: ${t.text.subHeading.fontSize};
  font-weight: ${t.text.subHeading.fontWeight};
  line-height: ${t.text.subHeading.lineHeight};
  letter-spacing: ${t.text.subHeading.letterSpacing};
  text-transform: ${t.text.subHeading.textTransform};
  text-wrap: balance;
  margin: 0 0 6px;
`}
  `);export{g as H};
