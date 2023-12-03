import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

type Props = PrimitiveProps<{
  inline?: boolean;
  margins?: boolean;
}>;

const StyledHtml = injectStyles(styled.div<Props>`${({ styles, inline, margins }) => `
  display: ${inline ? "inline" : "block"};
  margin-bottom: ${margins ? styles.padding.large : "0"};
  color: ${styles.color2.textDark};
  font-style: normal;
  font-family: ${styles.font.body};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.fontWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};

  img {
    width: 100%;
    max-width: ${styles.size.imageWidth};
    margin-bottom: ${styles.padding.medium};
  }

  ul, ol {
    margin: 0;
    margin-bottom: ${styles.padding.medium};
    padding-left: ${styles.padding.large};
  }

  li {
    margin-bottom: ${styles.padding.xSmall};
  }

  p {
    display: block;
    font-style: normal;
    font-family: ${styles.font.body};
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.fontWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    margin: 0;
    margin-bottom: ${styles.padding.medium};
    font-weight: 400;
  }
  h3 {
    font-style: normal;
    font-family: ${styles.font.headline};
    font-size: ${styles.text.h3.fontSize};
    font-weight: ${styles.text.h3.fontWeight};
    line-height: ${styles.text.h3.lineHeight};
    letter-spacing: ${styles.text.h3.letterSpacing};
    margin: 0 0 ${styles.padding.small};
    color: ${styles.color2.textHeading};
  }
  h4 {
    font-family: ${styles.font.body};
    font-size: ${styles.text.subHeading.fontSize};
    font-weight: ${styles.text.subHeading.fontWeight};
    line-height: ${styles.text.subHeading.lineHeight};
    letter-spacing: ${styles.text.subHeading.letterSpacing};
    text-transform: ${styles.text.subHeading.textTransform};
  }
  table {
    width: 100%;
    font-size: 14px;
    border: 1px solid ${styles.color2.secondary};
    background: ${styles.color2.positiveXLight};
    border-collapse: collapse;
    text-align: left;
    th,
    td {
      border: 1px solid ${styles.color2.secondary};
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
`}`);

export default StyledHtml;
