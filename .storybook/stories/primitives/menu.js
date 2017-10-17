import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import NavItem from '../../../src/web/primitives/NavItem';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Menu</H1>
    <H2>Menu item: Default</H2>
      <NavItem>
        <div>1</div>
        <p>
          Heading
        </p>
      </NavItem>
    <hr />
    <H2>Menu item: Active</H2>
      <NavItem active>
        <div>1</div>
        <p>
          Heading
        </p>
      </NavItem>
    <hr />
    <H2>Menu item: Done + inactive</H2>
      <NavItem done>
        <div>1</div>
        <p>
          Heading
          <span>Endre svar</span>
        </p>
      </NavItem>
    <hr />
    <H2>Menu item: Done + active</H2>
      <NavItem active done>
        <div>1</div>
        <p>
          Heading
        </p>
      </NavItem>
    <hr />
  </div>);
}
