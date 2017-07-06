import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const H1 = injectStyles(styled.h1`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => props.small ? '20px' : '38px'};
  color: ${({ styles }) => styles.color.primary};
`);

export const H2 = injectStyles(styled.h2`
  font-size: ${props => props.small ? '20px' : '28px'};
  color: ${({ styles }) => styles.color.primary};
`);

export const H3 = injectStyles(styled.h3`
  font-size: ${props => (props.small ? '16px' : '20px')};
  color: ${({ styles }) => styles.color.primary};
`);

export const H4 = injectStyles(styled.h4`
  margin-bottom: 0;
`);
