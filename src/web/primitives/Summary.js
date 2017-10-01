import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const PageSummary = injectStyles(styled.div`
  padding: 0 0 20px;
  margin-bottom: 20px;
  background: white;
  line-height: 2;
  h4 {
    padding: 0.2em 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  button {
    margin: 0 0 0 auto;
  }
  > div {
    padding: 0 0 20px;
    line-height: 1.4;
  }
  ${props =>
    props.error
      ? `
      h4 {
        color: ${props.styles.color.red};
        border-bottom: 1px solid ${props.styles.color.red};
      }
      button {
        background: ${props.styles.color.red};
      }
    ` : `
      h4 {
        border-bottom: 1px solid ${props.styles.color.warmgray3};
      }
    `}
`);

export const NodeSummary = injectStyles(styled.div` 
  margin-bottom: 20px;
`);
