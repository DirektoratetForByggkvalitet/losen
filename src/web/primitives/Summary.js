import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const PageSummary = injectStyles(styled.div` 
  border-bottom: 1px solid ${({ styles }) => styles.color.warmgray3};
  padding: 0 0 30px;
  margin-bottom: 20px;
  ${props =>
    props.error
      ? `
      border-left: 20px solid ${({ styles }) => styles.color.red};
      padding-left: 1em;
    ` : `
      border-bottom: 1px solid ${({ styles }) => styles.color.warmgray3};
    `}
`);

export const Lead = injectStyles(styled.p`
  font-family: ${({ styles }) => styles.font.secondary};
  font-weight: 300;
  font-size: 20px;
  line-height: 1.5;
  margin: 16px 0 40px;
  max-width: ${({ styles }) => styles.size.blockWidth};
`);
