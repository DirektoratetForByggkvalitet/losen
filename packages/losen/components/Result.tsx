import React from 'react';
import { connect } from "react-redux";

import hasSoftError from "losen/utils/has-soft-error";
import getResultText from "losen/utils/get-result-text";
import { getErrorPages } from "losen/utils/selectors";
import { trackEvent } from "losen/utils/tracking";
import Block from "./blocks/Block";
import ExportData from "./ExportData";
import Html from "./helper/Html";
import Summary from "./Summary";

import { H1, H2 } from "losen/primitives/Heading";
import { Lead } from "losen/primitives/Paragraphs";
import { MainButton } from "losen/primitives/Button";
import { TextBlock } from "losen/primitives/Block";
import { Export, Grid } from "losen/primitives";
import PDFButton from "./PDFButton";
import { RenderableNode, State, WizardDefinition } from "losen";

type Props = {
  children: RenderableNode[]
  schema: RenderableNode[]
  errorPages: ReturnType<typeof getErrorPages>
  exporter?: string
  exports?: Record<string, (state: State) => any>
  heading: string | {
    complete: string,
    completeWithError: string,
    incomplete: string,
    incompleteWithError: string,
  }
  lead?: string | {
    complete: string,
    completeWithError: string,
    incomplete: string,
    incompleteWithError: string,
  }
  debug: boolean
  pageid: string
  setPage: (page: string) => void
  title?: string
  summaryTitle?: string
  wizard: WizardDefinition
}

function Result(props: Props) {
  const {
    children = [],
    debug,
    errorPages,
    exporter,
    heading,
    lead,
    exports,
    pageid,
    schema,
    setPage,
    wizard: {
      meta: { pdfServiceUrl, localStorageKey },
    },
  } = props;

  const incomplete = errorPages.length > 0;
  const hasSoftErrors = schema.filter((page) => hasSoftError(page)).length > 0;

  const resultHeading = getResultText(heading, incomplete, hasSoftErrors);
  const resultLead = getResultText(lead, incomplete, hasSoftErrors);

  const printPage = () => {
    trackEvent("Skriv ut", resultHeading);
    window.print();
  };

  return (
    <Grid.Main result debug={debug} data-id={pageid} id="main">
      <H1 result>{resultHeading}</H1>
      {resultLead && <Grid.Blocks>
        <Html text={resultLead} />
      </Grid.Blocks>}

      {children.map(({ heading, ...block }: any) => (
        <Grid.Blocks>
          <Block
            {...block}
            key={block.id}
            errorPages={errorPages}
            setPage={setPage}
            pages={schema}
          />
        </Grid.Blocks>
      ))}
      <Grid.Blocks>
        <hr />
        <H2 small>Oppsummering</H2>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </Grid.Blocks>

      {!incomplete && exporter ? (
        <TextBlock>
          <H2>Takk for at du gjennomførte veiviseren!</H2>
          <Lead>
            Du kan kopiere svarene dine, eller skrive ut resultatsiden.
          </Lead>
        </TextBlock>
      ) : null}

      <Export exporter={exporter}>
        {!incomplete && exporter && exports?.[exporter] ? (
          <ExportData exporter={exports[exporter]} />
        ) : null}

        {pdfServiceUrl && localStorageKey ? (
          <PDFButton
            pdfServiceUrl={pdfServiceUrl}
            localStorageKey={localStorageKey}
            pageHeading={resultHeading}
          />
        ) : (
          <MainButton type="button" onClick={printPage}>
            Skriv ut
          </MainButton>
        )}
      </Export>
    </Grid.Main>
  );
}

const mapStateToProps = (state: State, { wizard }: { wizard: WizardDefinition }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
