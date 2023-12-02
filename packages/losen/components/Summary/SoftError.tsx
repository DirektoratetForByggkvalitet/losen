import React from 'react';
import { ErrorMessage }  from "primitives/Errors";
import InfoIcon from "components/graphics/InfoIcon";
import Html from "components/helper/Html";
import { RenderableNode } from "losen";
import { hasProperty, isOfType } from "utils/is-of-type";

type Props = {
  children: RenderableNode[]
}

export default function SoftError({ children }: Props) {
  return (
    <>
      {children.map((child) => {
        const heading =
          !isOfType(child, ['Result']) &&
          (
            (hasProperty(child, 'heading') && child.heading) ||
            (hasProperty(child, 'text') && child.text)
          );

        if (heading) {
          return (
            <ErrorMessage role="alert">
              <InfoIcon /> <Html text={heading} inline />
            </ErrorMessage>
          );
        }

        return null;
      })}
    </>
  );
}