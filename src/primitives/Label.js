import styled from 'styled-components';

import { injectStyles } from '../utils';

const Label = injectStyles(styled.label`
  padding: ${({ styles }) => styles.padding.large};
  text-transform: uppercase;
`);

export default Label;
