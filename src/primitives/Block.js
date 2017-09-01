import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const SpecificBlock = injectStyles(styled.div`
  padding: 30px 33px 36px;
  margin: 20px 0;
  max-width: ${({ styles }) => styles.size.blockWidth};
  background: white;
  &:nth-child(even) {
    background: #fdfdfd;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.21);
  p {
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`);

export default SpecificBlock;

/*
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
*/
