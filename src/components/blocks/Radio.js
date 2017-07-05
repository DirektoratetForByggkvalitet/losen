import React from 'react';
import PropTypes from 'prop-types';

const Radio = () => <div>Block type Radio</div>;

export default Radio;

Radio.defaultProps = {
  type: '',
};

Radio.propTypes = {
  type: PropTypes.string,
};
