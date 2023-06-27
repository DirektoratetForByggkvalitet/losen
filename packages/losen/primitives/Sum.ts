import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

type Props = PrimitiveProps<{
  groupedSimple?: boolean;
}>;

const StyledSum = injectStyles(styled.div<Props>`
  padding: 0 0 2rem;
  width: 100%;
  vertical-align: top;

  font-family: ${({ styles }) => styles.font.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.2;

  &:nth-child(odd) {
    padding-right: 2rem;
  }

  span {
    padding: 0;
    font-family: ${({ styles }) => styles.font.primary};
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
      color: ${({ styles }) => styles.color.red};
    }
    &.happy {
      color: ${({ styles }) => styles.color.green};
    }
  }

  ${(props) =>
    props.groupedSimple
      ? `
      display: inline-block;
      width: 50%;
      `
      : ""}
  @media screen and (max-width: 900px) {
    width: 100%;
    span {
      font-size: 20px;
    }
  }
`);

export default StyledSum;
