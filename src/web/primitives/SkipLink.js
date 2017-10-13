import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const SkipLink = injectStyles(styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:active,
  &:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: absolute;
    width: auto;
    font-size: 21px;
    top: 2px;
    left: 2px;
    padding: 5px 10px;
    background-color: #fff;
  }
`);

export default SkipLink;
