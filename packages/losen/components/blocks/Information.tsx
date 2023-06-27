import React from 'react';
import { TextBlock } from 'losen/primitives/Block';
import InformationBlock from 'losen/primitives/Information';
import Html from 'losen/components/helper/Html';
import InfoIcon from 'losen/components/graphics/InfoIcon';
import { RenderWithData } from 'losen';

export default function Information({
  debug,
  heading,
  id,
  text,
  warning,
  printonly,
  printhide,
}: RenderWithData<"Information">) {
  return (
    <TextBlock
      warning={warning}
      debug={debug}
      data-id={id}
      printonly={printonly}
      printhide={printhide}
    >
      <InformationBlock>
        <InfoIcon />
        <Html text={heading} h2 />
        <Html text={text} />
      </InformationBlock>
    </TextBlock>
  )
}