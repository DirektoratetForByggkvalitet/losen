import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrorPages } from '../utils/selectors';

import { H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import { TextInput as Input } from '../primitives/Input';
import { MainButton as Button } from '../primitives/Button';
import Main from '../primitives/grid/Main';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
import Summary from './Summary';
import ExportData from './ExportData';

function Result({
  errorPages,
  previousPage,
  title,
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
      />
    );
  }

  return (
    <Main>
      <H2>{title}</H2>
      <Lead>{lead}</Lead>

      <SpecificBlock>
        {summary ? (
          <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        ) : null}

        {children.map(block => <Block key={block.property} {...block} />)}

        {exporter &&
          exports[exporter] && <ExportData exporter={exports[exporter]} />}

        <div style={{ background: '#f0f2cb', marginBottom: '20px', padding: '20px', fontStyle: 'italic' }}>
          <Input type="checkbox" placeholder="E-post" />
          Ansvarlig kontrollerende erklærer uavhengighet, jf. SAK10 § 14-1, og vil redegjøre for endringer som kan påvirke uavhengigheten jf. SAK10 §12-5
        </div>
        <div>
          <h4>Ved å sende inn denne erklæringen bekrefter du at:</h4>
          <p>
            <strong>1)</strong> Foretaket er kjent med reglene om straff og sanksjoner i plan- og bygningsloven kap. 32 og at det kan medføre reaksjoner dersom det gis uriktige opplysninger.
          </p>
          <p>
            <strong>2)</strong> Foretaket forplikter seg til å stille med nødvendig kompetanse i tiltaket, jf. SAK10 kap. 10 og 11.
          </p>
        </div>
      </SpecificBlock>
      <div style={{ maxWidth: '700px', padding: '20px' }}>
        <H2>Send erklæringen til</H2>
        <p>Hvis du ønsker erklæringen tilsendt en annen epost enn kontaktperson i firma, må du skrive inn adressen her</p>
        <Input type="text" placeholder="E-post" /><br /><br />
        <Button>Send</Button>
      </div>
    </Main>
  );
}

Result.propTypes = {
  exports: PropTypes.objectOf(PropTypes.func),
  exporter: PropTypes.string,
  title: PropTypes.string,
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
  title: 'Missing page title',
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
