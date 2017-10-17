import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Figure = injectStyles(styled.figure`
  padding: 0;
  margin: 0 33px 30px;
  figcaption {
    font-style: italic;
    font-size: 14px;
  }
  @media screen and (max-width: 700px) {
    margin: 0 auto 30px;
  }
`);

export default Figure;
