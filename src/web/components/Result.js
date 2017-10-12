import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { getErrorPages } from '../utils/selectors';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
import ExportData from './ExportData';
import Html from './helper/Html';
import Summary from './Summary';

import { H1, H2, H3 } from '../primitives/Heading';
import { P, Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import { TextInput as Input } from '../primitives/Input';
import Main from '../primitives/grid/Main';

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
    <Main debug={debug} data-id={pageid}>
      <H1>{heading}</H1>
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
                fontStyle: 'italic',
                marginBottom: '20px',
                padding: '20px',
              }}
            >
              <Input type="checkbox" placeholder="E-post" />
              Ansvarlig kontrollerende erklærer uavhengighet, jf. SAK10 § 14-1,
              og vil redegjøre for endringer som kan påvirke uavhengigheten jf.
              SAK10 §12-5
            </div>
            <div>
              <H3>Ved å sende inn denne erklæringen bekrefter du at:</H3>
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
          <H2>For å sende inn erklæringen</H2>
          <P>
            Du kan nå bruke informasjonen du har lagt inn til å sende inn erklæringen. Det gjøres via altinn.no. Klikk på knappen under for å kopiere med deg informasjonen herfra. Dette kan limes direkte inn i et skjema på altinn.no.
          </P>
          {exporter &&
            exports[exporter] && <ExportData exporter={exports[exporter]} />}
        </div>
      ) : (
        <div style={{ maxWidth: '700px', padding: '20px' }}>
          <H2>Du kan ikke fullføre veiviseren</H2>
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
