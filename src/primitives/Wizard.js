import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Wizard = injectStyles(styled.div`
  background-color: ${({ styles }) => styles.color.secondary};
  font-family: ${({ styles }) => styles.font.primary};
`);

export default Wizard;
