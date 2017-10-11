import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Label = injectStyles(styled.label`
  display: block;
  margin-top: 10px;
  background: ${props => (props.warning ? 'rgba(255, 0, 0, 0.05)' : 'white')};
`);

export default Label;
