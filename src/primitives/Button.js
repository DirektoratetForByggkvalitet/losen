import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Button = injectStyles(styled.button`
  margin: 10px;
  padding: 12px 18px 13px;
  font-size: 22px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 0;
  appearance: none;
  color: #fff;
  background: ${({ styles }) => styles.color.primary};
  &:before, &:after {
    content: " ";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    transform: ${props => props.next ? 'rotate(45deg)' : 'rotate(-135deg)'};
    border: 3px solid white;
    border-width: 3px 3px 0 0;
  }
  &:before {
    display: ${props => props.next ? 'none' : 'inline-block'};
    margin-right: 1em;
  }
  &:after {
    display: ${props => props.next ? 'inline-block' : 'none'};
    margin-left: 1em;
  }
  &:hover {
    opacity: 0.8;
  }
`);

export default Button;
