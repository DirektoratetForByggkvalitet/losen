import React from "react";
import { FetchOrgData } from "../../blocks/FetchOrg";
type Props = {
    value?: FetchOrgData;
};
export default function FetchOrgSummary({ value: { address, name, orgid, postcode, postplace, validApprovalAreas }, }: Props): React.JSX.Element;
export {};
