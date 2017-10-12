import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Checkbox = injectStyles(styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  line-height: 1.4;

  + label {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    box-shadow: 0 0 1px ${({ styles }) => styles.color.dark};
    padding: 10px;
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
    position: relative;

    &:before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      min-width: 10px;
      width: 10px;
      height: 10px;
      background: white;
      margin-right: 1em;
      border: 0.3em solid white;
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.darkgray};
      transition: all 0.1s ease-in-out;
    }

    div {
      margin-right: 30px;
    }
    img {
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 0;
    }
  }

  :disabled + label {
    opacity: 0.4;
  }

  :not(:disabled) {
    + label {
      &:hover {
        box-shadow: 0 0 6px ${({ styles }) => styles.color.dark};
      }
      &:hover::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }

    + label:hover {
      box-shadow: 0 0 6px ${({ styles }) => styles.color.dark};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
    &:focus + label {
      box-shadow: 0 0 6px ${({ styles }) => styles.color.light};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
    &:checked + label:after {
      content: " ";
      position: absolute;
      left: 13px;
      top: 13px;
      width: 11px;
      height: 6px;
      transform: rotate(-46deg);
      border-left: 4px solid ${({ styles }) => styles.color.light};
      border-bottom: 4px solid ${({ styles }) => styles.color.light};
    }
    &:checked + label {
      box-shadow:
        0 0 0 1px ${({ styles }) => styles.color.dark},
        0 0 4px 0 ${({ styles }) => styles.color.dark};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
    &:checked:focus + label {
      box-shadow:
        0 0 0 1px ${({ styles }) => styles.color.dark},
        0 0 6px 1px ${({ styles }) => styles.color.light};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
  }
`);

export const Radio = injectStyles(styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  opacity: 0;
  z-index: -1;

  + label {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 1px ${({ styles }) => styles.color.dark};
    transition: all 0.1s ease-in-out;

    &:before {
      content: ' ';
      display: block;
      vertical-align: middle;
      min-width: 10px;
      width: 10px;
      height: 10px;
      background: white;
      margin-right: 1em;
      border-radius: 50%;
      border: 0.3em solid white;
      box-shadow: 0 0 0 1px ${({ styles }) => styles.color.darkgray};
      transition: all 0.1s ease-in-out;
    }

    div {
      margin-right: 30px;
    }
    img {
      max-width: 200px;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 0;
    }
  }

  :disabled + label {
    opacity: 0.4;
  }

  :not(:disabled) {
    + label:hover {
      box-shadow: 0 0 6px ${({ styles }) => styles.color.dark};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
    &:focus + label {
      box-shadow: 0 0 6px ${({ styles }) => styles.color.light};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
    &:checked + label:before {
      background: ${({ styles }) => styles.color.light};
    }
    &:checked + label {
      box-shadow:
        0 0 0 1px ${({ styles }) => styles.color.dark},
        0 0 4px 0 ${({ styles }) => styles.color.dark};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
    &:checked:focus + label {
      box-shadow:
        0 0 0 1px ${({ styles }) => styles.color.dark},
        0 0 6px 1px ${({ styles }) => styles.color.light};
      &::before {
        box-shadow: 0 0 0 1px ${({ styles }) => styles.color.dark};
      }
    }
  }
  @media screen and (max-width: 900px) {
    + label {
      flex-wrap: wrap;
      img {
        width: 100%;
        margin-top: 1em;
        display: block;
      }
    }
  }
`);

export const NumberInput = injectStyles(styled.input`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  min-width: 20%;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  &::placeholder {
    font-color: inherit;
    opacity: 0.6;
  }
  transition: border-color 0.1s ease-in-out;
  &:hover, &:focus {
    border-color: ${({ styles }) => styles.color.dark};
  }
`);

export const TextInput = injectStyles(styled.input`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  min-width: 40%;
  border: 1px solid ${({ styles, validation: { error } = {} }) => error ? styles.color.red : styles.color.darkgray};
  &::placeholder {
    font-color: inherit;
    opacity: 0.6;
  }
  transition: border-color 0.1s ease-in-out;
  &:hover, &:focus {
    border-color: ${({ styles }) => styles.color.dark};
  }
`);

export const Textarea = injectStyles(styled.textarea`
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  width: 100%;
  min-height: 6em;
  border: 1px solid ${({ styles }) => styles.color.darkgray};
  &::placeholder {
    font-color: inherit;
    opacity: 0.6;
  }
  transition: border-color 0.1s ease-in-out;
  &:hover, &:focus {
    border-color: ${({ styles }) => styles.color.dark};
  }
`);

export const SelectWrapper = injectStyles(styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  &::before {
    content: " ";
    position: absolute;
    right: 16px;
    top: 36%;
    width: 6px;
    height: 6px;
    transform: rotate(-45deg);
    border-left: 2px solid ${({ styles }) => styles.color.light};
    border-bottom: 2px solid ${({ styles }) => styles.color.light};
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    font-family: inherit;
    font-size: 1em;
    padding: 0.5em;
    padding-right: 40px;
    border: 1px solid ${({ styles }) => styles.color.darkgray};
    border-radius: 0;
    line-height: normal;
    background: white;
    &:focus {
      outline-color: ${({ styles }) => styles.color.bluegreen};
    }
    cursor: pointer;
    transition: border-color 0.1s ease-in-out;
    &:hover, &:focus {
      border-color: ${({ styles }) => styles.color.dark};
    }
  }
`);
