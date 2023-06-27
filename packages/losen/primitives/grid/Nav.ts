import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const Nav = injectStyles(styled.nav<
  PrimitiveProps<{
    tocExpanded?: boolean;
  }>
>`
  width: ${({ styles }) => styles.size.navWidth};
  padding: 30px 20px 20px;
  margin: 0;
  background: white;
  overflow: hidden;
  position: absolute;
  //height: 100%;
  //overflow-y: auto;
  button {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media screen and (max-width: 900px) {
    width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 0 auto;
    position: static;
  }
  @media print {
    display: none;
  }
  ${(props) =>
    props.tocExpanded
      ? `@media screen and (max-width: 900px) {
    max-height: 0;
    padding: 0;
  }`
      : ` @media screen and (max-width: 900px) {
    max-height: 1000px;
    transition: max-height 0.3s ease-in-out;
  }
  `}
`);
