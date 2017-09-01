import React from 'react';
import PropTypes from 'prop-types';

import { Textarea as StyledTextarea } from '../../primitives/Input';

const Textarea = props => <StyledTextarea placeholder={props.placeholder} />;

export default Textarea;

Textarea.defaultProps = {
  placeholder: '',
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
};
