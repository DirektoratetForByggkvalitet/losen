import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Main = injectStyles(styled.main`
  grid-area: main;
  padding: 30px 30px 0;
  h2 {
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
    width: ${({ styles }) => styles.size.mobileContentWidth};
    margin: 30px auto;
  }
`);

export default Main;
