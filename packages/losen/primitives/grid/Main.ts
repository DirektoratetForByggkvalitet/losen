import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const Main = injectStyles(styled.main<PrimitiveProps>`
  flex: 1;
  padding: 30px 40px 0 60px;
  margin-left: ${({ styles }) => styles.size.navWidth};
  max-width: ${({ styles }) => styles.size.blockWidth};

  @media print {
    margin: 0 auto;
  }

  h2 {
    margin-top: 0;
  }

  ${(props) =>
    props.debug
      ? `
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
      : ""} @media screen and (max-width: 900px) {
    padding: 0;
    width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 30px auto;
    padding: 0;
  }
`);
