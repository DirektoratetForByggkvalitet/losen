import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

export const Blocks = injectStyles(
  styled.div<PrimitiveProps>`
    ${({ styles }) => `
  width: 100%;
  margin-bottom: ${styles.padding.medium};
`}
  `
);
