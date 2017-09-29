import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Details = injectStyles(styled.details`margin-top: 40px;`);

export const Summary = injectStyles(styled.summary`
  color: blue;
  text-decoration: underline;
`);
