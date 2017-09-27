import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Navigation = injectStyles(styled.main`
  max-width: ${({ styles }) => styles.size.blockWidth};
  display: flex;
  margin-bottom: 50px;
`);

export default Navigation;
