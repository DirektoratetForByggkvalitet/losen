import React from 'react';
import { RenderWithData } from "losen";
import { TextBlock } from "losen/primitives/Block";
import Html from "losen/components/helper/Html";

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
      <Html text={heading} h2 />;
      <Html text={text} />
    </TextBlock>
  );
}