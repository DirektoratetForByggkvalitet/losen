import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Checkbox = injectStyles(styled.input`
  display: none;
  + label {
    cursor: pointer;
    &:before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      background: white;
      margin-right: 10px;
      border: 1px solid #aaa;
    }
    &:hover::before {
      border-color: ${({ styles }) => styles.color.primary};
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.primary};
  }
`);

export const Radio = injectStyles(styled.input`
  display: none;
  + label {
    cursor: pointer;
    &:before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      background: white;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px solid #aaa;
    }
    &:hover::before {
      border-color: ${({ styles }) => styles.color.primary};
    }
  }
  &:checked + label:before {
    background: ${({ styles }) => styles.color.primary};
  }
`);

export const NumberInput = injectStyles(styled.input`
  font-size: 1em;
  padding: 0.5em;
  width: 100px;
  border: 1px solid #aaa;
`);
