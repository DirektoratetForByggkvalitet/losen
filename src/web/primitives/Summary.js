import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const PageSummary = injectStyles(styled.div` 
  border-bottom: 1px solid ${({ styles }) => styles.color.warmgray3};
  padding: 20px 24px 20px;
  margin-bottom: 20px;
  background: rgba(137, 174, 196, 0.15);
  &:nth-child(even) {
    background: rgba(0, 117, 127, 0.06);
  }
  ${props =>
    props.error
      ? `
      border-left: 10px solid ${props.styles.color.red};
      padding-left: 2em;
    ` : `
      border: none;
    `}
`);

export const NodeSummary = injectStyles(styled.div` 
  margin-bottom: 20px;
`);
