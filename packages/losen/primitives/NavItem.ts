import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const NavItem = injectStyles(styled.a<
  PrimitiveProps<{
    $active?: boolean;
    $errors?: boolean;
    $done?: boolean;
  }>
>`
  ${({ $styles, $active, $errors, $done }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: ${$styles.borderRadius.small};
  padding: ${$styles.padding.small};
  margin-bottom: ${$styles.padding.xxSmall};
  transition: background 400ms ${$styles.easing.easeOut};
  ${$done ? `background: ${$styles.color2.positiveXLight};` : ""}
  ${$errors ? `background: ${$styles.color2.errorXLight};` : ""}
  ${$active ? `background: ${$styles.color2.secondaryLight};` : ""}
  ${!($done || $errors) || $active ? `color: ${$styles.color2.link};` : ""}
  ${$done ? `color: ${$styles.color2.positive};` : ""}
  ${$errors ? `color: ${$styles.color2.error};` : ""}
  &:hover {
    cursor: pointer;
    ${
      !($active || $done || $errors)
        ? `background: ${$styles.color2.secondaryXLight};`
        : ""
    }
    ${$done ? `background: ${$styles.color2.positiveLight};` : ""}
    ${$errors ? `background: ${$styles.color2.errorLight};` : ""}
    ${$active ? `background: ${$styles.color2.secondaryLight};` : ""}
    p {
      text-decoration: underline;
    }
  }
  span {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: 12px;
    max-width: 100%;
  }
  p {
    flex-grow: 1;
    font-size: ${$styles.text.body.fontSize};
    font-weight: ${$styles.text.body.fontWeight};
    line-height: ${$styles.text.body.lineHeight};
    letter-spacing: ${$styles.text.body.letterSpacing};
    margin: 0;
    margin-left: ${$styles.padding.small};
  }
  svg {
    display: inline-block;
    flex-shrink: 0;
    width: ${$styles.iconSize.small};
    height: ${$styles.iconSize.small};
    opacity: 0;
    transition: opacity 400ms ${$styles.easing.easeOut};
  }
  &:hover svg {
    opacity: 1;
  }
  ${
    $done || $active
      ? `
      svg {
        opacity: 1;
      }
    `
      : ""
  }

  ${
    $errors
      ? `
    &::after {
      display: inline-block;
      transform: rotate(-46deg);
      border-color: ${$styles.color2.negative};
    }
  `
      : ""
  }
`}
`);
