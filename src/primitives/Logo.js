import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Logo = injectStyles(styled.div`
  background: ${({ styles }) => styles.logo.url} no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
`);

export default Logo;
