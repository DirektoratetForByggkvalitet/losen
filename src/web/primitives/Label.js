import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Label = injectStyles(styled.label`
  display: block;
  position: relative;
  margin-top: 10px;
  background: ${props => (props.warning ? 'rgba(255, 0, 0, 0.05)' : 'white')};

  ${props => props.debug ? `
  > div {
    :before {
      content: attr(data-id);
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      background: deeppink;
      color: white;
      font-size: 12px;
    }
  }` : ''}
`);

export default Label;
