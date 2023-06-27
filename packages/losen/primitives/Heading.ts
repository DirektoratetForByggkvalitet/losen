import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

type Props = PrimitiveProps<{
  inline?: boolean;
  small?: boolean;
  result?: boolean;
}>;

export const H1 = injectStyles(styled.h1<Props>`${({ styles, small, result }) => `
  font-family: ${styles.font.headline};
  font-size: ${styles.text.h1.fontSize};
  font-weight: ${styles.text.h1.fontWeight};
  line-height: ${styles.text.h1.lineHeight};
  letter-spacing: ${styles.text.h1.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${styles.padding.medium};
  color: ${styles.color2.textHeading};
  ${small
      ? `
    font-size: ${styles.text.h3.fontSize};
    font-weight: ${styles.text.h3.fontWeight};
    line-height: ${styles.text.h3.lineHeight};
    letter-spacing: ${styles.text.h3.letterSpacing};
    color: ${styles.color2.textHeading};
    margin-bottom: 10px;
    `
      : " "};
  ${result
      ? `
      &::before {
        content: 'Resultat';
        display: block;
        color: ${styles.color2.textHeading};
        opacity: 0.75;
        font-size: ${styles.text.subHeading.fontSize};
        font-weight: ${styles.text.subHeading.fontWeight};
        line-height: ${styles.text.subHeading.lineHeight};
        letter-spacing: ${styles.text.subHeading.letterSpacing};
        text-transform: ${styles.text.subHeading.textTransform};
        margin-bottom: ${styles.padding.xxSmall};
      }
    `
      : " "};
  @media screen and (max-width: 700px) {
    font-size: ${small ? "0.9rem" : "30px"};
  }
  &:last-child {
    margin-bottom: 0;
  }
`}`);

export const H2 = injectStyles(styled.h2<PrimitiveProps>`${({ styles, small }) => `
  font-family: ${styles.font.headline};
  font-size: ${styles.text.h2.fontSize};
  font-weight: ${styles.text.h2.fontWeight};
  line-height: ${styles.text.h2.lineHeight};
  letter-spacing: ${styles.text.h2.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${styles.padding.small};
  color: ${styles.color2.textHeading};
  ${small && `
    font-size: ${styles.text.subHeading.fontSize};
    font-weight: ${styles.text.subHeading.fontWeight};
    line-height: ${styles.text.subHeading.lineHeight};
    letter-spacing: ${styles.text.subHeading.letterSpacing};
    text-transform: ${styles.text.subHeading.textTransform};
    opacity: 0.75;
  `}
`}`);

export const H3 = injectStyles(styled.h3<PrimitiveProps>`${({ styles }) => `
  font-style: normal;
  font-family: ${styles.font.headline};
  font-size: ${styles.text.h3.fontSize};
  font-weight: ${styles.text.h3.fontWeight};
  line-height: ${styles.text.h3.lineHeight};
  letter-spacing: ${styles.text.h3.letterSpacing};
  text-wrap: balance;
  margin: 0 0 ${styles.padding.small};
  color: ${styles.color2.textHeading};
`}`);

export const H4 = injectStyles(styled.h4<PrimitiveProps>`${({ styles }) => `
  font-family: ${styles.font.body};
  font-size: ${styles.text.subHeading.fontSize};
  font-weight: ${styles.text.subHeading.fontWeight};
  line-height: ${styles.text.subHeading.lineHeight};
  letter-spacing: ${styles.text.subHeading.letterSpacing};
  text-transform: ${styles.text.subHeading.textTransform};
  text-wrap: balance;
  margin: 0 0 6px;
`}`);
