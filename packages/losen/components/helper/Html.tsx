import StyledHtml from "../../primitives/Html";
import { H2, H3 } from "../../primitives/Heading";

type Props = {
  id?: string
  text?: string
  inline?: boolean
  margins?: boolean
  h2?: boolean
  h3?: boolean
}

export default function Html({ id, text, inline, margins, h2, h3 }: Props) {
  if (!text) {
    return null;
  }

  if (h2) {
    // eslint-disable-next-line react/no-danger
    return (
      <H2 id={id} inline={inline} dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  if (h3) {
    // eslint-disable-next-line react/no-danger
    return (
      <H3 id={id} inline={inline} dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  // eslint-disable-next-line react/no-danger
  return (
    <StyledHtml
      id={id}
      inline={inline}
      margins={margins}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}