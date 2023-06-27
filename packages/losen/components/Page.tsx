
import Block from "./blocks/Block";
import Html from "./helper/Html";
import Navigation from "./Navigation";
import SummaryDetails from "./blocks/SummaryDetails";

import { Heading, Paragraphs, Grid } from "losen/primitives";
import { RenderableNode } from "..";
import { hasProperty } from "../utils/is-of-type";

type Props = {
  children: RenderableNode[],
  debug?: boolean,
  details?: string,
  firstPage: boolean,
  lastPage: boolean,
  heading?: string,
  lead?: string,
  nextPage: () => void,
  pageid: string,
  nextPageIsResult: boolean,
  previousPage: () => void,
  summary?: string,
}

export default function Page({
  children = [],
  debug = false,
  details = "",
  firstPage,
  lastPage,
  heading = "Missing page heading",
  lead = "",
  nextPage,
  nextPageIsResult,
  pageid,
  previousPage,
  summary = "",
}: Props) {
  return (
    <Grid.Main debug={debug} data-id={pageid} id="main">
      <Heading.H1>{heading}</Heading.H1>
      {lead && <Paragraphs.Lead>
        <Html text={lead} />
      </Paragraphs.Lead>}
      {summary && <SummaryDetails summary={summary} details={details} />}
      
      <Grid.Blocks>
      {children.map((block, index) => (
        <Block key={(hasProperty(block, 'id') && block.id) || index} {...block} />
      ))}
      </Grid.Blocks>

      {(!firstPage || !lastPage) && (
        <Navigation
          nextPageIsResult={nextPageIsResult}
          hasPrevious={!firstPage}
          previousPage={previousPage}
          hasNext={!lastPage}
          nextPage={nextPage}
          />
      )}
    </Grid.Main>
  );
}