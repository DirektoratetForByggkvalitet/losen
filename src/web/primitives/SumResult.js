import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const StyledSumResult = injectStyles(styled.div`
    padding: 0;
    width: 100%;
    vertical-align: top;

    display: block;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.3;
    .sad {
        color: ${({ styles }) => styles.color.red};
    }
    .happy {
        color: ${({ styles }) => styles.color.green};
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: 20px;
    }
  }
`);

export default StyledSumResult;
