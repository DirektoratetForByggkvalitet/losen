import styled from "styled-components";

import injectStyles from "../utils/inject-styles";
import { PrimitiveProps } from "../styles";

export type NavProps = PrimitiveProps<{
  next?: boolean;
}>;

export const NavResult = injectStyles(styled.div<NavProps>`
  font-family: ${({ styles }) => styles?.font?.secondary};
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  color: white;
  background: ${({ styles }) => styles?.color?.light};
  width: 100%;
  padding: 12px 18px 13px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 0;
  appearance: none;
  margin-top: 30px;
  margin-right: ${(props) => (props?.next ? "0" : "auto")};
  margin-left: ${(props) => (props?.next ? "auto" : "0")};
  margin-bottom: 10px;
  position: relative;
  transition: background 0.1s ease-in-out;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  &:hover {
    background: ${({ styles }) => styles?.color.dark};
  }
`);

export const NavReset = injectStyles(styled.button<NavProps>`
  font-family: ${({ styles }) => styles?.font.secondary};
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  color: ${({ styles }) => styles?.color.light};
  background: white;
  width: 100%;
  padding: 12px 18px 13px;
  cursor: pointer;
  user-select: none;
  border: 1px solid ${({ styles }) => styles?.color.warmgray2};
  border-radius: 0;
  appearance: none;
  margin-right: ${(props) => (props.next ? "0" : "auto")};
  margin-left: ${(props) => (props.next ? "auto" : "0")};
  margin-bottom: 10px;
  position: relative;
  transition: all 0.1s ease-in-out;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  &:hover {
    background: ${({ styles }) => styles?.color.warmgray2};
  }
`);
