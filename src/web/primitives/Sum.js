import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const StyledSum = injectStyles(styled.div`
  padding: 0 33px 20px;
  width: 100%;
  span {
    display: block;
    font-size: 42px;
    font-weight: bold;
    line-height: 1em;
  }
  ${props =>
    props.final
      ? `
      background: gold;
      color: black;
        text-shadow: 2px 2px 0 black;
    `
      : ' '};
`);

export default StyledSum;
