import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";

export const Grid = injectStyles(styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    display: block;
  }
  @media print {
    display: block;
  }
`);
