import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Main = injectStyles(styled.main`
  grid-area: main;
  padding: 30px 30px 0;
  h2 {
    margin-top: 0;
  }

  ${props =>
    props.debug
      ? `
  position: relative;

  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`
      : ''} @media screen and (max-width: 900px) {
    padding: 0;
    width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 30px auto;
    padding: 0;
  }

  ${props => props.result ? `
  @media print {
    > h1,
    > h2,
    > p {
      display: none;
    }
  }
  ` : `
  
  `}
`);

export default Main;
