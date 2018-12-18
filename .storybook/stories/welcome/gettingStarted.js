import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function Welcome() {
  return (
    <div>
      <H1>Getting started</H1>
      <p>The easiest way to get started is to use our example.</p>
      <H2>Setup</H2>
      <ol>
        <li>
          <strong>
            Grab our <a href="https://github.com/DirektoratetForByggkvalitet/losen/tree/master/example">example repo</a>{' '}
            from GitHub, and follow the instructions.
          </strong>
          <br />
          This contains a complete working wizard, where data handling, JSON export, offline storage and all is set up
          for you.
          <br />
          <br />
        </li>
        <li>
          <strong>
            Edit or replace the{' '}
            <a href="https://github.com/DirektoratetForByggkvalitet/losen/blob/master/example/src/api/cat.json">
              example schema
            </a>
            .
          </strong>
          <br />
          Take a look at our{' '}
          <a href="https://dibk-storybook.firebaseapp.com/?selectedKind=Schema">schema documentation</a> for how to set
          up your custom schema structure.
          <br />
          <br />
        </li>
        <li>
          <strong>Custom styling</strong>
          <br /> Losen uses Styled Components for styling. Currently only a few theming options are available.
        </li>
      </ol>
      <H2>Build and deploy</H2>
      <p>The wizard can be be used as a stand alone site or embedded on your current site.</p>
      <H3>Use as a stand alone site</H3>
      <p>
        Run <code>npm run build</code>
        <br />
        This creates a /build folder with a index.html. Run it to see your wizard.
      </p>
      <H3>Use embedded</H3>
      <ol>
        <li>
          Create an empty placeholder on your site where you want the wizard to show up, and give it an unique id.
          <br />
          Example: <code>{`<div id=“wizard-example”></div>`}</code>
          <br />
          <br />
        </li>
        <li>
          Update{' '}
          <a href="https://github.com/DirektoratetForByggkvalitet/losen/blob/master/example/src/index.js">index.js</a>{' '}
          to match your unique id.
          <br />
          Example: <code>{`ReactDOM.render(<App />, document.getElementById(‘wizard-example’))`}</code>
          <br />
          <br />
        </li>
        <li>
          Run <code>npm run build</code>
          <br />
          This creates a /build folder. Copy the <code>/build/static/js</code> file and embed on your site
          <br />
          Example: <code>{`<script type="text/javascript" src="/static/js/main.536c234c.js"></script>`}</code>
          <br />
          <br />
        </li>
        <li>The wizard should now show up on your site :)</li>
      </ol>
    </div>
  );
}
