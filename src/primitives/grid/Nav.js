import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  padding: 20px;
  background-color: #072938;
  color: white;
  div {
    max-width: 1200px;
    margin: 0 auto;
  }
  a {
    color: white;
    text-decoration: none;
  }
`);

export default Nav;
