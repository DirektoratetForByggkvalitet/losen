import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

type Props = PrimitiveProps;

const Figure = injectStyles(styled.figure<Props>`${({ styles, debug }) => `
  padding: 0;
  position: relative;
  margin: ${styles.padding.small} 0;
  
  figcaption {
    font-style: ${styles.text.caption.fontStyle};
    font-size: ${styles.text.caption.fontSize};
    font-weight: ${styles.text.caption.fontWeight};
    line-height: ${styles.text.caption.lineHeight};
    letter-spacing: ${styles.text.caption.letterSpacing};
  }
  ${debug
      ? `
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
  }`
  : ""}
`}`);

export default Figure;
