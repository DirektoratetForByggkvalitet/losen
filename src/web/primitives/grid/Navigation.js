import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Navigation = injectStyles(styled.main`
  display: flex;
  margin-bottom: 50px;
  max-width: ${({ styles }) => styles.size.blockWidth};
`);

export default Navigation;
