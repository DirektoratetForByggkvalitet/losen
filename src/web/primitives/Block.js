import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const SpecificBlock = injectStyles(styled.div`
  position: relative;
  padding: ${props => props.grouped ? '20px 24px 20px' : '30px 33px 36px'};
  margin: 20px 0;
  width: 100%;
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
    font-size: 12px;
  }` : ''}

  ${props => props.grouped ? `
  h2 {
    font-size: 18px;
    margin-bottom: 4px;
  }` : ' '}

  ${props => props.groupedSimple ? `
  margin-top: 36px;
  padding: 0;
  background: none;
  &:nth-child(even) {
    background: none;
  }` : ' '}

  ${props => (props.type === 'Table') ? `
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${props.styles.color.darkgray};
    border-collapse: collapse;
    th, td {
      border: 1px solid ${props.styles.color.darkgray};
      padding: 10px;
    }
    th > *,
    td > * {
      vertical-align: middle;
      margin: 0;
      line-height: 1.3;
    }
  }
  ` : ' '}

  @media screen and (max-width: 700px) {
    padding: ${props => props.grouped ? '20px 0' : '20px'};
    ${props => props.groupedSimple ? `
    margin-top: 24px;
    padding: 0;
    ` : ' '}
  }

  @media print {
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
  }
`);

export const TextBlock = injectStyles(styled.div`
  padding: 30px 33px 36px;
  margin: 20px 0;
  width: 100%;

  ${props => props.debug ? `
  position: relative;

  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 12px;
  }` : ''}

  ${props => props.warning ? `
  border: 10px solid hsl(0, 100%, 50%);
  background: #ddd;
  animation: rainbow 1s infinite;

  @keyframes rainbow {
    0% {
      color: hsl(0, 100%, 50%);
      border-color: hsl(0, 100%, 50%);
    }
    33% {
      color: hsl(155, 66%, 50%);
      border-color: hsl(155, 66%, 50%);
    }
    66% {
      color: hsl(200, 85%, 33%);
      border-color: hsl(200, 85%, 33%);
    }
    85% {
      color: hsl(255, 100%, 50%);
      border-color: hsl(255, 100%, 50%);
    }
    100% {
      color: hsl(0, 100%, 50%);
      border-color: hsl(0, 100%, 50%);
    }
  }
  ` : ''}

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
