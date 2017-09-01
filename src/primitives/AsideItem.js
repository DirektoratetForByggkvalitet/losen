import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const AsideItem = injectStyles(styled.div`
  background: ${props => props.active ? ({ styles }) => styles.color.lightgray : 'white'};
  display: flex;
  transition: background 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${({ styles }) => styles.color.lightgray};
  }
  div {
    color: ${props => props.active ? 'white' : 'inherit'};
    background: ${props => props.active ? ({ styles }) => styles.color.dark : 'white'};
    display: flex;
    min-width: 2.4em;
    align-items: center;
    justify-content: center;
    transition: background 0.1s ease-in-out;
    overflow: hidden;
  }
  &:hover div {
    background: ${props => props.active ? ({ styles }) => styles.color.dark : ({ styles }) => styles.color.lightgray};
  }
  ${props => (
    props.done
    ? `
      &::after {
        content: "";
        display: inline-block;
        width: 0.7em;
        height: 0.4em;
        border-left: 3px solid ${({ styles }) => styles.color.light};
        border-bottom: 3px solid ${({ styles }) => styles.color.light};
        transform: rotate(-45deg);
        flex-shrink: 0;
      }
    `
    : `
      &::after {
        content: "";
        display: inline-block;
        width: 0.7em;
        height: 0.4em;
        flex-shrink: 0;
      } 
    `
  )}
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
`);

export default AsideItem;
