import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

export const Navigation = injectStyles(styled.main<PrimitiveProps>`
  display: flex;
  margin-bottom: 50px;
  max-width: ${({ styles }) => styles.size.blockWidth};
`);
