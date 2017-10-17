import React from 'react';
import { H1, H2 } from '../../../src/web/primitives/Heading';
import Figure from '../../../src/web/primitives/Figure';

export default function PrimitivesIntro() {
  return (<div>
    <H1>Images</H1>
    <H2>Figure</H2>
    <Figure>
      <img src="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg" alt="alt" />
      <figcaption>
        Captions look like this
      </figcaption>
    </Figure>
  </div>);
}
