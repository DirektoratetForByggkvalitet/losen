import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const Main = injectStyles(styled.main<PrimitiveProps>`${({styles, debug}) => `
  background: ${styles.color2.sectionBackground};
  padding: ${styles.padding.xLarge};
  margin-left: ${styles.padding.large};
  border-radius: ${styles.borderRadius.large};
  overflow: hidden;

  @media print {
    margin: 0 auto;
    background: none;
  }

  h2 {
    margin-top: 0;
  }

  ${debug ? `
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
  }`
  : ""} 
  
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: ${styles.padding.xLarge} ${styles.padding.medium};
    margin: 0 auto;
  }

`}`);
