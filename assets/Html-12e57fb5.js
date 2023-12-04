import{i as o,s as e}from"./inject-styles-aae5f119.js";const d=o(e.div`
  ${({$styles:t,$inline:i,$margins:n})=>`
  display: ${i?"inline":"block"};
  margin-bottom: ${n?t.padding.large:"0"};
  color: ${t.color2.textDark};
  font-style: normal;
  font-family: ${t.font.body};
  font-size: ${t.text.body.fontSize};
  font-weight: ${t.text.body.fontWeight};
  line-height: ${t.text.body.lineHeight};
  letter-spacing: ${t.text.body.letterSpacing};

  img {
    width: 100%;
    max-width: ${t.size.imageWidth};
    margin-bottom: ${t.padding.medium};
  }

  ul, ol {
    margin: 0;
    margin-bottom: ${t.padding.medium};
    padding-left: ${t.padding.large};
  }

  li {
    margin-bottom: ${t.padding.xSmall};
  }

  p {
    display: block;
    font-style: normal;
    font-family: ${t.font.body};
    font-size: ${t.text.body.fontSize};
    font-weight: ${t.text.body.fontWeight};
    line-height: ${t.text.body.lineHeight};
    letter-spacing: ${t.text.body.letterSpacing};
    margin: 0;
    margin-bottom: ${t.padding.medium};
    font-weight: 400;
  }
  h3 {
    font-style: normal;
    font-family: ${t.font.headline};
    font-size: ${t.text.h3.fontSize};
    font-weight: ${t.text.h3.fontWeight};
    line-height: ${t.text.h3.lineHeight};
    letter-spacing: ${t.text.h3.letterSpacing};
    margin: 0 0 ${t.padding.small};
    color: ${t.color2.textHeading};
  }
  h4 {
    font-family: ${t.font.body};
    font-size: ${t.text.subHeading.fontSize};
    font-weight: ${t.text.subHeading.fontWeight};
    line-height: ${t.text.subHeading.lineHeight};
    letter-spacing: ${t.text.subHeading.letterSpacing};
    text-transform: ${t.text.subHeading.textTransform};
  }
  table {
    width: 100%;
    font-size: 14px;
    border: 1px solid ${t.color2.secondary};
    background: ${t.color2.positiveXLight};
    border-collapse: collapse;
    text-align: left;
    th,
    td {
      border: 1px solid ${t.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    @media print {
      font-size: 12px;
      width: auto;
      th,
      td {
        padding: 5px 10px;
      }
      th > *,
      td > * {
        line-height: 1.2;
      }
    }
  }
`}
`);export{d as S};
