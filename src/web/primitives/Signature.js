import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Signature = injectStyles(styled.div`
  text-align: center;
  width: 100%;
  max-width: 300px;
  margin: 120px auto 30px;
  border-top: 1px solid black;
`);

export default Signature;
