import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

export const Label = injectStyles(styled.label`
  display: block;
  position: relative;
  margin-top: 10px;
  background: ${props => (props.warning ? 'rgba(255, 0, 0, 0.05)' : 'white')};

  ${props =>
    props.debug
      ? `
  > div {
    :before {
      content: attr(data-id);
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      background: deeppink;
      color: white;
      font-size: 14px;
      padding: 2px 6px;
    }
  }`
      : ''};
`);

export const SRLabel = injectStyles(styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`);
