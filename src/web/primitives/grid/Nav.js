import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  grid-area: nav;
  padding: 30px 20px 20px;
  margin: 0 46px 0 10px;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
  button {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  ${props =>
    props.tocExpanded
      ? `@media screen and (max-width: 900px) {
      display: none;
    }`
      : ''} 
  @media screen and (max-width: 900px) {
    max-width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 0 auto;
    padding: 20px;
  }
  @media print {
    display: none;
  }
`);

export default Nav;
