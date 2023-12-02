import React from 'react';
import { RenderWithData } from "index";
import { TextBlock } from "primitives/Block";
import Html from "components/helper/Html";
import InfoIcon from 'components/graphics/InfoIcon';

export default function Text({
  debug,
  heading,
  id,
  text,
  warning = false,
  printonly = false,
  printhide = false,
}: RenderWithData<"Text">) {
  return (
    <TextBlock
      warning={warning}
      debug={debug}
      data-id={id}
      printonly={printonly}
      printhide={printhide}
    >
      {warning && <InfoIcon />}
      <Html text={heading} h2 />
      <Html text={text} />
    </TextBlock>
  );
}