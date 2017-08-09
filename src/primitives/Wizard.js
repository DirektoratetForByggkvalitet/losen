import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Wizard = injectStyles(styled.div`
  background-color: white;
  font-family: ${({ styles }) => styles.font.primary};
  * {
    box-sizing: border-box;
  }
`);

export default Wizard;
