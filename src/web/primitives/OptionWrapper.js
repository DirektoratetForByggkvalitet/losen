import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const OptionWrapper = injectStyles(styled.div`
  background: ${props => (props.grid ? 'hotpink' : 'none')};
`);

export default OptionWrapper;
