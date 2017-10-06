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
  h3 {
    padding: 0.2em 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  button {
    margin: 0 0 0 auto;
  }
  > div {
    line-height: 1.4;
  }
  ${props =>
    props.error
      ? `
      h3 {
        color: ${props.styles.color.red};
      }
      button {
        background: ${props.styles.color.red};
      }
    ` : `
      h3 {
        color: inherit;
      }
    `}
`);

export const NodeSummary = injectStyles(styled.div` 
  margin-bottom: 20px;
  h5 {
    font-weight: 300;
  }
`);

export const Value = injectStyles(styled.div` 
  color: ${props => props.missing ? props.styles.color.red : 'black'};
  font-weight: ${props => props.missing ? '300' : 'bold'};
  font-style: ${props => props.missing ? 'italic' : 'normal'};
`);
