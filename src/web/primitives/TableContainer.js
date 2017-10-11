import styled from 'styled-components';

import injectStyles from '../utils/inject-styles';

const TableContainer = injectStyles(styled.div`
  overflow: auto;
  max-width: 100%;
`);

export default TableContainer;
