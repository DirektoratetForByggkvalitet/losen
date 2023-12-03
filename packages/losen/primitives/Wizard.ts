import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Wizard = injectStyles(styled.div<PrimitiveProps<{
    noBackground?: boolean;
  }>>`${({ styles, noBackground }) => `
  background-color:${noBackground ? "inherit" : styles.color2.pageBackground};
  font-family: ${styles.font.body};
  padding: ${noBackground ? "0" : styles.padding.medium};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.fontWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};
  strong {
    font-weight: ${styles.text.body.boldWeight};
  }
  * {
    box-sizing: border-box;
    &:focus {
      outline-color: ${styles.color2.outline};
    }
  }
  img {
    max-width: 100%;
  }
  hr {
    border: none;
    border-bottom: ${styles.padding.xxSmall} solid ${styles.color2.secondaryXLight};
    margin: ${styles.padding.xLarge} 0;
  }
  a:not(class) {
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.fontWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    color: ${styles.color2.link};
    &:hover {
      color: ${styles.color2.link};
      text-decoration: none;
    }
  }
  @media screen and (max-width: 900px) {
    padding: ${styles.padding.xSmall};
  }
  @media print {
    background-color: white;
  }
`}`);
