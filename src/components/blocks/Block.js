import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Radio from './radio/Radio';
import Checkbox from './checkbox/Checkbox';
import Select from './select/Select';
import Missing from './Missing';
import Number from './Number';

import { setData } from '../../state/actions';
import { NAME } from '../../state';

import Block from '../../primitives/Block';

const components = {
  Radio,
  Checkbox,
  Select,
  Number,
};

export function PureBlock(props) {
  const SpecificBlock = components[props.type];

  if (SpecificBlock) {
    return (
      <Block>
        <SpecificBlock {...props} />
      </Block>
    );
  }

  return <Missing type={props.type} />;
}

PureBlock.propTypes = {
  type: PropTypes.string.isRequired,
};

const ConnectedBlock = connect(
  state => ({ data: state[NAME] }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
