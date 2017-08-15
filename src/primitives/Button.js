import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Button = injectStyles(styled.button`
  font-family: ${({ styles }) => styles.font.secondary};
  font-weight: 300;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 1px;
  color: white;
  background: ${({ styles }) => styles.color.light};
  min-width: 30%;
  padding: 12px 18px 13px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 0;
  appearance: none;
  margin-right: ${props => props.next ? '0' : 'auto'};
  margin-left: ${props => props.next ? 'auto' : '0'};
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  &:before, &:after {
    content: " ";
    display: inline-block;
    position: absolute;
    left: ${props => props.next ? 'auto' : '1em'};
    right: ${props => props.next ? '1em' : 'auto'};
    top: calc(50% - 0.4rem);
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
    background: ${({ styles }) => styles.color.dark};
  }
  &:hover::before, &:hover::after {
    animation: ${props => props.next ? 'pushnext' : 'pushprev'} 0.5s linear infinite;
  }
  @media screen and (max-width: 900px) {
    min-width: 45%;
  }
  @keyframes pushnext {
    0% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(45deg) translate3d(2px, -2px, 0);
    }
    100% {
      transform: rotate(45deg) translate3d(0, 0, 0);
    }
  }
  @keyframes pushprev {
    0% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-135deg) translate3d(-2px, 2px, 0);
    }
    100% {
      transform: rotate(-135deg) translate3d(0, 0, 0);
    }
  }
`);

export default Button;
