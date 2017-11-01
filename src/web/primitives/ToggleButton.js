import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Button = injectStyles(styled.button`
  width: ${({ styles }) => styles.size.mobileContentWidth};
  margin: 2px auto;
  background: white;
  color: ${({ styles }) => styles.color.dark};
  border: 1px solid ${({ styles }) => styles.color.dark};
  font-family: inherit;
  font-size: inherit;
  padding: 0.5em;
  cursor: pointer;
  display: none;
  &:hover, &:focus {
    color: white;
    background: ${({ styles }) => styles.color.dark};
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`);

export default Button;
