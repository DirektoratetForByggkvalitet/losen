import React from 'react';
import { TextBlock } from '../../primitives/Block';
import InformationBlock from '../../primitives/Information';
import Html from '../helper/Html';
import InfoIcon from '../graphics/InfoIcon';
import { RenderWithData } from '../../index';

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