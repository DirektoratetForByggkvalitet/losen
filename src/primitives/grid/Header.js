import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  grid-area: header;
  padding: 20px;
  background-color: #072938;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
`);

export default Nav;
