import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const NavSection = injectStyles(styled.div<
  PrimitiveProps<{
    $large?: boolean;
    $xLarge?: boolean;
  }>
>`
  ${({ $styles, $large, $xLarge }) => `
  background: ${$styles.color2.sectionBackground};
  ${!($xLarge || $large) ? `padding: ${$styles.padding.small};` : ""}
  ${$large ? `padding: ${$styles.padding.large};` : ""}
  ${
    $xLarge
      ? `
  padding: ${$styles.padding.xLarge};
  @media screen and (max-width: 900px) {
    padding: ${$styles.padding.large};
  }
  `
      : ""
  }
`}
`);
