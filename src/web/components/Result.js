import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrorPages } from '../utils/selectors';

import { H2 } from '../primitives/Heading';
import { P, Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import { TextInput as Input } from '../primitives/Input';
import Main from '../primitives/grid/Main';
import Block from './blocks/Block';
import Html from './helper/Html';
import ErrorResult from './ErrorResult';
import Summary from './Summary';
import ExportData from './ExportData';

function Result({
  errorPages,
  previousPage,
  heading,
  children = [],
  pageid,
  lead,
  setPage,
  schema,
  summary,
  exports,
  exporter,
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
    <Main>
      <H2>{heading}</H2>
      <Lead>
        <Html text={lead} />
      </Lead>

      <SpecificBlock>
        {summary ? (
          <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        ) : null}

        {exporter ? (
          <div>
            <div
              style={{
                background: '#f0f2cb',
                marginBottom: '20px',
                padding: '20px',
                fontStyle: 'italic',
              }}
            >
              <Input type="checkbox" placeholder="E-post" />
              Ansvarlig kontrollerende erklærer uavhengighet, jf. SAK10 § 14-1,
              og vil redegjøre for endringer som kan påvirke uavhengigheten jf.
              SAK10 §12-5
            </div>
            <div>
              <h4>Ved å sende inn denne erklæringen bekrefter du at:</h4>
              <P>
                <strong>1)</strong> Foretaket er kjent med reglene om straff og
                sanksjoner i plan- og bygningsloven kap. 32 og at det kan
                medføre reaksjoner dersom det gis uriktige opplysninger.
              </P>
              <P>
                <strong>2)</strong> Foretaket forplikter seg til å stille med
                nødvendig kompetanse i tiltaket, jf. SAK10 kap. 10 og 11.
              </P>
            </div>
          </div>
        ) : null}
      </SpecificBlock>

      {exporter ? (
        <div style={{ maxWidth: '700px', padding: '20px' }}>
          <H2>Send inn erklæringen</H2>
          <P>
            Skjemaet sendes inn via altinn.no. Klikk på knappen under for å
            kopiere data fra skjemaet. Dette kan så limes direkte inn i skjemaet
            på altinn. Du skal også ideelt sett kunne få dette tilsendt på
            e-post, men det har vi ikke støtte for ennå.
          </P>
          {exporter &&
            exports[exporter] && <ExportData exporter={exports[exporter]} />}
        </div>
      ) : (
        <div style={{ maxWidth: '700px', padding: '20px' }}>
          <H2>Hva kan du gjøre? Veien videre</H2>
          <P>
            Du har ikke det som skal til for å skaffe deg katt. Greit nok. Men
            hva kan du gjøre med det? DiBK vet sikkert svaret! Gå til DiBK sine
            nettsider! Sjekk ut en annen veiviser! Lenker her?
          </P>
          {exporter &&
            exports[exporter] && <ExportData exporter={exports[exporter]} />}
        </div>
      )}

      {children.map(block => <Block key={block.property} {...block} />)}
    </Main>
  );
}

Result.propTypes = {
  exports: PropTypes.objectOf(PropTypes.func),
  exporter: PropTypes.string,
  heading: PropTypes.string,
  summary: PropTypes.bool,
  lead: PropTypes.string,
  children: PropTypes.array,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  errorPages: PropTypes.array.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
};

Result.defaultProps = {
  heading: 'Missing page heading',
  lead: '',
  children: [],
  schema: [],
  summary: true,
  exports: {},
  exporter: null,
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
