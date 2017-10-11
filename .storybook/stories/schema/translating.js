import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function SchemaTranslating() {
  return (
    <div>
      <H1>Schema translation</H1>
      <p>
        A common use case when building services such as wizards is the need for a way of updating texts and images in the
        wizard without having to build and deploy the wizards, preferably through a CMS.
      </p>

      <p>
        In <em>losen</em> this is handled by allowing you to pass a translations object to the <code>Wizard</code> node
        when rendering the wizard. The keys of the object corresponds to the id on the nodes in the schema. Given that we
        have for instance an Input node in our schema with the <code>id</code> property set to apekatt, the translations
        object would look like this 👇
      </p>

      <pre>{`const trans = {
  apekatt: {
    heading: "A fun heading 🐒"
  }
}`}</pre>

      <p>With the translation above, the field will get the heading "A fun heading 🐒".</p>

      <H2>Properties for translation items</H2>
      <p>
        Below is an example showing a translation object with all the available properties for an item in the translations
        object.
      </p>

      <pre>{`{
  apekatt: {
    heading: "Heading for the node",
    description: "A longer explanation. Simple HTML is ok if you want to.",
    image: {
      large: "https://url.to/large/image.png",
      small: "https://url.to/small/image.png",
    }
  }
}`}</pre>

      <H2>Finding the schema node IDs</H2>
      <p>
        When working with the content in the wizard, append `?debug` to the page url to show the
        id of all the nodes in the wizard. The nodes ids will show as pink labels in the top-right
        corner of the component.
      </p>
    </div>
  )
}

