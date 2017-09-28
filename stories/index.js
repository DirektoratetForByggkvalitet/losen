import React from 'react';

/* eslint-disable */
import { storiesOf, addDecorator } from '@storybook/react';
/* eslint-enable */

import Navigation from '../src/web/components/Navigation';
import StyleProvider from '../src/web/components/StyleProvider';

addDecorator(storyFn => (
  <div style={{ width: '100%', maxWidth: '750px', margin: '0 auto' }}>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" />

    <StyleProvider styles={{ font: { primary: 'Source Sans Pro', secondary: 'Source Sans Pro' } }}>
      {storyFn()}
    </StyleProvider>
  </div>
));

storiesOf('Welcome', module)
  .add('to the wizard framework', require('./welcome').default)
  .add('Getting started', require('./welcome/gettingStarted').default);

storiesOf('Schema', module)
  .add('Intro', require('./schema/intro').default)
  .add('The building blocks', require('./schema/buildingBlocks').default)
  .add('Branching', require('./schema/branching').default)
  .add('Validation', require('./schema/validation').default);

storiesOf('DSL', module)
  .add('Intro', require('./dsl/intro').default)
  .add('Simple types', require('./dsl/simpleTypes').default)
  .add('Complex types', require('./dsl/complexTypes').default)
  .add('Parsing', require('./dsl/parsing').default);

storiesOf('Wizard block elements', module)
  .add('Page', require('./wizardBlockElements/page').default)
  .add('Branch', require('./wizardBlockElements/branch').default)
  .add('Checkbox', require('./wizardBlockElements/checkbox').default)
  .add('Radio', require('./wizardBlockElements/radio').default)
  .add('Select', require('./wizardBlockElements/select').default)
  .add('Input', require('./wizardBlockElements/input').default)
  .add('Missing', require('./wizardBlockElements/missing').default)
  .add('Number', require('./wizardBlockElements/number').default);

storiesOf('Visual primitives', module)
  .add('Intro', () => <div>Interesting stuff about 🌈 and 💅</div>);

storiesOf('Navigation', module)
  .add('with Next', () => <Navigation page={0} />)
  .add('with Previous', () => <Navigation />);
