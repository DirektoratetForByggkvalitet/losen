import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const P = injectStyles(styled.p`
  font-size: inherit;
  font-weight: 300;
  margin: 0 0 20px;
  max-width: 600px;
`);

export const Lead = injectStyles(styled.div`
  font-family: ${({ styles }) => styles.font.secondary};
  font-weight: 300;
  font-size: 22px;
  line-height: 1.36;
  margin: 16px 0 40px;
`);
