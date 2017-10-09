import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const PageSummary = injectStyles(styled.div`
  padding: 0 0 20px;
  margin-bottom: 6px;
  background: white;
  line-height: 2;
  border-bottom: 1px solid ${({ styles }) => styles.color.warmgray3};
  &:last-of-type {
    border-bottom: none;
  }
  h2 {
    padding: 0.2em 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  button {
    min-width: 120px;
    align-self: flex-start;
    margin: 0 0 0 20px;
  }
  > div {
    line-height: 1.4;
  }
  ${props =>
    props.error
      ? `
      h2 {
        color: ${props.styles.color.red};
      }
      button {
        background: ${props.styles.color.red};
      }
    ` : `
      h2 {
        color: inherit;
      }
    `}
`);

export const NodeSummary = injectStyles(styled.div` 
  margin-bottom: 20px;
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 0;
  }
`);

export const Value = injectStyles(styled.div` 
  color: ${props => props.missing ? props.styles.color.red : 'black'};
  font-weight: ${props => props.missing ? '300' : 'bold'};
  font-style: ${props => props.missing ? 'italic' : 'normal'};
`);
