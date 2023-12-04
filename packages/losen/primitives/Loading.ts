import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const Loading = injectStyles(styled.div<PrimitiveProps>`
  ${({ $styles }) => `
  background: ${$styles.color2.secondaryXLight};
  border-left: 4px solid ${$styles.color2.secondary};
  padding: ${$styles.padding.medium};
  margin-top: ${$styles.padding.medium};
  font-size: ${$styles.text.body.fontSize};
  font-weight: ${$styles.text.body.fontWeight};
  &::after {
    content: "...";
    animation: dotdotdot 1s linear infinite;
  }
  @keyframes dotdotdot {
    0% {
      content: " ";
    }
    25% {
      content: " .";
    }
    50% {
      content: " ..";
    }
    75% {
      content: " ...";
    }
    100% {
      content: " ...";
    }
  }
`}
`);

export default Loading;
