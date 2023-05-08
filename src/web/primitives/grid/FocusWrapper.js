import styled from 'styled-components';

import injectStyles from '../../utils/inject-styles';

const FocusWrapper = injectStyles(styled.div`
  display: block;
  &:focus {
    outline: none;
  }
`);

export default FocusWrapper;
