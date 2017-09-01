import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Wizard = injectStyles(styled.div`
  background-color: white;
  background-image: linear-gradient(164deg, rgba(137, 174, 196, 0.34), white, rgba(0, 117, 127, 0.19));
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: ${({ styles }) => styles.font.primary};
  * {
    box-sizing: border-box;
  }
`);

export default Wizard;
