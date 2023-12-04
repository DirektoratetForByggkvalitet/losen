import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const P = injectStyles(styled.p<PrimitiveProps>`
  ${({ $styles }) => `
  font-family: ${$styles.font.body};
  font-size: ${$styles.text.body.fontSize};
  font-weight: ${$styles.text.body.fontWeight};
  line-height: ${$styles.text.body.lineHeight};
  letter-spacing: ${$styles.text.body.letterSpacing};
  margin: 0 0 ${$styles.padding.large};
  max-width: 600px;
`}
`);

export const Lead = injectStyles(styled.div<PrimitiveProps>`
  ${({ $styles }) => `
  font-family: ${$styles.font.body};
  font-size: ${$styles.text.lead.fontSize};
  font-weight: ${$styles.text.lead.fontWeight};
  line-height: ${$styles.text.lead.lineHeight};
  letter-spacing: ${$styles.text.lead.letterSpacing};
  margin: 0;
  margin-bottom: ${$styles.padding.large};
  color: ${$styles.color2.textDark};
  h3,
  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`}
`);
