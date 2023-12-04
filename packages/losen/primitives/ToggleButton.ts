import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const ToggleButton = injectStyles(styled.button<
  PrimitiveProps<{
    $visible?: boolean;
  }>
>`
  ${({ $styles, $visible }) => `
  width: ${$styles.size.mobileContentWidth};
  margin: 0 auto;
  margin-bottom: ${$styles.padding.small};
  background: transparent;
  color: ${$styles.color2.primary};
  border: 1px solid ${$styles.color2.primary};
  border-radius: ${$styles.borderRadius.small};
  font-size: ${$styles.text.body.fontSize};
  font-weight: ${$styles.text.body.boldWeight};
  line-height: ${$styles.text.body.lineHeight};
  letter-spacing: ${$styles.text.body.letterSpacing};
  padding: ${$styles.padding.small} ${$styles.padding.large};
  cursor: pointer;
  display: ${$visible ? "block" : "none"};
  span {
    margin-left: ${$styles.padding.small};
  }
  &:hover,
  &:focus {
    color: ${$styles.color2.link};
    background: ${$styles.color2.secondaryXLight};
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`}
`);
