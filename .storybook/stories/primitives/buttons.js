import React from 'react';
import { MainButton, NavButton, SmallButton, SecondaryButton } from '../../../src/web/primitives/Button';
import { H1, H2 } from '../../../src/web/primitives/Heading';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Buttons</H1>
    <H2>Main button</H2>
    <MainButton>Main button</MainButton>
    <hr />
    <H2>Secondary button</H2>
    <SecondaryButton>Secondary button</SecondaryButton>
    <hr />
    <H2>Small button</H2>
    <p>Used only on result page.</p>
    <SmallButton>Small button</SmallButton>
    <hr />
    <H2>Navigation</H2>
    <p>Buttons leading to the next step look like this</p>
    <NavButton next>Next</NavButton>
    <p>Buttons leading to the previous step look like this</p>
    <NavButton>Previous</NavButton>
  </div>);
}
