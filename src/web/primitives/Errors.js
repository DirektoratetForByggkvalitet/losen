import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const ErrorMessage = injectStyles(styled.p`
  color: ${({ styles }) => styles.color.red};
  svg {
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    vertical-align: middle;
  }
`);

export const ErrorMessageAlt = injectStyles(styled.p`
  font-family: ${({ styles }) => styles.font.secondary};
`);
