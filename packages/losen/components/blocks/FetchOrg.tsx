import React, { useState } from 'react';
import merge from 'lodash/merge';

import ApprovalAreas from '../ApprovalAreas';
import Html from '../helper/Html';
import Input from './Input';
import VariableText from '../helper/VariableText';

import { H3 } from '../../primitives/Heading';
import DL from '../../primitives/Datalist';
import ErrorIcon from '../graphics/ErrorIcon';
import { ErrorMessage } from '../../primitives/Errors';
import Information from '../../primitives/Information';
import Loading from '../../primitives/Loading';
import Notice from '../../primitives/Notice';
import { RenderWithData } from 'losen';

type BRRegResult = {
  navn: string
  postadresse?: {
    adresse?: string
    postnummer?: string
    poststed?: string
  }
  forretningsadresse?: {
    adresse?: string
    postnummer?: string
    poststed?: string
  }
}

type SGResult = {
  'dibk-sgdata'?: {
    valid_approval_areas: []
    status?: {
      approved?: boolean
    }
  }
}

export type FetchOrgData = {
  orgid?: string;
  dataOrg?: boolean
  dataSG?: boolean
  name?: string
  address?: string
  postcode?: string
  postplace?: string
  validApprovalAreas?: Array<{
    "function": string
    subject_area: string
    grade: string
  }>
  invalidOrg?: boolean
  status?: {
    approved?: boolean
  }
}

export default function FetchOrd(props: RenderWithData<"FetchOrg", FetchOrgData | undefined>) {
  const [loading, setLoading] = useState(false);

  const {
    information,
    invalidapproval,
    invalidOrg,
    property,
    setData,
    currentValue,
    SGheading,
    source = 'https://data.brreg.no/enhetsregisteret/api/enheter/',
    SGtext,
    SGsource = 'https://sgregister.dibk.no/api/enterprises/'
  } = props;

  const fetchOrgData = async (orgid: string) => {
    const id = orgid.toString().replace(/\s/g, '');
    let updateData: Partial<typeof currentValue> = {};

    setLoading(true);

    // Query brreg
    try {
      const result = await (await fetch(`${source}${id}`)).json() as BRRegResult;

      merge(updateData, {
        orgid: orgid,
        name: result?.navn || '',
        dataOrg: true,
        invalidOrg: false,
      })

      if (result?.postadresse?.adresse) {
        merge(updateData, {
          postcode: result?.postadresse?.postnummer || '',
          postplace: result?.postadresse?.poststed || '',
          address: result?.postadresse?.adresse || '',
        })
      } else {
        merge(updateData, {
          postcode: result?.forretningsadresse?.postnummer || '',
          postplace: result?.forretningsadresse?.poststed || '',
          address: result?.forretningsadresse?.adresse || '',
        })
      }
    } catch (error) {
      console.error(error);
      updateData.invalidOrg = true;
    }

    // Query SG (sentral godkjenning)
    try {
      const result = await (await fetch(`${SGsource}${id}.json`)).json() as SGResult;
      const status = result['dibk-sgdata']?.status ?? false;
      const validApprovalAreas = result?.['dibk-sgdata']?.valid_approval_areas ?? []

      merge(updateData, {
        status,
        validApprovalAreas,
        dataSG: true
      })
    } catch (error) {
      console.error(error);
      updateData.status = undefined
      updateData.validApprovalAreas = []
      updateData.dataSG = false
    }

    setData(property, { ...currentValue, ...updateData, })
    setData('sgdata', updateData?.status?.approved ?? false, true);
    setLoading(false);
  }

  const update = (value: string) => {
    const { property, setData } = props;

    if (value && value.toString().replace(/\s/g, '').length === 9) {
      setLoading(true)
      fetchOrgData(value);
    } else {
      setData(property, { dataOrg: false, dataSG: false });
      setData('sgdata', false, true);
    }
  }

  return (
    <div>
      <Input
        {...props}
        type="Input"
        currentValue={currentValue?.orgid}
        setData={(property, value) => setData(property, { orgid: value })}
        update={update}
      />

      {currentValue?.dataOrg ? (
        <div>
          <br />
          <DL role="status">
            <dt>Firmaets navn</dt>
            <dd>{currentValue?.name ?? ''}</dd>

            <dt>Adresse</dt>
            <dd>{currentValue?.address ?? ''}</dd>

            <dt>Postnummer- og sted</dt>
            <dd>
              {currentValue?.postcode ?? ''}{' '}
              {currentValue?.postplace ?? ''}
            </dd>
          </DL>
          <Information>
            <ErrorIcon triangleFill={'black'} />
            <Html text={information} />
          </Information>
        </div>
      ) : null}

      <div>
        <div>
          {loading && <Loading role="status">Laster inn data</Loading>}
          {!loading && currentValue?.dataSG ? (
            <Notice>
              <H3>
                <VariableText text={SGheading} data={currentValue} />
              </H3>
              <ApprovalAreas areas={currentValue?.validApprovalAreas ?? []} />
              <VariableText text={SGtext} data={currentValue} />
            </Notice>
          ) : null}

          {!loading && !currentValue?.dataSG && currentValue?.orgid ? <H3>{invalidapproval}</H3> : null}
        </div>
      </div>
      <div>
        {currentValue?.invalidOrg ? (
          <ErrorMessage role="alert">
            <ErrorIcon /> {invalidOrg}
          </ErrorMessage>
        ) : null}
      </div>
    </div>
  );
}