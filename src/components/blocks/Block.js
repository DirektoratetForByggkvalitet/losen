import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RadioBlock from './radio/Radio';
import ChechboxBlock from './checkbox/Checkbox';
import MissingBlock from './Missing';

import { setData } from '../../state/actions';
import { NAME } from '../../state';

const components = {
  Radio: RadioBlock,
  Checkbox: ChechboxBlock,
};

export function PureBlock(props) {
  const SpecificBlock = components[props.type];

  if (SpecificBlock) {
    return <SpecificBlock {...props} />;
  }

  return <MissingBlock type={props.type} />;
}

PureBlock.propTypes = {
  type: PropTypes.string.isRequired,
};

const ConnectedBlock = connect(
  state => ({ data: state[NAME] }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
