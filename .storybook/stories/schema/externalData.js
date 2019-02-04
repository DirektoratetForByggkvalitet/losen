import React from 'react';

import { H1, H2 } from '../../../src/web/primitives/Heading';

export default function ComputedProps() {
  return (
    <div>
      <H1>External data</H1>
      <p>
        The store used by losen is created outside losen in order to make it
        possible to manipulate it from the outside. Usually you won't need to,
        but you might find the need.
      </p>
      <p>
        As an example: in one of DiBKs wizard there was a need for linking the
        user from an article on the page, directly to the second page of the 
        wizard. This was made possible through a redux middleware that sets 
        custom data on the store, which losen in turn can react to.
      </p>
      <p>
        There are more than one way to do this, depending on what you want to 
        achieve, but here is the implementation for <a href="https://github.com/DirektoratetForByggkvalitet/dibk-prodok-sjekkliste/blob/master/src/helpers/handle-deeplink.js">deep links</a>
        {' '}in <code>dibk-prodok-sjekkliste</code>.
      </p>

      <H2>Scope for setting properties</H2>
      <p>
        Losen cleans up the state and removes values for nodes that no longer 
        exist in the wizard tree. As a consequence, you cannot just create a 
        property in the state – it wouldn't belong to a question that is showing
        and will be removed by losen.
      </p>
      <p>
        However, if you set an object property in the <code>$external</code> object 
        in state, losen won't do anything to it when cleaning up and you can access
        it just like any other property in state from the wizard.
      </p>
      <H2>Example</H2>
      <p>
        If you set a property like this 👇, it will be left alone, and you can 
        reference it in the schema as <code>$external.enteredFromMagicLink</code>.
      </p>
      <pre>{`{
  ...
  $external: {
    enteredFromMagicLink: true
  }
}`}</pre>
    </div>
  );
}
