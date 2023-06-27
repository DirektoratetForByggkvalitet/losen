import styled from "styled-components";

import injectStyles from "../../utils/inject-styles";

export const FocusWrapper = injectStyles(styled.div`
  display: block;
  &:focus {
    outline: none;
  }
`);
