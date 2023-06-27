import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const Notice = injectStyles(styled.div<PrimitiveProps>`
  background: ${({ styles }) => styles.color2.positiveXLight};
  font-weight: 300;
  font-size: 14px;
  margin: 20px 0 0;
  padding: 20px 24px 20px;
  h3 {
    font-size: 1em;
  }
  table {
    text-align: left;
  }
  @media print {
    font-size: 12px;
  }
`);

export default Notice;
