import React from 'react';

type Props = {
  image: {
    url?: string
    alt?: string
  }
}

export default function Image({ image = {} }: Props) {
  if (Object.prototype.hasOwnProperty.call(image, 'url') && image.url) {
    return <img src={image.url} alt={image.alt} />;
  }

  return null;
}