import styled from "styled-components";

import injectStyles from "utils/inject-styles";

export const FocusWrapper = injectStyles(styled.div`
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
`);
