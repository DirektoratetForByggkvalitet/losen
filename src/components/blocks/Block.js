import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import Checkbox from './checkbox/Checkbox';
import Image from './Image';
import Input from './Input';
import Missing from './Missing';
import Number from './Number';
import Radio from './radio/Radio';
import Select from './select/Select';
import Text from './Text';
import Textarea from './Textarea';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';

import { setData } from '../../state/actions';
import { NAME } from '../../state';

import { SpecificBlock as StyledBlock } from '../../primitives/Block';
import { H3 } from '../../primitives/Heading';
import { ErrorMessage } from '../../primitives/Errors';

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

    case 'Image':
      return Image;

    case 'Text':
      return Text;

    case 'Input':
      return Input;

    case 'Textarea':
      return Textarea;

    default:
      return null;
  }
}

export function PureBlock(props) {
  const SpecificBlock = getBlock(props.type);
  if (props.type === 'Image' || props.type === 'Text') {
    return <SpecificBlock {...props} />;
  } else if (SpecificBlock) {
    return (
      <StyledBlock id={props.property} disabled={props.disabled}>
        <div>
          <H3>
            {props.heading}
          </H3>
          <Html text={props.text} />
          {props.image ? <img src={props.image.url} alt={props.image.alt} /> : null}

          <SpecificBlock {...props} />

          {props.disabled &&
            <ErrorMessage>
              <ErrorIcon />
              {JSON.stringify(props.errors)}
            </ErrorMessage>}
        </div>
      </StyledBlock>
    );
  }

  return <Missing type={props.type} />;
}

PureBlock.defaultProps = {
  heading: 'No heading',
  text: '',
  image: {},
  errors: [],
};

PureBlock.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
  property: PropTypes.string.isRequired,
  image: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
};

const ConnectedBlock = connect(
  (state, props) => ({
    data: state[NAME],
    currentValue: get(state[NAME], props.property),
    disabled: Array.isArray(props.errors) && props.errors.length > 0,
  }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
