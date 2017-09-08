import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Figure = injectStyles(styled.figure`
  padding: 0;
  margin: 20px 33px 30px;
  max-width: ${({ styles }) => styles.size.blockWidth};
  img {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.21);
  }
  figcaption {
    font-style: italic;
  }
`);

export default Figure;

/*
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
*/
