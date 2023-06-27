import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const ErrorMessage = injectStyles(styled.p<PrimitiveProps>`
  color: ${({ styles }) => styles.color.red};
  svg {
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    vertical-align: middle;
  }
`);

export const ErrorMessageAlt = injectStyles(styled.p<PrimitiveProps>`
  font-family: ${({ styles }) => styles.font.secondary};
`);
