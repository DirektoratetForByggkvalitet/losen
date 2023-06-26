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

export const SpecificBlock = injectStyles(styled.div<Props>`
  position: relative;
  padding: ${(props) => (props.grouped ? "16px 18px 20px" : "24px 28px 24px")};
  margin: ${(props) => (props.grouped ? "0 0 20px 0" : "20px 0")};
  margin: ${(props) => (props.smallMarginTop ? "8px 0 20px 0" : "20px 0")};
  width: 100%;
  background: ${(props) =>
    props.grouped ? "rgba(137, 174, 196, 0.15)" : "white"};
  ${(props) =>
    props.error ? `background: ${props.styles.color.lightred};` : ""}

  &:nth-child(even) {
    background: ${(props) =>
      props.grouped ? "rgba(0, 117, 127, 0.06)" : "white"};
  }
  box-shadow: ${(props) =>
    props.grouped ? "none" : "0 2px 3px rgba(0, 0, 0, 0.18)"};
  p {
    margin-top: 0;
    font-weight: 300;
  }

  ${(props) =>
    props.debug
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
      : ""} ${(props) =>
    props.grouped
      ? `
  h2 {
    font-size: 20px;
    margin-bottom: 4px;
    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }
  `
      : " "} ${(props) =>
    props.groupedSimple
      ? `
  margin-bottom: 26px;
  padding: 0;
  background: none;
  box-shadow: none;
  &:nth-child(even) {
    background: none;
  }`
      : " "} ${(props) =>
    props.type === "Table"
      ? `
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${props.styles.color.darkgray};
    border-collapse: collapse;
    th {
      font-weight: inherit;
    }
    th, td {
      border: 1px solid ${props.styles.color.darkgray};
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
        props.debug
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
      : " "} @media screen and (max-width: 700px) {
    padding: ${(props) => (props.grouped ? "12px 20px" : "26px 20px")};
    ${(props) =>
      props.groupedSimple
        ? `
    margin-bottom: 24px;
    padding: 0;
    `
        : " "};
  }

  @media print {
    box-shadow: none;
    padding: ${(props) => (props.grouped ? "20px 24px 20px" : "0")};
  }
`);

export const TextBlock = injectStyles(styled.div<
  PrimitiveProps<{
    groupedSimple?: boolean;
    printonly?: boolean;
    printhide?: boolean;
    small?: boolean;
  }>
>`
  padding: 30px 0 10px;
  ${(props) =>
    props.groupedSimple
      ? ""
      : `
    margin: 0;
    padding: 0;
    `};

  width: 100%;
  max-width: ${({ styles }) => styles.size.blockWidth};
  ${(props) =>
    props.debug
      ? `
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
      : ""} p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }

  ${(props) =>
    props.printonly
      ? `
    display: none;
    margin-top: 10px;
    padding-top: 0;
    @media print {
      font-size: 12px;
      display: block;
    }`
      : ""};

  ${(props) =>
    props.printhide
      ? `
        @media print {
          display: none;
        }`
      : ""};

  h1 {
    font-family: ${({ styles }) => styles.font.secondary};
    font-size: 50px;
    font-weight: 300;
    margin: 0 0 30px;
    line-height: 1.2;
    @media screen and (max-width: 700px) {
      font-size: ${(props) => (props.small ? "0.9rem" : "30px")};
    }
  }

  h2 {
    font-family: ${({ styles }) => styles.font.primary};
    font-size: 24px;
    margin: 0 0 10px;
    line-height: 1.3;
    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }

  h3 {
    font-family: ${({ styles }) => styles.font.primary};
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    margin: 0 0 10px;
    line-height: 1.3;
    @media screen and (max-width: 700px) {
      font-size: 16px;
    }
  }

  h4 {
    font-family: ${({ styles }) => styles.font.primary};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 6px;
    line-height: 1.3;
  }

  p {
    font-size: inherit;
    font-weight: 300;
    margin: 0 0 24px;
    max-width: 600px;
  }
`);
