import React from 'react';
import { H1, H3 } from '../../../src/web/primitives/Heading';
import { Details, Summary } from '../../../src/web/primitives/details';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Details</H1>
    <Details>
      <Summary>See examples</Summary>
      <div>
        <h3>An example</h3>
        <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
        <h3>Another example</h3>
        <p>Omnium prompta placerat in sed. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
        <h3>A different example</h3>
        <p>Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
      </div>
    </Details>
  </div>);
}
