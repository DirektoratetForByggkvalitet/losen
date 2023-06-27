import styled from "styled-components";

import injectStyles from "../utils/inject-styles";

const ModalBox = injectStyles(styled.div`
  display: block;
  max-width: 666px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 0;
  padding: 40px 60px;
  text-align: center;
`);

export default ModalBox;
