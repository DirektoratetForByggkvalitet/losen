import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Title = injectStyles(styled.div<PrimitiveProps>`
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ styles }) => styles.color.warmgray3};
  font-size: 24px;
  line-height: 1.2;
  &::before {
    content: "Veiviser";
    display: block;
    color: gray;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 300;
    font-size: 0.9rem;
    margin-bottom: 0.3em;
  }
`);
