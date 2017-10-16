import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { getErrorPages } from '../utils/selectors';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
import ExportData from './ExportData';
import Html from './helper/Html';
import Summary from './Summary';

import { H1, H2 } from '../primitives/Heading';
import { P, Lead } from '../primitives/Paragraphs';
import { MainButton } from '../primitives/Button';
import { SpecificBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';
import Notice from '../primitives/Notice';
import PrintForm from '../primitives/PrintForm';
import Signature from '../primitives/Signature';
import Export from '../primitives/Export';

function Result({
  children = [],
  debug,
  errorPages,
  exporter,
  exports,
  heading,
  lead,
  pageid,
  previousPage,
  schema,
  setPage,
  summary,
}) {
  if (errorPages.length) {
    return (
      <ErrorResult
        schema={schema}
        setPage={setPage}
        page={pageid}
        previousPage={previousPage}
        errorPages={errorPages}
        children={children}
      />
    );
  }

  return (
    <Main result debug={debug} data-id={pageid} id="main">
      <H1 result>{heading}</H1>
      <Lead result>
        <Html text={lead} />
      </Lead>

      <SpecificBlock>
        <H1 small>Erklæring om ansvarsrett</H1>
        {summary ? (
          <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        ) : null}

        {exporter ? (
          <PrintForm>
            <Notice>
              <input type="checkbox" />&nbsp;
              Ansvarlig kontrollerende erklærer uavhengighet, jf. SAK10 § 14-1,
              og vil redegjøre for endringer som kan påvirke uavhengigheten jf.
              SAK10 §12-5
            </Notice>
            <br />
            <div>
              <P>
                <strong>Ved å sende inn denne erklæringen bekrefter du at:</strong><br />
                1) Foretaket er kjent med reglene om straff og
                sanksjoner i plan- og bygningsloven kap. 32 og at det kan
                medføre reaksjoner dersom det gis uriktige opplysninger.<br />
                2) Foretaket forplikter seg til å stille med
                nødvendig kompetanse i tiltaket, jf. SAK10 kap. 10 og 11.
              </P>
            </div>
            <Signature>
              <div>Dato og signatur</div>
            </Signature>
          </PrintForm>
        ) : null}
      </SpecificBlock>

      {exporter ? (
        <Export>
          <H2>For å sende inn erklæringen</H2>
          <P>
            Erklæringen er nå fylt ut og klar til å sendes inn. Du må selv skrive ut erklæringen og sende den til (adresse her!)
          </P>
          <MainButton>Skriv ut</MainButton><br />
          {exporter &&
            exports[exporter] && <ExportData exporter={exports[exporter]} />}
        </Export>
      ) : null}

      {children.map(block => <Block key={block.property} {...block} />)}
    </Main>
  );
}

Result.propTypes = {
  children: PropTypes.array,
  debug: PropTypes.bool,
  errorPages: PropTypes.array.isRequired,
  exporter: PropTypes.string,
  exports: PropTypes.objectOf(PropTypes.func),
  heading: PropTypes.string,
  lead: PropTypes.string,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  summary: PropTypes.bool,
};

Result.defaultProps = {
  children: [],
  debug: false,
  exporter: null,
  exports: {},
  heading: 'Missing page heading',
  lead: '',
  schema: [],
  summary: true,
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
