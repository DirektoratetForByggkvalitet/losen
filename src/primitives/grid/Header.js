import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  grid-area: header;
  display: flex;
  padding: 10px 20px;
  background-color: ${({ styles }) => styles.color.secondary};
  color: white;
  a {
    color: white;
    text-decoration: none;
    display: block;
    max-width: ${({ styles }) => styles.size.asideWidth};
  }
  a, div {
    flex-grow: 1;
    position: relative;
  }
`);

export default Nav;
