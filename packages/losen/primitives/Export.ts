import styled from "styled-components";

import injectStyles from "../utils/inject-styles";

export const Export = injectStyles(styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  @media print {
    display: none;
  }
`);

export const ExportButtonWrapper = injectStyles(styled.div`
  display:flex;
  flex-grow: 0;
  flex-basis: 100%;

  > * {
    flex-basis: 100%;
  }
`)