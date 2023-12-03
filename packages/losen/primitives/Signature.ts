import styled from "styled-components";

import injectStyles from "../utils/inject-styles";

const Signature = injectStyles(styled.div`
  width: 100%;
  max-width: 300px;
  margin: 80px auto 30px 0;
  border-top: 0.5px solid black;
  @media print {
    page-break-inside: avoid;
  }
`);

export default Signature;
