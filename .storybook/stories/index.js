import React from 'react';

/* eslint-disable */
import { storiesOf, addDecorator } from '@storybook/react';
/* eslint-enable */

import Navigation from '../../src/web/components/Navigation';
import StyleProvider from '../../src/web/components/StyleProvider';

addDecorator(storyFn => (
  <div className="container">
    <link href="/storybook.css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Roboto+Mono:300,400"
      rel="stylesheet"
    />

    <StyleProvider>{storyFn()}</StyleProvider>
  </div>
));

storiesOf('Welcome', module)
  .add('to the Losen framework', require('./welcome').default)
  .add('Getting started', require('./welcome/getting-started').default)
  .add('The Wizard component', require('./welcome/wizard-component').default)
  .add('Schema intro', require('./welcome/the-schema').default);

storiesOf('The building blocks', module)
  .add('Page', require('./building-blocks/page').default)
  .add('Result', require('./building-blocks/result').default)
  .add('Group', require('./building-blocks/group').default)
  .add('Input', require('./building-blocks/input').default)
  .add('Number', require('./building-blocks/number').default)
  .add('Checkbox', require('./building-blocks/checkbox').default)
  .add('Radio', require('./building-blocks/radio').default)
  .add('Select', require('./building-blocks/select').default)
  .add('Answer', require('./building-blocks/answer').default)
  .add('Message', require('./building-blocks/message').default)
  .add('Sum', require('./building-blocks/sum').default)
  .add('Image', require('./building-blocks/image').default)
  .add('Text', require('./building-blocks/text').default)
  .add('Evaluation', require('./building-blocks/evaluation').default)
  .add('Switch', require('./building-blocks/switch').default)
  .add('The building blocks', require('./building-blocks/building-blocks').default)
  .add('Branching', require('./schema/branching').default)
  .add('References', require('./schema/references').default)

storiesOf('Schema features', module)
  .add('Validation', require('./schema/validation').default)
  .add('Translating', require('./schema/translating').default)
  .add('Data export', require('./schema/data-export').default)
  .add('Computed properties', require('./schema/computed-props').default)
  .add('External data', require('./schema/external-data').default);

storiesOf('DSL', module)
  .add('Intro', require('./dsl/intro').default)
  .add('Simple types', require('./dsl/simple-types').default)
  .add('Complex types', require('./dsl/complex-types').default)
  .add('Custom errors', require('./dsl/custom-errors').default)
  .add('Parsing', require('./dsl/parsing').default);

storiesOf('Visual primitives', module)
  .add('Intro', require('./primitives/intro').default)
  .add('Headings', require('./primitives/headings').default)
  .add('Paragraphs', require('./primitives/paragraphs').default)
  .add('Buttons', require('./primitives/buttons').default)
  .add('Input: Radio', require('./primitives/input-radio').default)
  .add('Input: Checkbox', require('./primitives/input-checkbox').default)
  .add('Input: Text', require('./primitives/input-text').default)
  .add('Input: Number', require('./primitives/input-number').default)
  .add('Select', require('./primitives/select').default)
  .add('Textarea', require('./primitives/textarea').default)
  .add('Table', require('./primitives/table').default)
  .add('Images', require('./primitives/images').default)
  .add('Details', require('./primitives/details').default)
  .add('Errors', require('./primitives/errors').default)
  .add('Loading', require('./primitives/loading').default)
  .add('Menu', require('./primitives/menu').default)
  .add('Blocks', require('./primitives/blocks').default)
  .add('Signature', require('./primitives/signature').default);

storiesOf('Examples', module).add('Disqualifying error', require('./examples/errors').default);

storiesOf('Navigation', module)
  .add('with Next', () => <Navigation page={0} />)
  .add('with Previous', () => <Navigation />);
