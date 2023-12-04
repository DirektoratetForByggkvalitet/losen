import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

type Props = PrimitiveProps<{
  $groupedSimple?: boolean;
}>;

const StyledSum = injectStyles(styled.div<Props>`
  ${({ $styles, $groupedSimple }) => `
  padding: 0 0 2rem;
  width: 100%;
  vertical-align: top;
  font-family: ${$styles.font.body};
  font-size: ${$styles.text.subHeading.fontSize};
  font-weight: ${$styles.text.subHeading.fontWeight};
  line-height: ${$styles.text.subHeading.lineHeight};
  letter-spacing: ${$styles.text.subHeading.letterSpacing};
  text-transform: ${$styles.text.subHeading.textTransform};
  &:nth-child(odd) {
    padding-right: 2rem;
  }

  span {
    padding: 0;
    font-family: ${$styles.font.body};
    text-transform: none;
    display: block;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.1;

    &:first-of-type {
      padding-top: 0.5rem;
    }

    &:last-of-type {
      font-weight: bold;
    }

    &.sad {
      color: ${$styles.color2.error};
    }
    &.happy {
      color: ${$styles.color2.positive};
    }
  }

  ${
    $groupedSimple
      ? `
      display: inline-block;
      width: 50%;
      `
      : ""
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    span {
      font-size: 20px;
    }
  }
`}
`);

export default StyledSum;
