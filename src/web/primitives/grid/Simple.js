import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Simple = injectStyles(styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${({ padItems }) => padItems ? `
    > * {
      margin-right: 1px !important;

      &:last-child { margin-right: 0 !important; }
    }
` : ''}

  @media screen and (max-width: 900px) {
        display: block;
  }
  
  @media print {
        display: block;
  }
`);

export default Simple;
