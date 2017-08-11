import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Main = injectStyles(styled.main`
  grid-area: main;
  padding: 20px;
  h2 {
    margin-top: 0;
  }
`);

export default Main;
