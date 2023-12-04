import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const Information = injectStyles(styled.div<PrimitiveProps>`${({ $styles }) => `
  position: relative;  
  background: ${$styles.color2.sectionBackground};
  border: 1px solid ${$styles.color2.secondaryLight};
  border-radius: ${$styles.borderRadius.small};
  padding: ${$styles.padding.large};
  padding-left: calc(${$styles.padding.large} + 1.2em +  ${$styles.padding.large});
  color: ${$styles.color2.textDark};
  animation: messageIn 1000ms ${$styles.easing.easeOut};
  svg {
    position: absolute;
    top: ${$styles.padding.large};
    left: ${$styles.padding.large};
    width: ${$styles.iconSize.medium};
    height: ${$styles.iconSize.medium};
    display: inline-block;
    vertical-align: middle;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
`}`);

export default Information;
