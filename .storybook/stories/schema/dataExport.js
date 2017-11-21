import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';

export default function DataExport() {
  return (
    <div>
      <H1>Data export</H1>
      <p>
        Losen features a data export feature that lets the users take their data with them and
        continue the process in other systems. Specifically this is done by declaring a function
        that gets the user input for the wizard as the first and only parameter, and transforms
        it to the structure the user should get to take with them.
      </p>

      <H2>The data exporter 🤓</H2>
      <pre>{`function exportData(state) {
  return {
    fraSluttbrukersystem: 'katteveiviser',
    eiendomByggested: {
      etasje: parseInt(state.living.floor, 10),
    },
    ansvarsrett: {
      noeGreier: 'her',
    },
  };
}
`}</pre>

      <p>
        ...so given this state at the end of the wizard: <code>{`{ living: { floor: '8' } }`}</code>,
        the JSON generated for the user to take with them looks like this:
      </p>

      <pre>{`{
  "fraSluttbrukersystem": "katteveiviser",
  "eiendomByggested": {
    "etasje": 8
  },
  "ansvarsrett": {
    "noeGreier": "her"
  }
}`}</pre>

      <H2>Passing the exporter to losen</H2>

      <p>
        The transformer function is defined in the wizard (not in losen itelf) and is passed as a prop
        to the <code>Wizard</code> component like this:
      </p>

      <pre>{`import dataExport from './path/to/your/exporter';

export default class App extends Component {
  ...

  render() {
    return (
      <Provider store={store}>
        <Wizard wizard={cat} exports={{ dataExport }} />
      </Provider>
    </div>
  )
}`}</pre>

      <p>
        And, later on when you want to connect it to a result page, you reference it with the same name
        as the property in the exports array. In this example, you would be able to reference the
        exporter by using the name <code>dataExport</code>, and it should show on the result page.
      </p>
    </div>
  )
}
