import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Button = injectStyles(styled.button`
  width: ${({ styles }) => styles.size.mobileContentWidth};
  margin: 2px auto;
  background: white;
  border: 1px solid ${({ styles }) => styles.color.dark};
  font-family: inherit;
  font-size: inherit;
  padding: 0.5em;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`);

export default Button;
