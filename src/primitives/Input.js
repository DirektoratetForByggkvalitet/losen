import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Checkbox = injectStyles(styled.input`
  display: none;
  + label {
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
      width: 0.6em;
      height: 0.6em;
      background: white;
      margin-right: 1em;
      border: 0.3em solid white;
      box-shadow: 0 0 0 0.1em ${({ styles }) => styles.color.dark};
      transition: background 0.1s ease-in-out;
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.light};
  }
`);

export const Radio = injectStyles(styled.input.attrs({
  type: 'radio',
})`
  display: none;
  + label {
    cursor: pointer;
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
      display: inline-block;
      vertical-align: middle;
      width: 0.5em;
      height: 0.5em;
      background: white;
      margin-right: 1em;
      border-radius: 50%;
      border: 0.3em solid white;
      box-shadow: 0 0 0 0.1em ${({ styles }) => styles.color.dark};
      transition: background 0.1s ease-in-out;
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.light};
  }
`);

export const NumberInput = injectStyles(styled.input`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  width: 100px;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
`);
