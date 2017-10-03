import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../primitives/Heading';
import { TextInput as Input } from '../primitives/Input';
import { Lead } from '../primitives/Paragraphs';
import { MainButton as Button } from '../primitives/Button';
import Main from '../primitives/grid/Main';
import { SpecificBlock } from '../primitives/Block';
import Summary from './Summary';
import Block from './blocks/Block';

export default function ErrorResult({ errorPages, schema, setPage, children }) {
  return (
    <Main>
      <H2>
        Du har ikke svart på alle spørsmålene
      </H2>
      <Lead>
        Du må fullføre alle stegene i veiviseren for å få et resultat. Under ser du hvilke spørsmål som mangler svar. Hvis du ønsker å endre noe, kan du klikke deg inn på hvert steg i oppsummeringen nedenfor.
      </Lead>

      <SpecificBlock>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        {children.map(block => <Block key={block.property} {...block} />)}

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

ErrorResult.defaultProps = {
  children: [],
  schema: [],
};

ErrorResult.propTypes = {
  children: PropTypes.array,
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
};
