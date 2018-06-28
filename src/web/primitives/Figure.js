import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Figure = injectStyles(styled.figure`
  padding: 0;
  position: relative;
  margin: 0 33px 30px;
  ${props =>
    props.debug
      ? `
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`
      : ''} figcaption {
    font-style: italic;
    font-size: 14px;
  }
  @media screen and (max-width: 700px) {
    margin: 0 auto 30px;
  }
`);

export default Figure;
