import PropTypes from 'prop-types';
import React from 'react';

import { Value as StyledValue } from '../../../primitives/Summary';
import DL from '../../../primitives/Datalist';

export default function FetchOrgSummary({
  value: { address, name, orgid, postcode, postplace } = {},
}) {
  if (!orgid) {
    return <StyledValue missing>* Må fylles ut</StyledValue>;
  }

  return (
    <DL>
      <dd>{orgid}</dd>

      <dt>Firmaets navn</dt>
      <dd>{name}</dd>

      <dt>Adresse</dt>
      <dd>{address}</dd>

      <dt>Postnummer- og sted</dt>
      <dd>
        {postcode} {postplace}
      </dd>
    </DL>
  );
}

FetchOrgSummary.propTypes = {
  value: PropTypes.shape({
    address: PropTypes.string,
    name: PropTypes.string,
    orgid: PropTypes.string,
    postcode: PropTypes.string,
    postplace: PropTypes.string,
  }),
};

FetchOrgSummary.defaultProps = {
  value: {
    address: '',
    name: '',
    orgid: 0,
    postcode: '',
    postplace: '',
  },
};
