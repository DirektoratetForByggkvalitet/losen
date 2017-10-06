import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const SpecificBlock = injectStyles(styled.div`
  position: relative;
  padding: ${props => props.grouped ? '20px 24px 20px' : '30px 33px 36px'};
  margin: 20px 0;
  max-width: ${({ styles }) => styles.size.blockWidth};
  background: ${props => props.grouped ? 'rgba(137, 174, 196, 0.15)' : 'white'};
  &:nth-child(even) {
    background: ${props => props.grouped ? 'rgba(0, 117, 127, 0.06)' : '#fdfdfd'};
  }
  box-shadow: ${props => props.grouped ? 'none' : '0 2px 3px rgba(0, 0, 0, 0.18)'};
  p {
    margin-top: 0;
    font-weight: 300;
  }

  ${props => props.debug ? `
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    padding: 2px;
    font-size: 12px;
  }` : ''}

  ${props => props.grouped ? `
  h3 {
    font-size: 18px;
  }` : `
  h3 {
    font-size: 22px;
  }`}

  ${props => props.groupedSimple ? `
  padding: 0;
  background: none;
  &:nth-child(even) {
    background: none;
  }` : ' '}

  @media screen and (max-width: 700px) {
    padding: ${props => props.grouped ? '20px 0' : '20px'};
  }
`);

export const TextBlock = injectStyles(styled.div`
  padding: 30px 33px 36px;
  margin: 20px 0;
  max-width: ${({ styles }) => styles.size.blockWidth};
  p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 20px 0;
  }
`);

/*
  background: #ECF2F6;
  &:nth-child(odd) {
    background: #DBE8F0;
  }
*/
