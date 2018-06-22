import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import repeatQuestion from '../helper/RepeatQuestion';

// Components
import Checkbox from './checkbox/Checkbox';
import Data from './Data';
import ErrorIcon from '../graphics/ErrorIcon';
import Evaluation from './Evaluation';
import FetchOrg from './FetchOrg';
import Html from '../helper/Html';
import Image from './Image';
import ImageComponent from '../helper/Image';
import Information from './Information';
import Input from './Input';
import Missing from './Missing';
import Number from './Number';
import Radio from './radio/Radio';
import Select from './select/Select';
import Signature from './Signature';
import Sum from './Sum';
import Summary from './Summary';
import SummaryDetails from './SummaryDetails';
import Switch from './Switch';
import Table from './Table';
import Text from './Text';
import Textarea from './Textarea';

// State deps
import { setData } from '../../state/actions';
import { NAME } from '../../state';

// Primitives
import { SpecificBlock as StyledBlock } from '../../primitives/Block';
import StyledErrorBlock from '../../primitives/ErrorBlock';
import { ErrorMessage } from '../../primitives/Errors';

/**
 * Determine which component to use based on the node type
 *
 * @param string type Type string from schema
 */
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

    case 'Evaluation':
      return Evaluation;

    case 'FetchOrg':
      return FetchOrg;

    case 'Table':
      return Table;

    case 'Signature':
      return Signature;

    case 'Summary':
      return Summary;

    case 'Sum':
      return Sum;

    case 'Switch':
      return Switch;

    case 'Information':
      return Information;

    default:
      return null;
  }
}

export function PureBlock(props) {
  const SpecificBlock = getBlock(props.type);

  if (props.type === 'ErrorOk') {
    return (
      <div>
        {props.children.map(block => (
          <ConnectedBlock
            key={block.id}
            data-id={props.id}
            simple={props.simple}
            setPage={props.setPage}
            errorPages={props.errorPages}
            pages={props.pages}
            {...block}
          />
        ))}
      </div>
    );
  }

  if (props.type === 'Group') {
    return (
      <StyledBlock data-id={props.id} debug={props.debug}>
        <Html text={props.heading} h2 />
        <Html text={props.text} />

        {props.children.map(block => (
          <ConnectedBlock
            grouped
            key={block.id}
            data-id={props.id}
            simple={props.simple}
            setPage={props.setPage}
            errorPages={props.errorPages}
            pages={props.pages}
            {...block}
          />
        ))}
        {props.summary && <SummaryDetails summary={props.summary} details={props.details} />}
      </StyledBlock>
    );
  }

  if (props.type === 'Error') {
    return (
      <StyledErrorBlock data-id={props.id} debug={props.debug}>
        <Html text={props.heading} h2 />
        <Html text={props.text} />

        {props.children.map(block => (
          <ConnectedBlock
            grouped
            key={block.id}
            data-id={props.id}
            simple={props.simple}
            setPage={props.setPage}
            errorPages={props.errorPages}
            pages={props.pages}
            {...block}
          />
        ))}
      </StyledErrorBlock>
    );
  }

  if (!SpecificBlock) {
    return <Missing type={props.type} />;
  }

  if (
    props.type === 'Image' ||
    props.type === 'Text' ||
    props.type === 'Data' ||
    props.type === 'Signature' ||
    props.type === 'Sum' ||
    props.type === 'Summary' ||
    props.type === 'Information' ||
    props.type === 'Evaluation'
  ) {
    return (
      <SpecificBlock
        grouped={props.grouped}
        groupedSimple={props.simple}
        debug={props.debug}
        data-id={props.id}
        {...props}
      />
    );
  }

  return (
    <StyledBlock
      data-id={props.id}
      id={props.property}
      debug={props.debug}
      grouped={props.grouped}
      groupedSimple={props.simple}
      disabled={props.disabled}
      type={props.type}
    >
      <div>
        <Html text={props.heading} h2 />
        <Html text={props.text} />
        <ImageComponent image={props.image} />
        {repeatQuestion(props.image, props.text) ? <Html text={props.heading} h3 /> : ''}
        <SpecificBlock
          debug={props.debug}
          {...{
            ...props,
            validation:
              props.currentValue && props.validator
                ? {
                  error: !new RegExp(props.validator.pattern).test(props.currentValue),
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
        {props.summary && <SummaryDetails summary={props.summary} details={props.details} />}
      </div>
    </StyledBlock>
  );
}

PureBlock.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  currentValue: PropTypes.any,
  debug: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  errorDescription: PropTypes.string,
  errors: PropTypes.shape({
    disabled: PropTypes.array,
    validation: PropTypes.object,
    required: PropTypes.bool,
  }),
  grouped: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.object,
  property: PropTypes.string,
  simple: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  validator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      error: PropTypes.string.isRequired,
      pattern: PropTypes.string.isRequired,
    }),
  ]),
  errorPages: PropTypes.array,
  details: PropTypes.string,
  summary: PropTypes.string,
  setPage: PropTypes.func,
  pages: PropTypes.array,
};

PureBlock.defaultProps = {
  children: [],
  currentValue: undefined,
  details: '',
  disabled: false,
  errorDescription: null,
  errorPages: [],
  errors: {},
  grouped: false,
  heading: '',
  id: null,
  image: {},
  pages: [],
  property: null,
  setPage: () => {},
  simple: false,
  summary: '',
  text: '',
  validator: false,
};

const ConnectedBlock = connect(
  (state, props) => ({
    data: state[NAME],
    debug: !!window.location.search.match('debug'),
    disabled:
      props.errors &&
      props.errors.disabled &&
      ((Array.isArray(props.errors.disabled) && props.errors.disabled.length > 0) ||
        (props.errors.disabled.errors && props.errors.disabled.errors.length > 0)),
  }),
  dispatch => bindActionCreators({ setData }, dispatch),
)(PureBlock);

export default ConnectedBlock;
