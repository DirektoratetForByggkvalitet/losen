import React from 'react';
import { H1 } from '../../../src/web/primitives/Heading';
import { SelectWrapper } from '../../../src/web/primitives/Input';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Select</H1>
    <SelectWrapper>
      <select>
        <option>Cats</option>
        <option>Dogs</option>
        <option>Aliens</option>
      </select>
    </SelectWrapper>
  </div>);
}
