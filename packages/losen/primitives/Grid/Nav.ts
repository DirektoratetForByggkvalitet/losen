import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const Nav = injectStyles(styled.nav<
  PrimitiveProps<{
    $tocExpanded?: boolean;
  }>
>`
  ${({ $styles, $tocExpanded }) => `
  width: ${$styles.size.navWidth};
  margin: 0;
  overflow: hidden;
  top: ${$styles.padding.medium};
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: ${$styles.padding.xxSmall};
  border-radius: ${$styles.borderRadius.large};
  button {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media screen and (max-width: 900px) {
    width: ${$styles.size.mobileContentWidth};
    margin: 0 auto;
    position: static;
  }
  @media print {
    display: none;
  }
  ${
    $tocExpanded
      ? `@media screen and (max-width: 900px) {
    max-height: 0;
    padding: 0;
  }`
      : ` @media screen and (max-width: 900px) {
    max-height: 1000px;
    margin-bottom: ${$styles.padding.small};
    transition: max-height 0.3s ease-in-out;
  }
  `
  }
`}
`);
