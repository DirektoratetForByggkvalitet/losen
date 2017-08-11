import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const P = injectStyles(styled.p`
  font-size: inherit;
`);

export const Lead = injectStyles(styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`);
