import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const P = injectStyles(styled.p`
  font-size: inherit;
  margin: 0 0 20px;
`);

export const Lead = injectStyles(styled.p`
  font-size: 20px;
  margin: 0 0 40px;
`);
