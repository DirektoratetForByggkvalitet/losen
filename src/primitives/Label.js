import styled from 'styled-components';

import defaultStyles from '../styles';
import { injectStyles } from '../utils';

const Label = injectStyles(styled.label`
  padding: ${({ styles }) => styles.padding.large};
  text-transform: uppercase;
`);

Label.defaultProps = {
  styles: defaultStyles,
};

export default Label;
