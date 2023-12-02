import styled from "styled-components";

import injectStyles from "utils/inject-styles";
import { PrimitiveProps } from "styles";

export const Checkbox = injectStyles(styled.input.attrs({
  type: "checkbox",
})<PrimitiveProps>`${({styles}) => `
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: ${styles.padding.medium};
    border: 1px solid ${styles.color2.secondaryLight};
    border-radius: ${styles.borderRadius.small};
    transition: all 200ms ${styles.easing.easeOut};
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.fontWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};
    color: ${styles.color2.textDark};
    
    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 18px;
      height: 18px;
      margin-top: 4px;
      background: transparent;
      margin-right: ${styles.padding.small};
      border: 1px solid ${styles.color2.primary};
      border-radius: ${styles.borderRadius.small};
      transition: all 200ms ${styles.easing.easeOut};
    }

    > div {
      flex: 1;
      font-size: ${styles.text.label.fontSize};
      font-weight: ${styles.text.label.fontWeight};
      line-height: ${styles.text.label.lineHeight};
      letter-spacing: ${styles.text.label.letterSpacing};
      color: ${styles.color2.textDark};
    }

    div:not(:last-child) {
      margin-right: ${styles.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${styles.text.lead.fontSize};
      font-weight: ${styles.text.lead.boldWeight};
      line-height: ${styles.text.lead.lineHeight};
      letter-spacing: ${styles.text.lead.letterSpacing};
      margin-bottom: 0;
    }
  }

  :disabled + label {
    cursor: default;
    opacity: 0.4;
  }

  :not(:disabled) {
    + label {
      &:hover {
        background: ${styles.color2.secondaryXLight};
      }
    }
    &:focus + label {
      background: ${styles.color2.secondaryXLight};
    }
    &:focus-visible + label {
      outline: 1px solid ${styles.color2.outline};
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: calc(${styles.padding.medium} + 5px);
      top: calc(${styles.padding.medium} + 9px);
      width: 8px;
      height: 4px;
      transform: rotate(-46deg);
      border-left: 3px solid ${styles.color2.primary};
      border-bottom: 3px solid ${styles.color2.primary};
    }
    &:checked + label {
      background: ${styles.color2.secondaryLight};
    }
    &:checked:focus + label {
      background: ${styles.color2.secondaryXLight};
    }
  }
`}`);

export const CheckboxResultDisplay = injectStyles(styled.input.attrs({
  type: "checkbox",
})<PrimitiveProps>`${({styles}) => `
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    padding: ${styles.padding.xxSmall} 0;
    font-size: ${styles.text.body.fontSize};
    font-weight: ${styles.text.body.boldWeight};
    line-height: ${styles.text.body.lineHeight};
    letter-spacing: ${styles.text.body.letterSpacing};

    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 218x;
      height: 18px;
      margin-right: ${styles.padding.xxSmall};
    }

    > div {
      flex: 1;
      font-size: ${styles.text.label.fontSize};
      font-weight: ${styles.text.label.fontWeight};
      line-height: ${styles.text.label.lineHeight};
      letter-spacing: ${styles.text.label.letterSpacing};
      color: ${styles.color2.textDark};
    }

    div:not(:last-child) {
      margin-right: ${styles.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${styles.text.lead.fontSize};
      font-weight: ${styles.text.lead.boldWeight};
      line-height: ${styles.text.lead.lineHeight};
      letter-spacing: ${styles.text.lead.letterSpacing};
      font-style: normal;
    }
  }

  &:checked + label:after {
    content: " ";
    position: absolute;
    left: 4px;
    top: calc(${styles.padding.xxSmall} + 5px);
    width: 8px;
    height: 4px;
    transform: rotate(-46deg);
    border-left: 3px solid ${styles.color2.primary};
    border-bottom: 3px solid ${styles.color2.primary};
  }

  @media screen and (max-width: 900px) {
    + label {
      flex-wrap: wrap;
      &::before {
      }
      div {
        flex: 1;
        div {
          margin-right: 0;
        }
      }
      img {
        width: 100%;
        margin: 20px auto 0;
        display: block;
        flex: 0 0 100%;
      }
    }
  }
  @media print {
    + label { 
      border: none;
      padding: 0;
    }
  }
`}`);

export const Radio = injectStyles(styled.input.attrs({
  type: "radio",
})<PrimitiveProps>`${({styles}) => `
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: ${styles.padding.medium};
    border: 1px solid ${styles.color2.secondaryLight};
    border-radius: ${styles.borderRadius.small};
    transition: all 200ms ${styles.easing.easeOut};

    &:before {
      content: " ";
      display: inline-block;
      vertical-align: middle;
      min-width: 18px;
      width: 18px;
      height: 18px;
      margin-top: 3px;
      background: transparent;
      margin-right: ${styles.padding.small};
      border: 1px solid ${styles.color2.primary};
      border-radius: 50%;
      transition: all 200ms ${styles.easing.easeOut};
    }

    > div {
      flex: 1;
      font-size: ${styles.text.label.fontSize};
      font-weight: ${styles.text.label.fontWeight};
      line-height: ${styles.text.label.lineHeight};
      letter-spacing: ${styles.text.label.letterSpacing};
      color: ${styles.color2.textDark};
    }
    
    div:not(:last-child) {
      margin-right: ${styles.padding.large};
    }
    img {
      width: 25%;
      max-width: 200px;
      background: ${styles.color2.secondaryXLight};
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: ${styles.text.lead.fontSize};
      font-weight: ${styles.text.lead.boldWeight};
      line-height: ${styles.text.lead.lineHeight};
      letter-spacing: ${styles.text.lead.letterSpacing};
      font-style: normal;
    }
  }

  :disabled + label {
    opacity: 0.4;
  }

  :not(:disabled) {
    + label {
      &:hover {
        background: ${styles.color2.secondaryXLight};
      }
    }
    &:focus + label {
      background: ${styles.color2.secondaryXLight};
    }
    &:focus-visible + label {
      outline: 1px solid ${styles.color2.outline};
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: calc(${styles.padding.medium} + 5px);
      top: calc(${styles.padding.medium} + 8px);
      width: 10px;
      height: 10px;
      transform: rotate(-46deg);
      border-radius: 50%;
      background: ${styles.color2.primary};
    }
    &:checked + label {
      background: ${styles.color2.secondaryLight};
    }
  }

  @media print {
    + label { 
      border: none;
      padding: 0;
    }
  }
`}`);

export const NumberInput = injectStyles(styled.input<PrimitiveProps<{
    validation?: { error?: boolean };
  }>>`${({styles, validation}) => `
  font-family: inherit;
  font-size: ${styles.text.label.fontSize} !important;
  font-weight: ${styles.text.label.fontWeight};
  line-height: ${styles.text.label.lineHeight};
  letter-spacing: ${styles.text.label.letterSpacing};
  text-align: right;
  padding: ${styles.padding.small} !important;
  width: auto !important;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${validation?.error ? styles.color2.error : styles.color2.outline} !important;
  border-radius: ${styles.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${styles.color2.focus};
  }
`}`);

export const TextInput = injectStyles(styled.input<
  PrimitiveProps<{
    validation?: { error?: boolean };
  }>
>`${({styles, validation}) => `
  font-family: inherit;
  font-size: ${styles.text.lead.fontSize} !important;
  font-weight: ${styles.text.lead.fontWeight};
  line-height: ${styles.text.lead.lineHeight};
  letter-spacing: ${styles.text.lead.letterSpacing};
  padding: ${styles.padding.small} !important;
  width: auto;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${validation?.error ? styles.color2.error : styles.color2.outline} !important;
  
  border-radius: ${styles.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${styles.color2.focus};
  }
  @media screen and (max-width: 360px) {
    width: 100%;
  }
`}`);

export const Textarea = injectStyles(styled.textarea<PrimitiveProps>`${({styles}) => `
  font-family: inherit;
  font-size: ${styles.text.body.fontSize};
  font-weight: ${styles.text.body.fontWeight};
  line-height: ${styles.text.body.lineHeight};
  letter-spacing: ${styles.text.body.letterSpacing};
  padding: ${styles.padding.small} ${styles.padding.small};
  min-height: 6em;
  width: 100% !important;
  min-width: 20%;
  margin-right: 0.5em;
  border: 1px solid ${styles.color2.outline};
  border-radius: ${styles.borderRadius.small};
  &::placeholder {
    font-color: inherit;
    opacity: 0.75;
  }
  &:focus {
    outline: 3px solid ${styles.color2.focus};
  }
`}`);

export const SelectWrapper = injectStyles(styled.div<PrimitiveProps>`${({styles}) => `
  position: relative;
  width: fit-content;
  max-width: 100%;
  &::before {
    content: " ";
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 8px;
    height: 8px;
    transform: translateY(-4px) rotate(-45deg);
    border-left: 2px solid ${styles.color2.primary};
    border-bottom: 2px solid ${styles.color2.primary};
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    width: auto;
    max-width: 100%;
    font-family: inherit;
    font-size: ${styles.text.lead.fontSize};
    font-weight: ${styles.text.lead.fontWeight};
    line-height: ${styles.text.lead.lineHeight};
    letter-spacing: ${styles.text.lead.letterSpacing};
    padding: ${styles.padding.small} ${styles.padding.small};
    padding-right: 40px;
    margin-bottom: 0;
    border: 1px solid ${styles.color2.primary};
    border-radius: ${styles.borderRadius.small};
    background: transparent;
    transition: background 200ms ${styles.easing.easeOut};
    &:hover, &:focus {
      background: ${styles.color2.secondaryXLight};
    }
    &:focus {
      outline-color: ${styles.color2.outline};
    }
  }
`}`);
