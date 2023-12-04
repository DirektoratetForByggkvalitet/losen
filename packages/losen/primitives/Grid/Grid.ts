import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const Grid = injectStyles(styled.div<PrimitiveProps>`
  ${({ $styles }) => `
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: ${$styles.size.pageWidth};
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    display: block;
  }
  @media print {
    display: block;
  }
`}
`);
