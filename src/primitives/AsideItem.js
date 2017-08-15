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
    width: 2.4em;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background 0.1s ease-in-out;
    overflow: hidden;
  }
  &:hover div {
    background: ${props => props.active ? ({ styles }) => styles.color.dark : ({ styles }) => styles.color.lightgray};
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
`);

export default AsideItem;
