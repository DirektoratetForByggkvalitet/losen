import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const TableContainer = injectStyles(styled.div<
  PrimitiveProps<{
    $simple?: boolean;
  }>
>`
  overflow: auto;
  max-width: 100%;
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${({ $styles }) => $styles.color2.secondary};
    border-collapse: collapse;
    th {
      font-weight: inherit;
      ${({ $simple }) =>
        $simple
          ? `
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        background: #ffffff;
      `
          : " "}
    }
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
    td,
    th {
      ${({ $debug }) =>
        $debug
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
        }
      `
          : ""}
    }
  }
`);

export default TableContainer;
