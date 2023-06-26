import React from 'react';
import { TextBlock } from 'losen/primitives/Block';
import InformationBlock from 'losen/primitives/Information';
import Html from 'losen/components/helper/Html';
import ErrorIcon from 'losen/components/graphics/ErrorIcon';
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
        <ErrorIcon triangleFill={'black'} />
        <Html text={heading} h2 />
        <Html text={text} />
      </InformationBlock>
    </TextBlock>
  )
}