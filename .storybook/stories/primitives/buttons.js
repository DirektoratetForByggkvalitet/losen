import React from 'react';
import { MainButton, NavButton, SmallButton } from '../../../src/web/primitives/Button';
import { H1 } from '../../../src/web/primitives/Heading';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Buttons</H1>
    <p>Most buttons look like this</p>
    <MainButton>Main button</MainButton>
    <p>Some buttons are nice and small</p>
    <SmallButton>Small button</SmallButton>
    <h2>Navigation</h2>
    <p>Buttons leading to the next step look like this</p>
    <NavButton next>Next</NavButton>
    <p>Buttons leading to the previous step look like this</p>
    <NavButton>Previous</NavButton>
  </div>);
}
