import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const Notice = injectStyles(styled.div`
  background: ${({ styles }) => styles.color.lightgreen};
  font-weight: 300;
  font-size: 14px;
  margin: 20px 0 0;
  padding: 20px 24px 20px;
  h3 {
    font-size: 1em;
  }
  table {
    text-align: left;
  }
`);

export default Notice;
