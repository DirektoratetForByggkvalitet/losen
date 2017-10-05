import React from 'react';

/* eslint-disable */
import { storiesOf, addDecorator } from '@storybook/react';
/* eslint-enable */

import Navigation from '../../src/web/components/Navigation';
import StyleProvider from '../../src/web/components/StyleProvider';

addDecorator(storyFn => (
  <div className="container">
    <link href="/storybook.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Roboto+Mono:300,400" rel="stylesheet" />

    <StyleProvider styles={{ font: { primary: 'Source Sans Pro', secondary: 'Source Sans Pro' } }}>
      {storyFn()}
    </StyleProvider>
  </div>
));

storiesOf('Welcome', module)
  .add('to the Losen framework', require('./welcome').default)
  .add('Getting started', require('./welcome/gettingStarted').default);

storiesOf('Schema', module)
  .add('Intro', require('./schema/intro').default)
  .add('The building blocks', require('./schema/buildingBlocks').default)
  .add('Branching', require('./schema/branching').default)
  .add('Validation', require('./schema/validation').default)
  .add('Translating', require('./schema/translating').default);

storiesOf('DSL', module)
  .add('Intro', require('./dsl/intro').default)
  .add('Simple types', require('./dsl/simpleTypes').default)
  .add('Complex types', require('./dsl/complexTypes').default)
  .add('Parsing', require('./dsl/parsing').default);

storiesOf('Visual primitives', module)
  .add('Intro', require('./primitives/intro').default)
  .add('Buttons', require('./primitives/buttons').default);

storiesOf('Navigation', module)
  .add('with Next', () => <Navigation page={0} />)
  .add('with Previous', () => <Navigation />);
