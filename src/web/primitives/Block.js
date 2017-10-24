import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const SpecificBlock = injectStyles(styled.div`
  position: relative;
  padding: ${props => (props.grouped ? '20px 24px 20px' : '30px 33px 36px')};
  margin: 20px 0;
  width: 100%;
  background: ${props =>
    props.grouped ? 'rgba(137, 174, 196, 0.15)' : 'white'};
  &:nth-child(even) {
    background: ${props =>
    props.grouped ? 'rgba(0, 117, 127, 0.06)' : '#fdfdfd'};
  }
  box-shadow: ${props =>
    props.grouped ? 'none' : '0 2px 3px rgba(0, 0, 0, 0.18)'};
  p {
    margin-top: 0;
    font-weight: 300;
  }

  ${props =>
    props.debug
      ? `
  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`
      : ''} ${props =>
  props.grouped
    ? `
  h2 {
    font-size: 18px;
    margin-bottom: 4px;
  }`
    : ' '} ${props =>
  props.groupedSimple
    ? `
  margin-top: 36px;
  padding: 0;
  background: none;
  &:nth-child(even) {
    background: none;
  }`
    : ' '} ${props =>
  props.type === 'Table'
    ? `
  table {
    text-align: center;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${props.styles.color.darkgray};
    border-collapse: collapse;
    th {
      font-weight: inherit;
    }
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
    td,th {
      ${props.debug
    ? `
      :hover {
        position: relative;

        :before {
          content: attr(data-id);
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          background: deeppink;
          color: white;
          font-size: 14px;
          padding: 2px 6px;
        }
      }`
    : ''}
    }
  }
  `
    : ' '} @media screen and (max-width: 700px) {
    padding: ${props => (props.grouped ? '20px 12px' : '20px 16px')};
    ${props =>
    props.groupedSimple
      ? `
    margin-top: 24px;
    padding: 0;
    `
      : ' '};
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

  ${props =>
    props.debug
      ? `
  position: relative;

  :before {
    content: attr(data-id);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: deeppink;
    color: white;
    font-size: 14px;
    padding: 2px 6px;
  }`
      : ''} p {
    margin: 1em 0;
    line-height: 1.6;
    max-width: 600px;
  }
  @media screen and (max-width: 700px) {
    padding: 20px 0;
  }

  ${props =>
    props.printonly
      ? `
    display: none;
    @media print {
      font-size: 12px;
      display: block;
    }`
      : ''};

  ${props =>
    props.printhide
      ? `
        @media print {
          display: none;
        }`
      : ''};
`);
