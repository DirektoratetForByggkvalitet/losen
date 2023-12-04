import React from 'react';
import { Value as StyledValue } from "../../../primitives/Summary";
import DL from "../../../primitives/Datalist";
import ApprovalAreas from "../../ApprovalAreas";
import { FetchOrgData } from "../../blocks/FetchOrg";

type Props = {
  value?: FetchOrgData
}

export default function FetchOrgSummary({
  value: {
    address = "",
    name = "",
    orgid = "",
    postcode = "",
    postplace = "",
    validApprovalAreas
  } = {},
}: Props) {
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
      <ApprovalAreas areas={validApprovalAreas} title />
    </DL>
  );
}