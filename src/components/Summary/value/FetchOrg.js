import React from 'react';
import PropTypes from 'prop-types';

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
    <dl>
      <dt>Organisasjonsnummer</dt>
      <dd>{orgid}</dd>

      <dt>Selskapsnavn</dt>
      <dd>{name}</dd>

      <dt>Adresse</dt>
      <dd>{address}</dd>

      <dt>Posnummer- og sted</dt>
      <dd>{postcode} {postplace}</dd>
    </dl>
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
