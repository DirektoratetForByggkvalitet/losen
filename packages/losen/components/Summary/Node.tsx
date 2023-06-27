import DefaultValueSummary from "./value";
import Checkbox from "./value/Checkbox";
import FetchOrg from "./value/FetchOrg";
import Sum from "./value/Sum";

import { ErrorMessage } from "losen/primitives/Errors";
import Html from "../helper/Html";
import { NodeSummary as StyledNodeSummary } from "losen/primitives/Summary";
import ErrorIcon from "../graphics/ErrorIcon";
import SoftError from "./SoftError";
import Information from "./Information";
import { RenderableNode } from "../..";
import { hasProperty, isOfType } from "../../utils/is-of-type";
import get from "lodash/get";

const ignoreNodes = ["Text", "Image"];
const overrideValueSummary = { FetchOrg, Sum, Checkbox };

type Props = {
  node: RenderableNode;
  value?: any;
}

export default function NodeSummary({ node }: Props) {
  if (isOfType(node, ["Error"])) {
    return <SoftError children={node.children} />;
  }

  if (isOfType(node, ["Information"])) {
    return <Information text={node.text} />;
  }
  if (isOfType(node, ["Group", "ErrorOk"])) {
    return (
      <>
        {node.children.map((child: any) => (
          <NodeSummary key={child.id} value={child.currentValue} node={child} />
        ))}
      </>
    );
  }

  if (ignoreNodes.includes(node.type) || !hasProperty(node, 'property')) {
    return null;
  }

  const ValueSummary = get(overrideValueSummary, node.type, DefaultValueSummary);
  const errors = get(node, 'errors') as any
  const errorDescription = get(node, 'errorDescription') as any

  return (
    <StyledNodeSummary error={errors.validation.error}>
      <Html text={node.heading} h3 />
      <ValueSummary value={get(node, 'currentValue')} node={node} />
      {errors.validation.error ? (
        <ErrorMessage role="alert">
          <ErrorIcon />
          {errors.validation.message}
        </ErrorMessage>
      ) : null}

      {errors.disabled.length ? (
        <ErrorMessage role="alert">
          <ErrorIcon /> {errorDescription}
        </ErrorMessage>
      ) : null}
    </StyledNodeSummary>
  );
}