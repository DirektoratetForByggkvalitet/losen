import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const Details = injectStyles(styled.details<PrimitiveProps>`
  ${({ $styles }) => `
  display: block;
  text-align: right;
  margin: 0;
  margin-top: ${$styles.padding.large};
  & > div {
    text-align: left;
    background: ${$styles.color2.secondaryXLight};
    margin: 0;
    padding: ${$styles.padding.large};
    h3,
    h4 {
      font-size: 1em;
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
  &[open] summary {
    border-bottom-color: transparent;
    & ~ * {
      animation: detailsIn 400ms ${$styles.easing.easeOut} both;
    }
    &:after {
      transform: translateY(-1px) rotate(135deg);
    }
  }
  @keyframes detailsIn {
    0% { opacity: 0; transform: translateY(-1em); }
  }
`}
`);

export const Summary = injectStyles(styled.summary<PrimitiveProps>`
  ${({ $styles }) => `
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: ${$styles.padding.xxSmall} 0 ${$styles.padding.xxSmall} ${$styles.padding.small}; 
  list-style: none;
  font-family: ${$styles.font.body};
  font-size: ${$styles.text.body.fontSize};
  font-weight: ${$styles.text.body.boldWeight};
  line-height: ${$styles.text.body.lineHeight};
  letter-spacing: ${$styles.text.body.letterSpacing};
  border-bottom: 1px solid ${$styles.color2.link};
  color: ${$styles.color2.link};
  &::-webkit-details-marker {
    display:none;
  }
  &:after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    pointer-events: none;
    margin-left: ${$styles.padding.xSmall};
    width: 5px;
    height: 5px;
    transform: translateY(-1px) rotate(-45deg);
    transform-origin: 2px 4px;
    border-left: 2px solid ${$styles.color2.link};
    border-bottom: 2px solid ${$styles.color2.link};
    transition: transform 400ms ${$styles.easing.easeOut};
  }
`}
`);
