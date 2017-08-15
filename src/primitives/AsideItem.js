import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const AsideItem = injectStyles(styled.div`
  background: ${props => props.active ? '#fff' : '#000'};
  background: ${props => props.active ? '#efefef' : '#fff'};
  display: flex;
  transition: background 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background: #efefef;
  }
  &:hover::before {
    background: ${props => props.active ? ({ styles }) => styles.color.light : '#efefef'};
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
