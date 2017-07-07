import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const H1 = injectStyles(styled.h1`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => props.small ? '20px' : '38px'};
`);

export const H2 = injectStyles(styled.h2`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => props.small ? '20px' : '28px'};
`);

export const H3 = injectStyles(styled.h3`
  font-size: ${props => (props.small ? '16px' : '20px')};
  margin: 0;
`);
