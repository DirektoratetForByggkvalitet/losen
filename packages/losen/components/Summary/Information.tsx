import InformationBlock from "losen/primitives/Information";
import { NodeSummary as StyledNodeSummary } from "losen/primitives/Summary";
import ErrorIcon from "../graphics/ErrorIcon";
import Html from "../helper/Html";

type Props = {
  text?: string,
}

export default function Information({ text }: Props) {
  if (text) {
    return (
      <StyledNodeSummary>
        <InformationBlock>
          <ErrorIcon triangleFill={"black"} />
          <Html text={text} />
        </InformationBlock>
      </StyledNodeSummary>
    );
  }
  return <p>TEXT MISSING</p>;
}