import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "./helper/Modal";
import { NAME } from "../state";
import { RenderableNode, State, WizardDefinition } from '../index'

import { getTitle, getNodeTitles } from "../utils/selectors";
import getPages from "../utils/get-pages";

import { setData } from "../state/actions";
import Nav from "./Nav";
import Page from "./Page";
import reduceWizard, { Translations } from "../utils/reduce-wizard";
import Result from "./Result";
import SkipLink from "./helper/SkipLink";
import { StyleProvider } from "./StyleProvider";
import { track } from "../utils/tracking";
import beforeUnloadHandler from "../utils/before-unload-handler";
import validateSchema from "../utils/validator";

import { Grid, Wizard as WizardPrimitive } from "../primitives";
import { StylesProps } from "../styles";
import { hasProperty, isOfType } from "../utils/is-of-type";
import { getData } from "../utils/get-data";

type Props = {
  data?: State,
  debug?: boolean,
  warningBeforeUnload?: boolean,
  exports?: Record<string, (state: State) => any>,
  schema: RenderableNode[]
  setData: typeof setData,
  showIntro?: () => void,
  styles?: StylesProps['styles']
  title: string
  tableOfContents: Array<Object>
  translations?: Record<string, {
    key: string
    name: string
    tags?: {
      description?: string,
      heading?: string,
      image?: {
        small: string,
        large: string,
      }
      tooltips?: string,
    }
  }>
  wizard: WizardDefinition,
  showResetModal?: boolean,
}

function Wizard({
  data = {
    [NAME]: {}
  },
  debug = false,
  warningBeforeUnload = true,
  exports = {},
  showIntro = () => { },
  styles = {},
  translations = {},
  showResetModal: enableResetModal = true,
  schema,
  setData,
  tableOfContents,
  title,
  wizard
}: Props) {
  const [pageId, setPageId] = useState<string>(data[NAME].page || wizard.schema[0].id);
  const [showResetModal, setShowResetModal] = useState<boolean>();
  const pageWrapper = useRef<HTMLDivElement>(null);

  // @todo Consider finding a more elegant way for scrolling..?
  const setPage = (page: string, property?: string) => {
    if (property) {
      setImmediate(() => {
        const element = document.getElementById(property);

        if (!element) {
          return;
        }

        window.scroll(0, element.offsetTop);
      });
    } else {
      window.scrollTo(0, 0);
    }
    pageWrapper?.current?.focus()
    setData("page", page);
    setPageId(page);
  };

  const trackPage = (isInitialRender: boolean) => {
    const firstPage = wizard.schema[0];

    /**
     * Don't track if we have no page. No page, no question.
     * Probably something wrong with the schema...
     */
    if (!firstPage) {
      return;
    }

    const heading = isOfType(firstPage, ["Page", "Error"]) ? firstPage.heading : undefined

    if (isInitialRender) {
      track(wizard.meta.name, firstPage.id, heading);
    } else {
      const page = (schema || []).find(
        (item) => hasProperty(item, 'id') && item.id === pageId
      );

      if (page && hasProperty(page, 'id')) {
        track(wizard.meta.name, page.id, heading);
      }
    }
  }

  useEffect(() => {
    if (showResetModal !== undefined) {
      return
    }

    const { $computed, ...wizardData } = data[NAME] || {};

    const reset = enableResetModal && !!Object.keys(wizardData || {}).length
    setShowResetModal(reset);
  }, [showResetModal, data, enableResetModal])

  useEffect(() => {
    const wizardData = data[NAME] || {};

    if (wizardData.page) {
      setPageId(wizardData.page);
    }

    trackPage(true)
    helper()

    if (warningBeforeUnload) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      return () => {
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      }
    }
  }, [data, showResetModal])

  function helper() {
    if (!console || window.location.hostname !== "localhost") {
      return;
    }

    const errors = validateSchema(wizard);

    if (!errors.length) {
      // eslint-disable-next-line no-console
      console.log("🌈  The schema is ok");
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        "🚒  There seems to be something wrong with your schema 👇\n"
      );

      errors.forEach(({ path = [], error, id }) => {
        // eslint-disable-next-line no-console
        console.warn(`${path.join("./index")}${id ? ` (${id})` : ""}:
${error}
    `);
      });
    }
  };

  function getCurrentIndex() {
    return Math.max(
      0,
      schema.findIndex(
        ({ id }: any) => id === getData(data).page
      )
    );
  }

  function changePage(distance: number) {
    const pageIndex = getCurrentIndex();
    const newIndex = pageIndex + distance;

    if (newIndex >= schema.length || newIndex < 0) {
      return;
    }

    const changeToPage = schema[newIndex];
    hasProperty(changeToPage, 'id') && setPage(changeToPage.id);
  };

  const nextPage = () => changePage(1);
  const previousPage = () => changePage(-1);

  const pageIndex = Math.max(schema.findIndex((page) => hasProperty(page, 'id') && page.id === pageId), 0);
  const page = schema[pageIndex] as unknown as undefined | Extract<RenderableNode, { id: string }>;
  const lastPage = pageIndex + 1 === schema.length;
  const firstPage = pageIndex === 0;
  const nextPageIsResult = schema[pageIndex + 1]
    ? schema[pageIndex + 1].type === "Result"
    : false;

  return (
    <StyleProvider styles={styles}>
      <WizardPrimitive>
        {showResetModal === true && <Modal showIntro={showIntro} />}
        <Grid.Grid>
          <SkipLink />
          <Nav
            page={page?.id}
            setPage={setPage}
            heading={title}
            tableOfContents={tableOfContents}
            showIntro={showIntro}
            translations={translations}
          />
          <Grid.FocusWrapper
            tabIndex={-1}
            ref={pageWrapper}
          >
            {page && isOfType(page, ["Result"]) ? (
              <Result
                {...page}
                debug={debug}
                pageid={page.id}
                wizard={wizard}
                title={title}
                schema={schema}
                setPage={setPage}
                exports={exports}
              />
            ) : (
              page && isOfType(page, ["Page", "Error", "ErrorOk"]) && (
                <Page
                  firstPage={firstPage}
                  lastPage={lastPage}
                  nextPage={nextPage}
                  previousPage={previousPage}
                  debug={debug}
                  nextPageIsResult={nextPageIsResult}
                  pageid={page.id}
                  {...page}
                />
              )
            )}
          </Grid.FocusWrapper>
        </Grid.Grid>
      </WizardPrimitive>
    </StyleProvider>
  )
}

const mapStateToProps = (state: State, { wizard, translations }: { wizard: WizardDefinition, translations?: Translations }) => {
  const nodeTitles = getNodeTitles(wizard.schema, translations || {}, state);

  const schema = reduceWizard(wizard.schema, state, nodeTitles, translations);

  return {
    schema,
    debug: !!window.location.search.match("debug"),
    tableOfContents: getPages(schema, nodeTitles),
    title: getTitle(state, wizard, translations || {}),
    data: state,
  };
};

export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators({ setData }, dispatch)
)(Wizard);
