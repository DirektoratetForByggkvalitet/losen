import React from 'react';

import { H1, H2, H3 } from '../../src/web/primitives/Heading';

export default function Welcome() {
  return (
    <div>
      <H1>Getting started</H1>
      <p>
        In order to get your wizard up and running, the easiest way to go about it is to grab the example
        repo from <a href="https://github.com/netliferesearch/dibk-wizard-framework/tree/master/example">github</a>.
        The example is a working wizard, where data handling, JSON export, offline storage and all is set up for you.
      </p>

      <H2>Installation</H2>
      <p>
        When you've got hold of the example wizard, you need to install the dependencies by
        running <code>npm install</code> before you can start the dev mode by running <code>npm start</code>. At
        this point the browser should open and you should see something wizard-like. In case you don't, you probably
        have some sort of error message in the terminal window where you performed the <code>npm start</code> command.
      </p>

      <H2>"The schema"</H2>
      <p>
        Throughout this documentation we'll refer to "the schema". More precisely, the schema is a formalized structure that
        describes your wizard. It contains most everything when it comes to the wizard, such as logical tests, branches, the
        input fields, result pages and pretty much everything else.
      </p>
      <p>The structure you have to abide by is described in much greater detail in the <em>Schema</em> section.</p>

      <H2>The Wizard component</H2>
      <p>
        The wizard framework exports a few components, of which Wizard is the most important. The Wizard component expects to
        have a Redux context, meaning is has to be put inside a <code>react-redux</code> Provider node. The reason we do it
        this way is because the wizard you create might want to make use of the data from the wizard, and if the Redux context
        was created inside the framework getting hold of the data would be more cumbersome. In addition to the Redux context,
        the Wizard requires one prop: <code>schema</code>.
      </p>

      <H3>Optional props</H3>
      <ul>
        <li>
          <code>styles</code>: styles object to override default styles in the framework.
        </li>

        <li>
          <code>exports</code>: an object with data export functions. The functions can be referred to from the Result page
          node in order to give the user a way of exportin their data. The functions is passed the entire wizard state data
          object and can do whatever it want with it before returning something that will be JSON encoded and presented to
          to the user.
        </li>
      </ul>

      <H2>Building and deploying</H2>
      <p>
        The framework is built without a running server backend as a requirement, and the example wizard reflects this and is
        set up for building a static bundle and deploying to firebase cloud hosting.
      </p>
      <p>
        If you want to deploy to the firebase CDN you need to set the project key in the <code>.firebaserc</code> when setting
        up a new wizard. When you've done that you have to install and login with the
        <a href="https://github.com/firebase/firebase-tools">firebase-tools</a>. When you've logged in deploying is as simple
        as <code>npm run deploy</code> and 🙏.
      </p>
    </div>
  );
}
