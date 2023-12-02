import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

export const PageSummary = injectStyles(styled.div<
  PrimitiveProps<{
    error?: any;
  }>
  >`${({ styles, error }) => `
  width: 100%;
  padding: ${styles.padding.xLarge} 0;
  h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${styles.padding.large};
  }
  button {
    align-self: flex-start;
    margin: 0 0 0 ${styles.padding.medium};
  }
  ${error ? `
      h2 {
        color: ${styles.color2.error};
      }
    ` : ''}
  @media screen and (max-width: 900px) {
    h2 {
      display: block;
    }
    button {
      margin: 6px 0 0;
      display: block;
    }
  }
  @media print {
    page-break-inside: avoid;
    padding: 0;
    padding-bottom: ${styles.padding.xLarge};
    h2 {
      width: 100%;
      border-bottom: 1px solid ${styles.color2.primary};
    }
  }
`}`);

export const NodeSummary = injectStyles(styled.div<PrimitiveProps<{
    error?: any;
  }>>`${({ styles, error }) => `
  background: ${error ? styles.color2.errorXLight : styles.color2.secondaryXLight};
  padding: ${styles.padding.medium} ${styles.padding.large};
  margin-bottom: ${styles.padding.xSmall};
  border-radius: ${styles.borderRadius.small};
  h3 {
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.fontWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    margin-bottom: ${styles.padding.xxSmall}};
  }
  @media print {
    padding: ${styles.padding.small} 0;
    font-size: 12px;
    h3 {
      font-size: 12px;
    }
  }
`}`);

export const Value = injectStyles(styled.div<
  PrimitiveProps<{
    missing?: boolean;
  }>
  >`${({ styles, missing }) => `
  font-style: ${missing ? "italic" : "normal"};
  color: ${missing ? styles.color2.error : styles.color2.textDark};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.boldWeight};
`}`);
