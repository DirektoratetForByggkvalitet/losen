import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

const DL = injectStyles(styled.dl<PrimitiveProps>`${({ styles }) => `
  margin: 0;
  dt {
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.fontWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    margin: 0 0 ${styles.padding.xxSmall};
  }
  dd {
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.boldWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    margin: 0 0 ${styles.padding.medium};
  }
`}`);

export default DL;
