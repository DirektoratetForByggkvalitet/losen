import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import { Textarea } from '../../../src/web/primitives/Input';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Text inputs</H1>
    <H2>Regular</H2>
    <div>
        <Textarea />
    </div>
    <hr />
    <H2>With placeholder</H2>
    <div>
        <Textarea placeholder="Here's some text for you ma'am. Pretty neat!" />
    </div>
  </div>);
}
