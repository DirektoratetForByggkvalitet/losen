import React from 'react';
import Style from '../../styles';

type Props = {
  textFill?: string
  triangleFill?: string
}

export default function ErrorIcon({
  textFill = 'white',
  triangleFill = Style.color2.error
}: Props) {

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
      <g clip-path="url(#clip0_1089_7422)">
        <mask id="mask0_1089_7422" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <rect width="20" height="20" style={{ fill: textFill }} />
        </mask>
        <g mask="url(#mask0_1089_7422)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.4775 4.4775 0 10 0C15.5225 0 20 4.4775 20 10C20 15.5225 15.5225 20 10 20C4.4775 20 0 15.5225 0 10ZM11 14.0766C11 14.8122 10.5188 15.3333 9.83335 15.3333C9.13335 15.3333 8.66669 14.8122 8.66669 14.0766C8.66669 13.341 9.13335 12.8046 9.83335 12.8046C10.5188 12.8046 11 13.341 11 14.0766ZM10.65 11.9463H8.98752L8.75419 4.66663H10.8834L10.65 11.9463Z" style={{ fill: triangleFill }} />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1089_7422">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}