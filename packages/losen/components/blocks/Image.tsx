import React from 'react';
import { Figure } from "../../primitives/Figure";
import { RenderWithData } from "../../index";

export default function Image({ id, debug, image: { url, alt }, text }: RenderWithData<"Image">) {
  return (
    <Figure data-id={id} $debug={debug}>
      <img src={url} alt={alt} />
      <figcaption>{text}</figcaption>
    </Figure>
  );
}