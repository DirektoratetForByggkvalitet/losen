import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const SpecificBlock = injectStyles(styled.div`
  padding: 30px 33px 36px;
  margin: 20px 0;
  max-width: ${({ styles }) => styles.size.blockWidth};
  background: white;
  &:nth-child(even) {
    background: #fdfdfd;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.21);
  p {
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`);

export const TextBlock = injectStyles(styled.div`
  padding: 30px 33px 36px;
  margin: 20px 0;
  max-width: ${({ styles }) => styles.size.blockWidth};
  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`);

/*
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
*/
