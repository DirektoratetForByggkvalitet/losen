import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import Checkbox from './checkbox/Checkbox';
import Missing from './Missing';
import Number from './Number';
import Radio from './radio/Radio';
import Select from './select/Select';

import { setData } from '../../state/actions';
import { NAME } from '../../state';

import Block from '../../primitives/Block';
import { H3 } from '../../primitives/Heading';

function getBlock(type) {
  switch (type) {
    case 'Radio':
    case 'Bool':
      return Radio;

    case 'Checkbox':
      return Checkbox;

    case 'Number':
      return Number;

    case 'Select':
      return Select;

    default:
      return null;
  }
}

export function PureBlock(props) {
  const SpecificBlock = getBlock(props.type);

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
  (state, props) => ({
    data: state[NAME],
    currentValue: get(state[NAME], props.property),
  }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
