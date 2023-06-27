import styled from "styled-components";

import injectStyles from "../utils/inject-styles";

export const Export = injectStyles(styled.div`
  @media print {
    display: none;
  }
`);
