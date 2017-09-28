import React from 'react';

/* eslint-disable */
import { storiesOf } from '@storybook/react';
/* eslint-enable */

import Welcome from './Welcome';
import Page from './Page';
import Branch from './Branch';
import Navigation from '../src/web/components/Navigation';
import Number from '../src/web/components/blocks/Number';
import Missing from '../src/web/components/blocks/Missing';
import Input from '../src/web/components/blocks/Input';
import Select from '../src/web/components/blocks/select/Select';
import Radio from '../src/web/components/blocks/radio/Radio';
import Checkbox from '../src/web/components/blocks/checkbox/Checkbox';

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
