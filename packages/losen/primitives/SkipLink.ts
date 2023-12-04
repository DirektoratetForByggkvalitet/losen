import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const SkipLink = injectStyles(styled.a<PrimitiveProps>`${({ $styles }) => `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:active,
  &:focus {
    overflow: visible;
    position: absolute;
    z-index: 2;
    height: auto;
    margin: 0;
    width: auto;
    clip: auto;
    top: ${$styles.padding.small};
    left: ${$styles.padding.small};
    padding: ${$styles.padding.small} ${$styles.padding.large};
    background-color:  ${$styles.color2.sectionBackground};
  }
`}`);

export default SkipLink;
