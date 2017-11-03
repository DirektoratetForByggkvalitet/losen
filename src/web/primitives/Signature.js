import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Signature = injectStyles(styled.div`
  text-align: center;
  width: 100%;
  max-width: 300px;
  margin: 120px auto 30px;
  border-top: 0.5px solid black;
  @media print {
    page-break-inside: avoid;
  }
`);

export default Signature;
