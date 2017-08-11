import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Aside = injectStyles(styled.aside`
  background-color: ${props => props.active ? '#fff' : '#000'};
`);

export default Aside;
