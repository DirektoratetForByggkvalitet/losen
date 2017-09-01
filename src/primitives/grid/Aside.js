import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const Aside = injectStyles(styled.aside`
  grid-area: aside;
  padding: 0 20px;

  ${props => (
    props.tocExpanded
    ? `@media screen and (max-width: 700px) {
      display: none;
    }` : ''
  )}
`);

export default Aside;
