import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const StyledSum = injectStyles(styled.div`
  padding: 0 33px 20px;
  width: 100%;
  span {
    display: block;
    font-size: 36px;
    font-weight: bold;
    line-height: 1em;
  }
  ${props =>
    props.groupedSimple
      ? `
      width: 33%;
      padding: 0 20px;
      display: inline-block;
      border-right: 1px solid ${props.styles.color.darkgray};
      &:last-of-type {
        border-right: none;
      }
      &:first-of-type {
        padding-left: 0;
      }
      `
      : ''}
  @media screen and (max-width: 900px) {
    width: 100%;
    display: block;
    padding: 0;
    span {
      font-size: 20px;
    }
  }
`);

export default StyledSum;
