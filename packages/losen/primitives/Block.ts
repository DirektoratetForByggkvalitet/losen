import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

type Props = PrimitiveProps<{
  grouped?: boolean;
  smallMarginTop?: boolean;
  error?: boolean;
  groupedSimple?: boolean;
  type?: string;
}>;

export const SpecificBlock = injectStyles(styled.div<Props>`${({ styles, debug, grouped, smallMarginTop, error, groupedSimple, type,}) => `
  position: relative;
  padding: ${grouped ? styles.padding.large : styles.padding.large} 0;
  ${error ? `background: ${styles.color2.negativeXLight};` : ""}
  > img:first-child {
    margin-bottom: ${styles.padding.large};
    width: 100%;
    max-width: ${styles.size.imageWidth};
  }
  ${debug
      ? `
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`
      : ""} ${groupedSimple
      ? `
  margin-bottom: 26px;
  padding: 0;
  background: none;
  box-shadow: none;
  &:nth-child(even) {
    background: none;
  }`
      : " "} ${type === "Table"
      ? `
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${styles.color2.secondary};
    border-collapse: collapse;
    th {
      font-weight: inherit;
    }
    th, td {
      border: 1px solid ${styles.color2.secondary};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
    td,th {
      ${
        debug
          ? `
      :hover {
        position: relative;

        :before {
          content: attr(data-id);
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          background: deeppink;
          color: white;
          font-size: 14px;
          padding: 2px 6px;
        }
      }`
          : ""
      }
    }
  }
  `
  : " "} 

  @media print {
    page-break-inside: avoid;
  }

`}`);

export const TextBlock = injectStyles(styled.div<
  PrimitiveProps<{
    groupedSimple?: boolean;
    printonly?: boolean;
    printhide?: boolean;
    small?: boolean;
  }>
>`${({ styles, debug, groupedSimple, printonly, printhide, small }) => `
padding: ${styles.padding.large} 0 ${styles.padding.small};
  ${groupedSimple ? "" : `
    padding: 0;
    `};
  width: 100%;
  ${debug ? `
  position: relative;
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`
    : ""} 
  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }

  ${printonly
      ? `
    display: none;
    margin-top: 10px;
    padding-top: 0;
    @media print {
      font-size: 12px;
      display: block;
    }`
      : ""};

  ${printhide
      ? `
        @media print {
          display: none;
        }`
      : ""};

  h1 {
    font-family: ${styles.font.headline};
    font-size: ${small ? styles.text.h3.fontSize : styles.text.h1.fontSize};
    font-weight: ${styles.text.h1.fontWeight};
    line-height: ${styles.text.h1.lineHeight};
    letter-spacing: ${styles.text.h1.letterSpacing};
    margin: 0 0 ${styles.padding.large};
  }

  h2 {
    font-family: ${styles.font.headline};
    font-size: ${styles.text.h2.fontSize};
    font-weight: ${styles.text.h2.fontWeight};
    line-height: ${styles.text.h2.lineHeight};
    letter-spacing: ${styles.text.h2.letterSpacing};
    margin: 0 0 ${styles.padding.small};
  }

  h3 {
    font-family: ${styles.font.headline};
    font-size: ${styles.text.h3.fontSize};
    font-weight: ${styles.text.h3.fontWeight};
    line-height: ${styles.text.h3.lineHeight};
    letter-spacing: ${styles.text.h3.letterSpacing};
    margin: 0 0 ${styles.padding.xSmall};
  }

  h4 {
    font-family: ${styles.font.body};
    font-size: ${styles.text.subHeading.fontSize};
    font-weight: ${styles.text.subHeading.fontWeight};
    line-height: ${styles.text.subHeading.lineHeight};
    letter-spacing: ${styles.text.subHeading.letterSpacing};
    text-transform: ${styles.text.subHeading.textTransform};
    margin: 0 0 ${styles.padding.xSmall};
  }

  p {
    font-family: ${styles.font.body};
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.fontWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    margin: 0 0 ${styles.padding.large};
    max-width: 600px;
  }
`}`);
