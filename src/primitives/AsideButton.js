import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const AsideResult = injectStyles(styled.div`
  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  color: white;
  background: ${({ styles }) => styles.color.light};
  width: 100%;
  padding: 12px 18px 13px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 0;
  appearance: none;
  margin-top: 10px;
  margin-right: ${props => props.next ? '0' : 'auto'};
  margin-left: ${props => props.next ? 'auto' : '0'};
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`);

export const AsideReset = injectStyles(styled.button`
  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  color: ${({ styles }) => styles.color.light};
  background: white;
  width: 100%;
  padding: 12px 18px 13px;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${({ styles }) => styles.color.light};
  border-radius: 0;
  appearance: none;
  margin-right: ${props => props.next ? '0' : 'auto'};
  margin-left: ${props => props.next ? 'auto' : '0'};
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`);

