import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const P = injectStyles(styled.p`
  font-size: inherit;
  font-weight: 300;
  margin: 0 0 24px;
  max-width: 600px;
`);

export const Lead = injectStyles(styled.div<PrimitiveProps>`
  font-family: ${({ styles }) => styles.font.secondary};
  font-weight: 300;
  font-size: 22px;
  line-height: 1.4;
  margin: 16px 0 40px;
  h3,
  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`);
