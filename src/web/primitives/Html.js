import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const StyledHtml = injectStyles(styled.div`
  display: ${props => (props.inline ? 'inline' : 'block')};
  table {
    width: 100%;
    font-size: 14px;
    border: 1px solid ${({ styles }) => styles.color.darkgray};
    background: ${({ styles }) => styles.color.lightgreen};
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
  }
`);

export default StyledHtml;
