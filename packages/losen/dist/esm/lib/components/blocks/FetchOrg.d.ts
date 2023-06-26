import React from 'react';
import { RenderWithData } from 'losen';
export type FetchOrgData = {
    orgid?: string;
    dataOrg?: boolean;
    dataSG?: boolean;
    name?: string;
    address?: string;
    postcode?: string;
    postplace?: string;
    validApprovalAreas?: Array<{
        "function": string;
        subject_area: string;
        grade: string;
    }>;
    invalidOrg?: boolean;
    status?: {
        approved?: boolean;
    };
};
export default function FetchOrd(props: RenderWithData<"FetchOrg", FetchOrgData | undefined>): React.JSX.Element;
