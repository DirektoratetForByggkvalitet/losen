import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Aside = injectStyles(styled.aside`
  grid-area: aside;
  padding: 20px;
`);

export default Aside;
