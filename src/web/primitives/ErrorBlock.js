import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const StyledErrorBlock = injectStyles(styled.div`
  padding: 0;
  width: 100%;
  margin: ${props => (props.grouped ? '0 0 20px 0' : '20px 0')};

  > div {
    padding: 0;
  }

  > div:first-of-type {
    border-left: 12px solid ${({ styles }) => styles.color.red};
    background: ${({ styles }) => styles.color.lightred};
    padding: 30px 33px 36px 21px;
  }
  > div:nth-of-type(2) {
    padding: 0 33px 36px;
  }

  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
    margin: 0;
  }
`);

export default StyledErrorBlock;
