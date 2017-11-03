import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Nav = injectStyles(styled.nav`
  width: ${({ styles }) => styles.size.navWidth};
  padding: 30px 20px 20px;
  margin: 0 20px 0 10px;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  button {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media screen and (max-width: 900px) {
    width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 0 auto;
  }
  @media print {
    display: none;
  }
  ${props =>
    props.tocExpanded
      ? `@media screen and (max-width: 900px) {
    max-height: 0;
    padding: 0;
  }`
      : ` @media screen and (max-width: 900px) {
    max-height: 1000px;
    transition: max-height 0.3s ease-in-out;
  }
  `} 
`);

export default Nav;
