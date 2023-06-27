import React from 'react';
import StyledSignature from "losen/primitives/Signature";
import PrintForm from "losen/primitives/PrintForm";

export default function Signature() {
  return (
    <PrintForm>
      <StyledSignature>
        <div>Dato og signatur</div>
      </StyledSignature>
    </PrintForm>
  );
}
