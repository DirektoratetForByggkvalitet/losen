import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

export const Simple = injectStyles(styled.div<
  PrimitiveProps<{
    padItems?: boolean;
  }>
>`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${({ padItems }) =>
    padItems
      ? `
    > * {
      margin-right: 1px !important;

      &:last-child { margin-right: 0 !important; }
    }
`
      : ""}

  @media screen and (max-width: 900px) {
    display: block;
  }

  @media print {
    display: block;
  }
`);
