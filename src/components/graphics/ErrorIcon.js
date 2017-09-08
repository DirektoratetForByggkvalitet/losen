import React from 'react';
import PropTypes from 'prop-types';
import Style from '../../styles';

export default function ErrorIcon({ triangleFill, textFill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 221" width="1em" height="1em">
      <g>
        <path style={{ fill: triangleFill }} d="M119.4 20.2l93.64 171.17a10 10 0 0 1-8.78 14.8H17a10 10 0 0 1-8.77-14.8L101.86 20.2a10 10 0 0 1 17.54 0z" />
        <path style={{ fill: textFill }} d="M110.88 182.3c7.78 0 13.25-4.9 13.25-12.52 0-7.64-5.47-12.68-13.25-12.68-7.92 0-13.4 5.04-13.4 12.68 0 7.63 5.48 12.52 13.4 12.52zm-10.22-38.1h20.16l2.88-68.84H97.78l2.88 68.83z" />
      </g>
    </svg>
  );
}

ErrorIcon.propTypes = {
  triangleFill: PropTypes.string,
  textFill: PropTypes.string,
};

ErrorIcon.defaultProps = {
  triangleFill: Style.color.red,
  textFill: 'white',
};
