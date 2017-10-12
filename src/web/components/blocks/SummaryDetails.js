import PropTypes from 'prop-types';
import React from 'react';

import { Details, Summary } from '../../primitives/details';
import Html from '../helper/Html';

export default function SummaryDetails({ summary, details }) {
  return (
    <Details>
      <Summary>{summary}</Summary>
      <Html text={details} />
    </Details>
  );
}

SummaryDetails.propTypes = {
  details: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
