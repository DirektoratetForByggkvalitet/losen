import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Information = injectStyles(styled.div`
  svg {
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.25em;
  }

  ${props => props.withHeading ? `
    .headerWrap {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      h2 {
        margin-bottom: 0;
        display: inline-block;
      }
    }
  ` : `
    div,
    p {
      display: inline;
    }
  `}
`);

export default Information;
