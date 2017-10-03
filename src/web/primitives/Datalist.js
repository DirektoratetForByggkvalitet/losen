import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const DL = injectStyles(styled.dl`
  margin: 0;
  dt {
    font-weight: 300;
  }
  dd {
    margin: 0 0 20px;
    font-weight: bold;
  }
`);

export default DL;
