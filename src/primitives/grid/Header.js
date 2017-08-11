import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  grid-area: header;
  display: flex;
  padding: 10px 20px;
  background-color: ${({ styles }) => styles.color.secondary};
  color: white;
  line-height: calc(${({ styles }) => styles.size.headerHeight} - 20px);
  a {
    color: white;
    text-decoration: none;
    display: block;
    width: ${({ styles }) => styles.size.asideWidth};
    max-width: ${({ styles }) => styles.size.asideWidth};
  }
  a, div {
    flex-grow: 1;
    position: relative;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    a {
      max-width: ${({ styles }) => styles.size.headerHeight};
    }
  }
`);

export default Nav;
