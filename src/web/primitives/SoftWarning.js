import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const SoftWarning = injectStyles(styled.p`
  display: block;
  margin-top: 0;
  color: ${props => (props.warning ? props.styles.color.red : props.styles.color.green)};
  font-style: italic;
  font-weight: normal !important;
`);

export default SoftWarning;
