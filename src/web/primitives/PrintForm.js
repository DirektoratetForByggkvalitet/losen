import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Signature = injectStyles(styled.div`
  display: none;
  @media print {
    font-size: 12px;
    display: block;
  }
`);

export default Signature;
