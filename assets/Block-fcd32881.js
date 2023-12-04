import{i as d,s as g}from"./inject-styles-aae5f119.js";const h=d(g.div`
  ${({$styles:i,$debug:t,$grouped:n,$error:e,$groupedSimple:o,$type:a})=>`
  position: relative;
  padding: ${i.padding.large} 0;
  ${e?`background: ${i.color2.negativeXLight};`:""}
  > img:first-child {
    margin-bottom: ${i.padding.large};
    width: 100%;
    max-width: ${i.size.imageWidth};
  }
  ${t?`
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
  }`:""} ${o?`
  margin-bottom: 26px;
  padding: 0;
  background: none;
  box-shadow: none;
  &:nth-child(even) {
    background: none;
  }`:" "} ${a==="Table"?`
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${i.color2.secondary};
    border-collapse: collapse;
    th {
      font-weight: inherit;
    }
    th, td {
      border: 1px solid ${i.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    td,th {
      ${t?`
      :hover {
        position: relative;

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
      }`:""}
    }
  }
  `:" "} 

  @media print {
    page-break-inside: avoid;
  }

`}
`),r=d(g.div`
  ${({$styles:i,$debug:t,$groupedSimple:n,$printonly:e,$printhide:o,$small:a})=>`
padding: ${i.padding.large} 0 ${i.padding.small};
  ${n?"":`
    padding: 0;
    `};
  width: 100%;
  ${t?`
  position: relative;
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
  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }

  ${e?`
    display: none;
    margin-top: 10px;
    padding-top: 0;
    @media print {
      font-size: 12px;
      display: block;
    }`:""};

  ${o?`
        @media print {
          display: none;
        }`:""};

  h1 {
    font-family: ${i.font.headline};
    font-size: ${a?i.text.h3.fontSize:i.text.h1.fontSize};
    font-weight: ${i.text.h1.fontWeight};
    line-height: ${i.text.h1.lineHeight};
    letter-spacing: ${i.text.h1.letterSpacing};
    margin: 0 0 ${i.padding.large};
  }

  h2 {
    font-family: ${i.font.headline};
    font-size: ${i.text.h2.fontSize};
    font-weight: ${i.text.h2.fontWeight};
    line-height: ${i.text.h2.lineHeight};
    letter-spacing: ${i.text.h2.letterSpacing};
    margin: 0 0 ${i.padding.small};
  }

  h3 {
    font-family: ${i.font.headline};
    font-size: ${i.text.h3.fontSize};
    font-weight: ${i.text.h3.fontWeight};
    line-height: ${i.text.h3.lineHeight};
    letter-spacing: ${i.text.h3.letterSpacing};
    margin: 0 0 ${i.padding.xSmall};
  }

  h4 {
    font-family: ${i.font.body};
    font-size: ${i.text.subHeading.fontSize};
    font-weight: ${i.text.subHeading.fontWeight};
    line-height: ${i.text.subHeading.lineHeight};
    letter-spacing: ${i.text.subHeading.letterSpacing};
    text-transform: ${i.text.subHeading.textTransform};
    margin: 0 0 ${i.padding.xSmall};
  }

  p {
    font-family: ${i.font.body};
    font-size: ${i.text.body.fontSize};
    font-weight: ${i.text.body.fontWeight};
    line-height: ${i.text.body.lineHeight};
    letter-spacing: ${i.text.body.letterSpacing};
    margin: 0 0 ${i.padding.large};
    max-width: 600px;
  }
`}
`);export{h as S,r as T};
