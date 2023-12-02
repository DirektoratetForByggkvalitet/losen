import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

const SoftWarning = injectStyles(styled.p<
  PrimitiveProps<{
    warning?: boolean;
  }>
>`${({ styles, warning }) => `
  display: inline-block;
  margin-top: 0;
  padding: ${styles.padding.xSmall} 0;
  color: ${warning ? styles.color2.error : styles.color2.positive};
  font-weight: normal !important;
  font-family: ${styles.font.body};
  font-size: ${styles.text.subHeading.fontSize};
  font-weight: ${styles.text.subHeading.fontWeight};
  line-height: ${styles.text.subHeading.lineHeight};
  text-transform: ${styles.text.subHeading.textTransform};
  letter-spacing: ${styles.text.subHeading.letterSpacing};
  &:before {
    content: "${warning ? '✖' : '✔'}";
    margin-right: 0.5rem;
  }
`}`);

export default SoftWarning;
