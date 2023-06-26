import React from 'react'
import Style from 'losen/styles';

type Props = {
  textFill?: string
  triangleFill?: string
}

export default function ErrorIcon({
  textFill = 'white',
  triangleFill = Style.color.red
}: Props) {
  let label = 'Validaringsfeil';

  if (triangleFill === 'black') {
    label = 'Informasjon';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      aria-label={label}
    >
      <g>
        <circle style={{ fill: triangleFill }} cx="19" cy="19" r="16" />
        <path
          style={{ fill: textFill }}
          d="M16.9,25.1c0-0.7,0.2-1.2,0.5-1.5s0.9-0.5,1.5-0.5c0.6,0,1.2,0.2,1.5,0.5s0.5,0.8,0.5,1.5
            c0,0.6-0.2,1.1-0.5,1.5s-0.9,0.5-1.5,0.5c-0.7,0-1.2-0.2-1.5-0.5S16.9,25.7,16.9,25.1z M20.4,21.1h-2.9L17,9.6H21L20.4,21.1z"
        />
      </g>
    </svg>
  );
}