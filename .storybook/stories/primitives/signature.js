import React from 'react';
import { H1 } from '../../../src/web/primitives/Heading';
import Signature from '../../../src/web/primitives/Signature';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Signature</H1>
    <p>Sometimes the wizard is used to help the user fill out a form, which must then be printed and mailed to a physical address. In that case, the signature primitive appears on the printed page. The signature primitive should never be visible on the digital version of the result page.</p>
    <Signature>
      Date and signature
    </Signature>
  </div>);
}
