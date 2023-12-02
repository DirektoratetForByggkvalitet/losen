import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

const OptionWrapper = injectStyles(styled.div<
  PrimitiveProps<{
    grid?: boolean;
  }>
>`
  ${(props) =>
    props.grid
      ? `
    display: flex;
    flex-wrap: wrap;

    > div {
      display: flex;
      width: 32%;
      margin: 0 1.3333333333% 1.3333333333% 0;

      label {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0;
        align-content: flex-start;
      }

      label img {
        width: 100%;
        order: 1;
        margin-bottom: 10px;
      }

      label div {
        order: 3;
        line-height: 1.4;
        margin: 0;
        width: 100%;
        padding: 2px;
        font-weight: 400;
        font-size: 15px;
      }

      label:before {
        display: none;
      }
      
      @media screen and (max-width: 900px) {
        label img {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 700px) {
        width: 46%;
        margin: 2%;
        label img {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 400px) {
        label div {
          font-size: 14px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
        }
      }
    }
    `
      : " "};
`);

export default OptionWrapper;
