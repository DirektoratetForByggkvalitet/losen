import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const MainButton = injectStyles(styled.button`
  font-family: ${({ styles }) => styles.font.primary};
  font-weight: normal;
  font-size: 18px;
  color: white;
  background: ${({ styles }) => styles.color.light};
  min-width: 46%;
  padding: 15px 20px 16px;
  cursor: pointer;
  user-select: none;
  border: none;
  border-radius: 0;
  appearance: none;
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  &:hover, &:focus {
    background: ${({ styles }) => styles.color.dark};
    color: white;
  }
  ${props =>
    props.copied
      ? `
      background: ${props.styles.color.green};
      &:hover {
        background: ${props.styles.color.green};
      }
      &:before {
        content: "\\2713  ";
      }
      `
      : ''}
  
  ${props => props.disabled
    ? `
    cursor: default;
    background: ${props.styles.color.darkgray};
    color: white;
    
    &:hover {
      background: ${props.styles.color.darkgray};
      color: white;
    }`
    : ''}

  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
`);

export const SecondaryButton = injectStyles(styled.button`
  font-family: ${({ styles }) => styles.font.primary};
  font-weight: normal;
  font-size: 18px;
  color: ${({ styles }) => styles.color.light};
  background: white;
  min-width: 46%;
  padding: 15px 20px 16px;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${({ styles }) => styles.color.warmgray2};
  border-radius: 0;
  appearance: none;
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  &:hover, &:focus {
    background: ${({ styles }) => styles.color.warmgray2};
    color: ${({ styles }) => styles.color.light};
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media print {
      display none;
  }
`);

export const SmallButton = injectStyles(styled.button`
  font-family: ${({ styles }) => styles.font.primary};
  font-size: 16px;
  color: white;
  background: ${({ styles }) => styles.color.light};
  padding: 6px 16px 7px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 0;
  appearance: none;
  margin: 0 auto;
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  &:hover, &:focus {
    background: ${({ styles }) => styles.color.dark};
  }
  @media print {
      display none;
  }
`);

export const NavButton = injectStyles(styled.button`
  font-family: ${({ styles }) => styles.font.primary};
  font-weight: normal;
  font-size: 18px;
  color: white;
  background: ${({ styles }) => styles.color.light};
  min-width: 30%;
  padding: 15px 20px 16px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 0;
  appearance: none;
  margin-right: ${props => (props.next ? '0' : 'auto')};
  margin-left: ${props => (props.next ? 'auto' : '0')};
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  &:before,
  &:after {
    content: ' ';
    display: inline-block;
    position: absolute;
    left: ${props => (props.next ? 'auto' : '1em')};
    right: ${props => (props.next ? '1em' : 'auto')};
    top: calc(50% - 0.4rem);
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
    transform: ${props => (props.next ? 'rotate(45deg)' : 'rotate(-135deg)')};
    border: 2px solid white;
    border-width: 2px 2px 0 0;
  }
  &:before {
    display: ${props => (props.next ? 'none' : 'inline-block')};
    margin-right: 1em;
  }
  &:after {
    display: ${props => (props.next ? 'inline-block' : 'none')};
    margin-left: 1em;
  }
  &:hover,
  &:focus {
    background: ${({ styles }) => styles.color.dark};
  }
  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    animation: ${props => (props.next ? 'pushnext' : 'pushprev')} 0.8s linear infinite;
  }
  @media screen and (max-width: 900px) {
    min-width: 48%;
    text-align: ${props => (props.next ? 'left' : 'right')};
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
