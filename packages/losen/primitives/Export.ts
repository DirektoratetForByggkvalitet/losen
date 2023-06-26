import styled from "styled-components";

import injectStyles from "../utils/inject-styles";

export const Export = injectStyles(styled.div`
  padding: 20px 0 200px;
  @media print {
    display: none;
  }
`);
