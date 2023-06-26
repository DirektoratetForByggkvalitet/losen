import styled from "styled-components";

import injectStyles from "../utils/inject-styles";

const SRLegend = injectStyles(styled.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`);

export default SRLegend;
