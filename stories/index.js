import React from 'react';

import { storiesOf } from '@storybook/react'; /* eslint import/no-extraneous-dependencies: 0 */

import Welcome from './Welcome';
import Page from './Page';
import Branch from './Branch';
import Navigation from '../src/components/Navigation';
import Number from '../src/components/blocks/Number';
import Missing from '../src/components/blocks/Missing';
import Input from '../src/components/blocks/Input';
import Select from '../src/components/blocks/select/Select';
import Radio from '../src/components/blocks/radio/Radio';
import Checkbox from '../src/components/blocks/checkbox/Checkbox';

storiesOf('Welcome', module).add('', () => <Welcome />);

storiesOf('Page', module).add('', () => <Page />);

storiesOf('Branch', module).add('', () => <Branch />);

storiesOf('Checkbox', module).add('Checkbox', () => <Checkbox />);

storiesOf('Radio', module).add('Radio', () => <Radio />);

storiesOf('Select', module).add('Select', () => <Select />);

storiesOf('Input', module).add('Input', () => <Input />);

storiesOf('Missing', module).add('Missing', () => <Missing />);

storiesOf('Number', module).add('Number', () => <Number />);

storiesOf('Navigation', module)
  .add('with Next', () => <Navigation page={0} />)
  .add('with Previous', () => <Navigation />);
