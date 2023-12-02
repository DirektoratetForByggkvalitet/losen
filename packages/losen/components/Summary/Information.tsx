import React from 'react';
import InformationBlock  from "primitives/Information";
import InfoIcon from "components/graphics/InfoIcon";
import Html from "components/helper/Html";

type Props = {
  text?: string,
}

export default function Information({ text }: Props) {
  if (text) {
    return (
      <InformationBlock>
        <InfoIcon />
        <Html text={text} />
      </InformationBlock>
    );
  }
  return <p>TEXT MISSING</p>;
}