import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const AsideItem = injectStyles(styled.div`
  background: ${props => (props.active ? ({ styles }) => styles.color.warmgray3 : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${({ styles }) => styles.color.warmgray3};
  }
  div {
    color: ${props => (props.active ? 'white' : 'inherit')};
    background: ${props => (props.active ? ({ styles }) => styles.color.dark : 'white')};
    display: flex;
    align-self: stretch;
    min-width: 2.4em;
    align-items: center;
    justify-content: center;
    transition: background 0.1s ease-in-out;
    overflow: hidden;
  }
  &:hover div {
    background: ${props =>
    props.active ? ({ styles }) => styles.color.dark : ({ styles }) => styles.color.warmgray3};
  }
  p {
    flex-grow: 1;
    font-weight: bold;
    padding: 0 20px;
    line-height: 1.3;
  }
  span {
    text-decoration: underline;
    color: ${({ styles }) => styles.color.light};
    font-size: 14px;
    line-height: 1.8;
    font-weight: normal;
    display: block;
    padding: 0;
  }
  &::after {
    content: " ";
    width: 0.7em;
    height: 0.4em;
    margin: 0.7em;
    flex-shrink: 0;
    border-left: 4px solid ${({ styles }) => styles.color.light};
    border-bottom: 4px solid ${({ styles }) => styles.color.light};
  }
  ${props =>
    props.done
      ? `
      &::after {
        transform: rotate(-46deg);
      }
      span {
        display: block;
      }
    `
      : `
      &::after {
        border: none;
      }
      span {
        display: none;
      }
    `} 
  &:last-of-type {
    margin-bottom: 30px;
  }
`);

export default AsideItem;
