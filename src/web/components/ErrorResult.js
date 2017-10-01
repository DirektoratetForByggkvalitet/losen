import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../primitives/Heading';
import { TextInput as Input } from '../primitives/Input';
import { Lead } from '../primitives/Paragraphs';
import { MainButton as Button } from '../primitives/Button';
import Main from '../primitives/grid/Main';
import { SpecificBlock } from '../primitives/Block';
import Summary from './Summary';

export default function ErrorResult({ errorPages, schema, setPage }) {
  return (
    <Main>
      <H2>
        Se over og fullfør
      </H2>
      <Lead>
        Les nøye gjennom før du fortsetter. Når du trykker fullfør vil du motta erklæringen på epost. Den må du skrive ut, signere og sende videre til ansvarlig søker. Ansvarlig søker vil sende erklæringen videre til kommunen sammen med sin gjennomføringsplan.
      </Lead>

      <SpecificBlock>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        <div style={{ background: '#faefdf', marginBottom: '20px', padding: '20px', fontStyle: 'italic' }}>
          <Input type="checkbox" placeholder="E-post" />
          Ansvarlig kontrollerende erklærer uavhengighet, jf. SAK10 § 14-1, og vil redegjøre for endringer som kan påvirke uavhengigheten jf. SAK10 §12-5
        </div>
        <div>
          <p>
            Foretaket er kjent med reglene om straff og sanksjoner i plan- og bygningsloven kap. 32 og at det kan medføre reaksjoner dersom det gis uriktige opplysninger.
          </p>
          <p>
            Foretaket forplikter seg til å stille med nødvendig kompetanse i tiltaket, jf. SAK10 kap. 10 og 11.
          </p>
        </div>
        <div style={{ background: '#f0f2cb', padding: '20px' }}>
          <H2>Send erklæringen til</H2>
          <p>Hvis du ønsker erklæringen tilsendt en annen epost enn kontaktperson i firma, må du skrive inn adressen her</p>
          <Input type="text" placeholder="E-post" /><br /><br />
          <Button>Send</Button>
        </div>
      </SpecificBlock>
    </Main>
  );
}

ErrorResult.defaultProps = {
  children: [],
  schema: [],
};

ErrorResult.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
};
