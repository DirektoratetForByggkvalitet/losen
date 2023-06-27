import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "losen/styles";

type Props = PrimitiveProps<{
  grouped?: boolean;
}>;

const StyledErrorBlock = injectStyles(
  styled.div<Props>`
    ${({ styles, grouped }) => `
  padding: ${styles.padding.large} 0;
  width: 100%;
  ${
    grouped
      ? `&:not(last-child) { margin-bottom: ${styles.padding.xLarge} ; }`
      : ""
  };

  svg {
    position: absolute;
    top: ${styles.padding.large};
    left: ${styles.padding.large};
    width: ${styles.iconSize.medium};
    height: ${styles.iconSize.medium};
    display: inline-block;
    vertical-align: middle;
  }

  > div {
    padding: 0;
  }

  > div:first-of-type {
    position: relative;
    border-left: 4px solid ${styles.color2.negative};
    background: ${styles.color2.negativeXLight};
    padding: ${styles.padding.large};
    padding-left: calc(${styles.padding.large} + 1.2em +  ${
      styles.padding.large
    });
    animation: messageIn 1000ms ${styles.easing.easeOut};
  }

  > div:nth-of-type(2) {
    padding: 0 33px 36px;
  }

  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
    margin: 0;
  }
  @keyframes messageIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
`}
  `
);

export default StyledErrorBlock;
