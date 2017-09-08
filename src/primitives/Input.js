import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Checkbox = injectStyles(styled.input`
  display: none;
  + label {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    background: white;
    box-shadow: 0 0 1px ${({ styles }) => styles.color.dark};
    padding: 10px;
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
    &:hover {
      box-shadow: 0 0 6px ${({ styles }) => styles.color.dark};
    }
    &:before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      min-width: 0.6em;
      width: 0.6em;
      height: 0.6em;
      background: white;
      margin-right: 1em;
      border: 0.3em solid white;
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.darkgray};
      transition: all 0.1s ease-in-out;
    }
    &:hover::before {
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
    }
    div {
      margin-right: 30px;
    }
    img {
      max-width: 200px;
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.light};
  }
  &:checked + label{
    box-shadow: 
      0 0 0 1px ${({ styles }) => styles.color.dark},
      0 0 4px 0 ${({ styles }) => styles.color.dark};
    &::before {
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
    }
  }
`);

export const Radio = injectStyles(styled.input.attrs({
  type: 'radio',
})`
  display: none;
  + label {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    box-sizing: border-box;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 1px ${({ styles }) => styles.color.dark};
    transition: all 0.1s ease-in-out;
    &:hover {
      box-shadow: 0 0 6px ${({ styles }) => styles.color.dark};
    }
    &:before {
      content: ' ';
      display: block;
      vertical-align: middle;
      min-width: 0.6em;
      width: 0.6em;
      height: 0.6em;
      background: white;
      margin-right: 1em;
      border-radius: 50%;
      border: 0.3em solid white;
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.darkgray};
      transition: all 0.1s ease-in-out;
    }
    &:hover::before {
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
    }
    div {
      margin-right: 30px;
    }
    img {
      max-width: 200px;
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.light};
  }
  &:checked + label{
    box-shadow: 
      0 0 0 1px ${({ styles }) => styles.color.dark},
      0 0 4px 0 ${({ styles }) => styles.color.dark};
    &::before {
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
    }
  }
`);

export const NumberInput = injectStyles(styled.input`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  width: 100px;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  &::placeholder {
    font-color: inherit;
    opacity: 0.6;
  }
`);

export const TextInput = injectStyles(styled.input`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  min-width: 40%;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  &::placeholder {
    font-color: inherit;
    opacity: 0.6;
  }
`);

export const Textarea = injectStyles(styled.textarea`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  width: 100%;
  height: 5em;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  &::placeholder {
    font-color: inherit;
    opacity: 0.6;
  }
`);
