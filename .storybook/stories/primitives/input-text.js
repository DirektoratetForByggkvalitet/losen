import React from 'react';
import { H1, H2, H3 } from '../../../src/web/primitives/Heading';
import { TextInput } from '../../../src/web/primitives/Input';
import { Label } from '../../../src/web/primitives/Label';
import SoftWarning from '../../../src/web/primitives/SoftWarning';
import Fieldset from '../../../src/web//primitives/Fieldset';
import Legend from '../../../src/web//primitives/Legend';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Text inputs</H1>
    <H2>Regular</H2>
    <div>
        <TextInput />
    </div>
    <hr />
    <H2>With placeholder</H2>
    <div>
        <TextInput placeholder="hei" />
    </div>
  </div>);
}
