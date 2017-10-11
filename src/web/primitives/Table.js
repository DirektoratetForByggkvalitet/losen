import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Table = injectStyles(styled.table`
  text-align: center;
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  border-collapse: collapse;
  margin-bottom: 10px;
  th, td {
    border: 1px solid ${({ styles }) => styles.color.darkgray};
    padding: 10px;

    ${props => props.debug ? `
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
        font-size: 12px;
      }
    }` : ''}
  }
  th > *,
  td > * {
    vertical-align: middle;
    margin: 0;
    line-height: 1.3;
  }
`);

export default Table;
