import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Information = injectStyles(styled.p`
  svg {
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    vertical-align: middle;
    color: black;
  }
  p {
    display: inline;
  }
`);

export default Information;
