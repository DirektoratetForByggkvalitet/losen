import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const ModalBox = injectStyles(styled.div<PrimitiveProps>`${({ styles }) => `
  display: block;
  max-width: ${styles.size.blockWidth};
  background: ${styles.color2.sectionBackground};
  border-radius: ${styles.borderRadius.large};
  padding: ${styles.padding.xLarge};
  animation: modalIn 1000ms ${styles.easing.easeOut};
  > button:not(:last-child) {
    margin-right: ${styles.padding.small};
  }
  @media screen and (max-width: 400px) {
    padding: ${styles.padding.xLarge} ${styles.padding.large};
  }
  @keyframes modalIn {
    0% { opacity: 0; transform: translateY(2em); }
  }
  `}`);

export default ModalBox;
