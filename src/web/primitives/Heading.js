import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const H1 = injectStyles(styled.h1`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: 50px;
  font-weight: 300;
  margin: 0 0 10px;
  line-height: 1.2;
`);

export const H2 = injectStyles(styled.h2`
  font-family: ${({ styles }) => styles.font.primary};
  font-size: 24px;
  margin: 0 0 10px;
  line-height: 1.3;
`);

export const H3 = injectStyles(styled.h3`
  font-family: ${({ styles }) => styles.font.primary};
  font-size: 18px;
  margin: 0 0 10px;
  line-height: 1.3;
`);

export const H4 = injectStyles(styled.h4`
  font-family: ${({ styles }) => styles.font.primary};
  font-size: 16px;
  text-transform: uppercase;
  margin: 0 0 6px;
  line-height: 1.3;
`);
