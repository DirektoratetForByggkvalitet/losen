import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Logo = injectStyles(styled.div`
  background: ${({ styles }) => styles.logo.default} no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    background: ${({ styles }) => styles.logo.mobile} no-repeat;
  }
`);

export default Logo;
