import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Logo = injectStyles(styled.div<PrimitiveProps>`
  background: ${({ styles }) => styles.logo.default} no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 700px) {
    background: ${({ styles }) => styles.logo.mobile} no-repeat;
  }
`);
