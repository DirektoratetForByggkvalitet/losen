import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Bool from './bool/Bool';
import Checkbox from './checkbox/Checkbox';
import Missing from './Missing';
import Number from './Number';
import Radio from './radio/Radio';
import Select from './select/Select';

import { setData } from '../../state/actions';
import { NAME } from '../../state';

import Block from '../../primitives/Block';
import { H3 } from '../../primitives/Heading';

const components = {
  Bool,
  Checkbox,
  Number,
  Radio,
  Select,
};

export function PureBlock(props) {
  const SpecificBlock = components[props.type];

  if (SpecificBlock) {
    return (
      <Block>
        <div>
          <H3>
            {props.heading}
          </H3>
          <p>
            {props.text}
          </p>
          <SpecificBlock {...props} />
        </div>
      </Block>
    );
  }

  return <Missing type={props.type} />;
}

PureBlock.defaultProps = {
  heading: 'No heading',
  text: '',
};

PureBlock.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
};

const ConnectedBlock = connect(
  state => ({ data: state[NAME] }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
