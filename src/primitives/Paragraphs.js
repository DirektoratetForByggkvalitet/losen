import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const P = injectStyles(styled.p`
  font-size: inherit;
  margin: 0 0 20px;
`);

export const Lead = injectStyles(styled.p`
  font-family: ${({ styles }) => styles.font.secondary};
  font-weight: 300;
  font-size: 20px;
  line-height: 1.5;
  margin: 16px 0 40px;
  max-width: ${({ styles }) => styles.size.blockWidth};
`);
