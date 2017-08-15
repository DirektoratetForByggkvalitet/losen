import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const H1 = injectStyles(styled.h1`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => props.small ? '20px' : '42px'};
  font-weight: ${props => props.small ? '300' : '500'};
`);

export const H2 = injectStyles(styled.h2`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => props.small ? '20px' : '32px'};
  margin: 0 0 10px;
`);

export const H3 = injectStyles(styled.h3`
  font-family: ${({ styles }) => styles.font.secondary};
  font-size: ${props => (props.small ? '16px' : '24px')};
  margin: 0 0 10px;
`);
