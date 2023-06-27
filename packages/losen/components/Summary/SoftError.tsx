import { ErrorMessage } from "losen/primitives/Errors";
import { NodeSummary as StyledNodeSummary } from "losen/primitives/Summary";
import ErrorIcon from "../graphics/ErrorIcon";
import Html from "../helper/Html";
import { RenderableNode } from "../..";
import { hasProperty, isOfType } from "../../utils/is-of-type";

type Props = {
  children: RenderableNode[]
}

export default function SoftError({ children }: Props) {
  return (
    <StyledNodeSummary>
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
              <ErrorIcon /> <Html text={heading} inline />
            </ErrorMessage>
          );
        }

        return null;
      })}
    </StyledNodeSummary>
  );
}