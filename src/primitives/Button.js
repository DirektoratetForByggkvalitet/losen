import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Button = injectStyles(styled.button`
  margin: 10px;
  padding: 12px 12px;
  font-size: 22px;
  cursor: pointer;
  user-select: none;
  border: 0 none;
  border-radius: 4px;
  appearance: none;
  color: #fff;
  background: #416dea;
`);

export default Button;
