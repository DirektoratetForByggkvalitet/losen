import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const ErrorMessage = injectStyles(styled.div<PrimitiveProps>`
  ${({ $styles }) => `
  display: flex;
  align-items: center;
  font-family: ${$styles.font.body};
  font-size: ${$styles.text.body.fontSize};
  font-weight: ${$styles.text.body.fontWeight};
  line-height: ${$styles.text.body.lineHeight};
  letter-spacing: ${$styles.text.body.letterSpacing};
  color: ${$styles.color2.error};
  margin: ${$styles.padding.small} 0 0;
  animation: messageIn 1000ms ${$styles.easing.easeOut};
  > div {
    display: block;
    margin: 0;
  }
  svg {
    width: ${$styles.iconSize.small};
    height: ${$styles.iconSize.small};
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5em;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateX(2em); }
  }
`}
`);
