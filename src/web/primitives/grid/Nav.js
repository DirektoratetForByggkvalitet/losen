import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  grid-area: nav;
  padding: 30px 20px 20px;
  margin: 0 30px;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
  ${props =>
    props.tocExpanded
      ? `@media screen and (max-width: 700px) {
      display: none;
    }`
      : ''} @media screen and (max-width: 700px) {
    max-width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 0 auto;
    padding: 20px;
  }
  button {
    width: 100%;
  }
  @media print {
    display: none;
  }
`);

export default Nav;
