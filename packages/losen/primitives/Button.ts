import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export const MainButton = injectStyles(styled.button<
  PrimitiveProps<{
    copied?: boolean;
  }>
>`${({ styles, disabled, copied }) => `
  padding: 16px ${styles.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: ${styles.color2.primary};
  border-radius: ${styles.borderRadius.small};
  font-family: ${styles.font.body};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.boldWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};
  color: ${styles.color2.textWhite};
  transition: background 200ms ${styles.easing.easeOut};
  &:hover, &:focus {
    background: ${styles.color2.primaryLight};
    color: ${styles.color2.textWhite};
  }
  &:active {
    background: ${styles.color2.primaryXLight};
    color: ${styles.color2.textWhite};
  }
  &:focus {
    outline-offset: 2px;
  }
  ${copied
      ? `
      background: ${styles.color2.positive};
      &:hover {
        background: ${styles.color2.positive};
      }
      &:before {
        content: "\\2713  ";
      }
      `
      : ""}
  
  ${disabled
      ? `
    cursor: default;
    background: ${styles.color2.secondaryLight};
    color: white;
    
    &:hover {
      background: ${styles.color2.secondaryLight};
      color: white;
    }`
      : ""}

  &:not(:last-child) {
    margin-bottom:  ${styles.padding.xSmall}
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
`}`);

export const SecondaryButton = injectStyles(styled.button<PrimitiveProps>`${({ styles }) => `
  padding: 16px ${styles.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: transparent;
  border-radius: ${styles.borderRadius.small};
  font-family: ${styles.font.body};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.boldWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};
  color: ${styles.color2.link};
  border: 1px solid ${styles.color2.secondaryLight};
  transition: background 200ms ${styles.easing.easeOut};
  &:hover, &:focus {
    background: ${styles.color2.secondaryXLight};
    color: ${styles.color2.link};
  }
  &:active {
    background: ${styles.color2.secondaryLight};
  }
  &:focus {
    outline-offset: 2px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
  &:not(:last-child) {
    margin-bottom:  ${styles.padding.xSmall}
  }
`}`);

export const SmallButton = injectStyles(styled.button<PrimitiveProps>`${({ styles, disabled }) => `
  position: relative;
  appearance: none;
  font-family: ${styles.font.body};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.fontWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};
  background: none;
  color: ${styles.color2.link};
  text-decoration: underline;
  cursor: pointer;
  border: 0 none;
  padding: ${styles.padding.xxSmall} ${styles.padding.xSmall};
  margin: 0 auto;
  margin-bottom: 10px;
  
  &:hover, &:focus {
    text-decoration: none;
    background: transparent;
    color: ${styles.color2.link};
  }

  ${disabled
      ? `
    cursor: default;
    opacity: 0.5;
    color: ${styles.color2.textDark};
    text-decoration: none;
    `
      : ""}

  @media print {
      display none;
  }
`}`);

export const NavButton = injectStyles(styled.button<
  PrimitiveProps<{
    next?: boolean;
  }>
  >`${({ styles, next }) => `
  width: auto;
  padding: ${styles.padding.small} ${styles.padding.large};
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 0;
  position: relative;
  background: ${styles.color2.primary};
  border-radius: ${styles.borderRadius.small};
  font-family: ${styles.font.body};
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.boldWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};
  color: ${styles.color2.textWhite};
  transition: background 200ms ${styles.easing.easeOut};
  &:hover, &:focus {
    background: ${styles.color2.primaryLight};
    color: ${styles.color2.textWhite};
  }
  &:active {
    background: ${styles.color2.primaryXLight};
  }
  &:focus {
    outline-offset: 2px;
  }
  &:before,
  &:after {
    content: " ";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    transform: ${next ? "rotate(45deg)" : "rotate(-135deg)"};
    border: 2px solid ${styles.color2.textWhite};
    border-width: 2px 2px 0 0;
  }
  &:before {
    display: ${next ? "none" : "inline-block"};
    margin-right: 1em;
  }
  &:after {
    display: ${next ? "inline-block" : "none"};
    margin-left: 1em;
  }
  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    animation: ${next ? "pushnext" : "pushprev"} 0.8s linear
      infinite;
  }
  @keyframes pushnext {
    0% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(45deg) translate3d(2px, -2px, 0);
    }
    100% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
  }
  @keyframes pushprev {
    0% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-135deg) translate3d(-2px, 2px, 0);
    }
    100% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
  }
`}`);
