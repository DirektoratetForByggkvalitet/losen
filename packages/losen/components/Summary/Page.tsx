import React from 'react';
import { H2 } from "losen/primitives/Heading";
import { PageSummary as StyledPageSummary } from "losen/primitives/Summary";
import { SmallButton as Button } from "losen/primitives/Button";

import NodeSummary from "./Node";
import { RenderableNode, RenderableResult } from "../..";
import { hasProperty } from "../../utils/is-of-type";

type Props = {
  children?: RenderableNode[];
  error?: boolean;
  goToPage: () => void;
  heading?: RenderableResult["heading"]
}

export default function PageSummary({ children = [], error, goToPage, heading }: Props) {
  return (
    <StyledPageSummary error={error}>
      <H2>
        {heading}{" "}
        <Button type="button" onClick={goToPage}>
          Endre svar
        </Button>
      </H2>
      {children.map((node, index) => (
        <NodeSummary key={hasProperty(node, 'id') ? node.id : index} node={node} />
      ))}
    </StyledPageSummary>
  );
}
