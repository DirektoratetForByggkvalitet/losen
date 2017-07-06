import styled from 'styled-components';

import defaultStyles from '../styles';
import { injectStyles } from '../utils';

const Label = injectStyles(styled.label`
  display: block;
`);

Label.defaultProps = {
  styles: defaultStyles,
};

export default Label;
