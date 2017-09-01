import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Footer = injectStyles(styled.footer`
  grid-area: footer;
  padding: 20px;
  background-color: white;
`);

export default Footer;
