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
  }
  span {
    text-decoration: underline;
    color: ${({ styles }) => styles.color.light};
    font-size: 1em;
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
    border-left: 3px solid ${({ styles }) => styles.color.light};
    border-bottom: 3px solid ${({ styles }) => styles.color.light};
  }
  ${props =>
    props.done
      ? `
      &::after {
        transform: rotate(-45deg);
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
`);

export default AsideItem;
