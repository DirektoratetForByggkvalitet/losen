import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function Welcome() {
  return (
    <div>
      <H1>The Wizard component</H1>
      <p>
        The wizard framework exports a few components, of which Wizard is the most important. The
        Wizard component expects to have a Redux context, meaning is has to be put inside a{' '}
        <code>react-redux</code> Provider node. The reason we do it this way is because the wizard
        you create might want to make use of the data from the wizard, and if the Redux context was
        created inside the framework getting hold of the data would be more cumbersome. In addition
        to the Redux context, the Wizard requires one prop: <code>schema</code>, being the wizard
        description json.
      </p>

      <H2>Optional props</H2>
      <ul>
        <li>
          <code>styles</code>: styles object to override default styles in the framework.
        </li>
        <li>
          <code>exports</code>: an object with data export functions. The functions can be referred
          to from the Result page node in order to give the user a way of exportin their data. The
          functions is passed the entire wizard state data object and can do whatever it want with
          it before returning something that will be JSON encoded and presented to to the user.
        </li>
        <li>
          <code>warningBeforeUnload</code>: whether or not the user should be prompted if he 
          really wants to leave and that information may be lost, when he navigates away from the
          wizard or close the window. Boolean value, default: `true`
        </li>
        <li>
          <code>translations</code>: An object containing translations/texts for the wizard. Described
          in further details in the <a href="/?selectedKind=Schema&selectedStory=Translating"><em>translations</em></a> chapter.
        </li>
      </ul>

      <H2>Example</H2>
      <pre>{`import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import { Wizard, StyleProvider } from 'losen';
import store from './store';
import catWizardSchema from './api/cat.json';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Wizard
          wizard={catWizardSchema} 
          warningBeforeUnload={false}
        />
      </Provider>
    );
  }
}`}</pre>
    </div>
  );
}
