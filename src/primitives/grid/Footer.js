import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Footer = injectStyles(styled.footer`
  padding: 20px;
  background-color: #d7d4d1;
  div {
    max-width: 1200px;
    margin: 0 auto;
  }
`);

export default Footer;
