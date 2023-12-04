import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

const StyledSumResult = injectStyles(styled.div<PrimitiveProps>`
  ${({ $styles }) => `
    padding: 0;
    width: 100%;
    vertical-align: top;
    display: block;
    font-size: ${$styles.text.h1.fontSize};
    font-weight: ${$styles.text.h1.fontWeight};
    line-height: ${$styles.text.h1.lineHeight};
    letter-spacing: ${$styles.text.h1.letterSpacing};
    .sad {
        color: ${$styles.color2.error};
    }
    .happy {
        color: ${$styles.color2.positive};
    }
  }
`}
`);

export default StyledSumResult;
