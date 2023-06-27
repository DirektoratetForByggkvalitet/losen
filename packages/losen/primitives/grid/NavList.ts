import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";
import { PrimitiveProps } from "../../styles";

export const NavList = injectStyles(styled.ul<PrimitiveProps>`
  padding: 0;
  margin: 0;
  list-style: none;
`);
