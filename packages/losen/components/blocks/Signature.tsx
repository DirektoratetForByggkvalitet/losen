import React from 'react';
import StyledSignature from "../../primitives/Signature";
import PrintForm from "../../primitives/PrintForm";

export default function Signature() {
  return (
    <PrintForm>
      <StyledSignature>
        <div>Dato og signatur</div>
      </StyledSignature>
    </PrintForm>
  );
}
