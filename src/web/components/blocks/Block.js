import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Checkbox from './checkbox/Checkbox';
import Image from './Image';
import Input from './Input';
import Missing from './Missing';
import Number from './Number';
import Radio from './radio/Radio';
import Select from './select/Select';
import Text from './Text';
import Data from './Data';
import FetchOrg from './FetchOrg';
import Textarea from './Textarea';
import Table from './Table';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';
import ImageComponent from '../helper/Image';

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

    case 'Data':
      return Data;

    case 'FetchOrg':
      return FetchOrg;

    case 'Table':
      return Table;

    default:
      return null;
  }
}

export function PureBlock(props) {
  const SpecificBlock = getBlock(props.type);

  if (props.type === 'Group') {
    return (
      <StyledBlock>
        <H3>{props.heading}</H3>
        <Html text={props.text} />

        {props.children.map(block => (
          <ConnectedBlock
            grouped
            simple={props.simple}
            key={block.property}
            {...block}
          />
        ))}
      </StyledBlock>
    );
  }

  if (!SpecificBlock) {
    return <Missing type={props.type} />;
  }

  if (
    props.type === 'Image' ||
    props.type === 'Text' ||
    props.type === 'Data'
  ) {
    return <SpecificBlock grouped={props.grouped} {...props} />;
  }

  return (
    <StyledBlock
      data-id={props.id}
      id={props.property}
      debug={!!window.location.search.match('debug')}
      grouped={props.grouped}
      groupedSimple={props.simple}
      disabled={props.disabled}
    >
      <div>
        <H3 small>{props.heading}</H3>
        <Html text={props.text} />

        <SpecificBlock
          {...{
            ...props,
            validation:
              props.currentValue && props.validator
                ? {
                  error: !new RegExp(props.validator.pattern).test(
                    props.currentValue,
                  ),
                  message: props.validator.error,
                }
                : {},
          }}
        />

        {props.disabled && (
          <ErrorMessage>
            <ErrorIcon /> {props.errorDescription}
          </ErrorMessage>
        )}
        <ImageComponent image={props.image} />
      </div>
    </StyledBlock>
  );
}

PureBlock.defaultProps = {
  id: null,
  heading: '',
  text: '',
  image: {},
  errors: {},
  errorDescription: null,
  children: [],
  disabled: false,
  grouped: false,
  simple: false,
  validator: false,
  currentValue: undefined,
};

PureBlock.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
  property: PropTypes.string.isRequired,
  image: PropTypes.object,
  grouped: PropTypes.bool,
  simple: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.shape({
    disabled: PropTypes.array,
    validation: PropTypes.object,
    required: PropTypes.bool,
  }),
  errorDescription: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
  currentValue: PropTypes.any,
  validator: PropTypes.oneOf([
    false,
    PropTypes.shape({
      error: PropTypes.string.isRequired,
      pattern: PropTypes.string.isRequired,
    }),
  ]),
};

const ConnectedBlock = connect(
  (state, props) => ({
    data: state[NAME],
    disabled:
      props.errors &&
      props.errors.disabled &&
      ((Array.isArray(props.errors.disabled) &&
        props.errors.disabled.length > 0) ||
        (props.errors.disabled.errors &&
          props.errors.disabled.errors.length > 0)),
  }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
