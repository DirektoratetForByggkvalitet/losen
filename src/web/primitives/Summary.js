import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const PageSummary = injectStyles(styled.div`
  padding: 10px 0 20px;
  margin: 0 0 10px;
  background: white;
  line-height: 2;
  border-top: 1px solid ${({ styles }) => styles.color.warmgray3};
  h2 {
    padding: 0.2em 0;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }
  button {
    min-width: 120px;
    align-self: flex-start;
    margin: 0 0 0 20px;
  }
  > div {
    line-height: 1.4;
    max-width: 600px;
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
  @media screen and (max-width: 900px) {
    h2 {
      display: block;
    }
    button {
      margin: 6px 0 0;
      display: block;
    }
  }
  @media print {
    font-size: 12px;
    h2 {
      display: none;
    }
  }
`);

export const NodeSummary = injectStyles(styled.div` 
  margin-bottom: 20px;
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 0;
  }
  @media print {
    font-size: 12px;
    h3 {
      font-size: 12px;
    }
  }
`);

export const Value = injectStyles(styled.div` 
  color: ${props => props.missing ? props.styles.color.red : 'black'};
  font-weight: ${props => props.missing ? '300' : 'bold'};
  font-style: ${props => props.missing ? 'italic' : 'normal'};
`);
