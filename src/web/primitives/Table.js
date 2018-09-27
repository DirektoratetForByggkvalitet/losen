import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Table = injectStyles(styled.table`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  border-collapse: collapse;
  text-align: left;
  th, td {
    border: 1px solid ${({ styles }) => styles.color.darkgray};
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
    th, td {
      padding: 5px 10px;
    }
    th > *,
    td > * {
      line-height: 1.2;
    }
  }
`);

export const TD = injectStyles(styled.td`
  ${props => props['data-inactive'] ? `
  background: ${props.simple ? '#ffffff' : 'repeating-linear-gradient(-45deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.1) 2px, white 2px, white 6px)'};
  font-weight: normal;
  ` : `
  font-weight: ${props.simple ? 'normal' : 'bold'};
  background: ${props.simple ? '#ffffff' : 'rgba(0, 255, 0, 0.1)'};
  `}
  ${props => props.simple ? `
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
  ` : ' '}
`);
