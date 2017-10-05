import React from 'react';
import PropTypes from 'prop-types';
import { IntroMain } from '../primitives/IntroMain';
import { Primitives } from 'losen';

export default function Intro({ close }) {
  return (
    <Primitives.Wizard>
      <IntroMain>
        <header className="temp">(her kommer det såklart en header lik den i selve veiviseren)</header>
        <Primitives.Heading.H1>Burde du skaffe deg katt?</Primitives.Heading.H1>
        <Primitives.Paragraphs.P>
          Dette er en veiviser for deg som vil finne ut om du er kvalifisert til å skaffe den en søt og uskyldig(?) liten katt. Det vil si om du kan ta ansvar for de delene av arbeidet som en katt vil kreve av deg, og at du står ansvarlig for at arbeidet utføres riktig. Vi hjelper deg også å lage en erklæring for ansvarsrett som du kan skrive ut, signere og sende til ansvarlig søker, men det er i en annen veiviser.<br />
          Du får kun velge ett ansvarsområde med én tiltalsklasse og én funksjon for hver gang du gjennomfører denne veiviseren.
        </Primitives.Paragraphs.P>
        <Primitives.Figure>
          <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/18447415_10155393402102558_3004629122651437765_n.jpg?oh=25762607ce16dceda32d1a69df61bde3&oe=5A47FED5" alt="katter er fine" />
          <figcaption>
            Bildetekst kanskje?
          </figcaption>
        </Primitives.Figure>
        <Primitives.Heading.H2 small>Før du begynner må du vite:</Primitives.Heading.H2>
        <ol>
          <li>Hvem du er</li>
          <li>Hvor du bor</li>
          <li>Hvor mange timer du er borte fra boligen din hver dag</li>
        </ol>
        <Primitives.Heading.H2 small>Usikker?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Snakk med en voksen.
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2 small>Når veiviseren er fullført</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Når du har fullført veiviseren får du vite om du kan skaffe deg katt eller ikke. I en annen veiviser vil du kanskje få erklæring tilsendt på e-post, slik at du kan signere den og sende den videre til ansvarlig søker.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};
