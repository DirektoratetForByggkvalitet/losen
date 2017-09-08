import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const ErrorMessage = injectStyles(styled.p`
  color: ${({ styles }) => styles.color.red};
`);

export const ErrorMessageAlt = injectStyles(styled.p`
  font-family: ${({ styles }) => styles.font.secondary};
`);
