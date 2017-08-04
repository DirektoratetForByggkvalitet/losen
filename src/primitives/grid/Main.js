import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Main = injectStyles(styled.main`
  grid-area: main;
  padding: 20px;
`);

export default Main;
