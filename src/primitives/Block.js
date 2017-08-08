import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const SpecificBlock = injectStyles(styled.div`
  padding: 30px 30px 36px;
  margin: 20px 0;
  max-width: ${({ styles }) => styles.size.blockWidth};
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
  p {
    margin-top: 0;
  }
`);

export default SpecificBlock;
