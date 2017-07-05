import React from 'react';
import PropTypes from 'prop-types';
import RadioBlock from './Radio';
import ChechboxBlock from './checkbox/Checkbox';
import MissingBlock from './Missing';

const components = {
  Radio: RadioBlock,
  Checkbox: ChechboxBlock,
};

const Block = (props) => {
  const SpecificBlock = components[props.type];

  if (SpecificBlock) {
    return <SpecificBlock {...props} />;
  }

  return <MissingBlock type={props.type} />;
};

export default Block;

Block.propTypes = {
  type: PropTypes.string.isRequired,
};
