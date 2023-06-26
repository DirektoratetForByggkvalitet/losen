import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Details = injectStyles(styled.details<PrimitiveProps>`
  margin-top: 40px;
  h3,
  h4 {
    font-size: 1em;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`);

export const Summary = injectStyles(styled.summary<PrimitiveProps>`
  cursor: pointer;
  color: ${({ styles }) => styles.color.light};
  text-decoration: underline;
`);
