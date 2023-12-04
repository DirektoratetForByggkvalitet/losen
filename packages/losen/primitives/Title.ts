import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Title = injectStyles(styled.div<PrimitiveProps>`
  ${({ $styles }) => `
  cursor: pointer;
  font-family: ${$styles.font.headline};
  font-size: ${$styles.text.h3.fontSize};
  font-weight: ${$styles.text.h3.fontWeight};
  line-height: ${$styles.text.h3.lineHeight};
  letter-spacing: ${$styles.text.h3.letterSpacing};
  color: ${$styles.color2.textHeading};
  margin: 0;
  &::before {
    content: "Veiviser";
    display: block;
    font-family: ${$styles.font.body};
    font-size: ${$styles.text.subHeading.fontSize};
    font-weight: ${$styles.text.subHeading.fontWeight};
    line-height: ${$styles.text.subHeading.lineHeight};
    letter-spacing: ${$styles.text.subHeading.letterSpacing};
    text-transform: ${$styles.text.subHeading.textTransform};
    color: ${$styles.color2.textHeading};
    opacity: 0.75;
    margin-bottom: 0.3em;
  }
`}
`);
