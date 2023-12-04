import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Table = injectStyles(styled.table<PrimitiveProps>`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({ $styles }) => $styles.color2.secondary};
  border-collapse: collapse;
  text-align: left;
  th,
  td {
    border: 1px solid ${({ $styles }) => $styles.color2.secondary};
    padding: 10px;
  }
  th > *,
  td > * {
    vertical-align: middle;
    margin: 0;
    line-height: 1.3;
  }
  @media print {
    font-size: 12px;
    width: auto;
    th,
    td {
      padding: 5px 10px;
    }
    th > *,
    td > * {
      line-height: 1.2;
    }
  }
`);

export const TD = injectStyles(styled.td<
  PrimitiveProps<{
    "data-inactive"?: any;
    $simple?: boolean;
  }>
>`
  ${({ $styles, $simple, "data-inactive": dataInactive }) =>
    dataInactive
      ? `
    background: ${$styles.color2.errorXLight};
    font-weight: normal;
    position: relative;
    text-decoration: line-through;
`
      : `
    font-weight: ${$simple ? "normal" : "bold"};
    background: ${$styles.color2.positiveXLight};
`}

  ${({ $simple }) =>
    $simple
      ? `
    text-align: left;
    vertical-align: top;
    font-weight: normal;
    line-height: 1.5;
    p {
      font-weight: normal !important;
      margin-top: 3px !important;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-weight: normal;
    }
    @media (max-width: 700px) {
      word-wrap: break-word;
    }
  `
      : " "}
`);
