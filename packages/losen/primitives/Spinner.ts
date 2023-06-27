import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export default injectStyles(styled.div<
  PrimitiveProps<{
    noMargin?: boolean;
    hidden?: boolean;
  }>
>`
  display: inline-flex;
  width: 1em;
  height: 1em;
  ${(props) => (!props.noMargin ? "margin-left: 0.5em;" : "")}
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  transition: opacity 0.5s;

  opacity: ${(props) => (props.hidden ? "0" : "1")};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`);
