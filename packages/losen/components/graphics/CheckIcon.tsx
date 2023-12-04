import React from 'react';
import Style from '../../styles';

type Props = {
  fill?: string
}

export default function CheckIcon({
  fill = Style.color2.positive,
}: Props) {

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ferdig" style={{ fill: fill }}>
      <mask id="mask0_1089_7430" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" />
      </mask>
      <g mask="url(#mask0_1089_7430)">
        <path d="M5.71427 8.57149L3.80951 10.4762L8.57141 15.2382L17.1428 6.66672L15.2381 4.76196L8.57141 11.4286L5.71427 8.57149Z" />
      </g>
    </svg>
  );
}