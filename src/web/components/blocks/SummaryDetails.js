import React from 'react';
import PropTypes from 'prop-types';
import Html from '../helper/Html';
import { Details, Summary } from '../../primitives/details';

export default function SumamryDetails({ summary, details }) {
  return (
    <Details>
      <Summary>{summary}</Summary>
      <Html text={details} />
    </Details>
  );
}

SumamryDetails.propTypes = {
  summary: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
