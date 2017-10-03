import React from 'react';
import PropTypes from 'prop-types';

import DL from '../../../primitives/Datalist';

export default function FetchOrgSummary({
  value: {
    orgid,
    name,
    address,
    postcode,
    postplace,
  } = {},
}) {
  return (
    <DL>
      <dd>{orgid}</dd>

      <dt>Firmaets navn</dt>
      <dd>{name}</dd>

      <dt>Adresse</dt>
      <dd>{address}</dd>

      <dt>Postnummer- og sted</dt>
      <dd>{postcode} {postplace}</dd>
    </DL>
  );
}

FetchOrgSummary.propTypes = {
  value: PropTypes.shape({
    orgid: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.string,
    postplace: PropTypes.string,
  }),
};

FetchOrgSummary.defaultProps = {
  value: {
    orgid: 0,
    name: '',
    address: '',
    postcode: '',
    postplace: '',
  },
};
