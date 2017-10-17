import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import Loading from '../../../src/web/primitives/Loading';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Loading</H1>
    <Loading>
      Loading something
    </Loading>
  </div>);
}
