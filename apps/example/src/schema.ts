import { WizardDefinition } from "losen";
import fig1 from "./assets/fig1.jpeg";

const schema: WizardDefinition = {
  meta: {
    title: "Burde du få deg katt?",
    name: "Burde du få deg katt?",
    footer: "Your footer here!",
  },
  schema: [
    {
      id: "relation",
      type: "Page",
      heading: "Forhold til katter",
      lead: "Før vi bestemmer hvilken katt som passer best for deg, må vi avgjøre om du kan ha katt i det hele tatt. Vennligst svar så sannferdig du klarer.",
      children: [
        {
          id: "noResidenceToggle2",
          property: "noResidenceToggle2",
          heading: "Har du bebyggelse på eiendommen?",
          type: "Checkbox",
          optional: true,
          update: [
            "preferences.love",
            "builtGarage",
            "builtSmallBuilding",
            "builtOther",
          ],
          options: [
            {
              id: "noResidenceToggle2.yes",
              type: "Answer",
              heading: "Det er ingen bebyggelse på eiendommen",
              value: "yes",
            },
          ],
        },
        {
          id: "preferences.love",
          property: "preferences.love",
          type: "Radio",
          heading: "Er du glad i katter?",
          text: "Svar helt ærlig. Dette er viktig både for katten og deg.",
          grid: true,
          options: [
            {
              id: "preferences.love.yes",
              type: "Answer",
              heading: "Ja",
              value: "ja",
            },
            {
              id: "preferences.love.no",
              type: "Answer",
              heading: "Nei",
              value: "nei",
            },
          ],
        },
        {
          id: "ape",
          type: "Branch",
          branches: [
            {
              test: {
                field: "preferences.love",
                operator: "eq",
                value: "ja",
              },
              children: [
                {
                  id: "living.type.group",
                  type: "Group",
                  heading: "Boforhold",
                  text: "Din bosituasjon kan være avgjørende for hvilken katt du burde ha.",
                  children: [
                    {
                      id: "living.type",
                      property: "living.type",
                      type: "Radio",
                      heading: "Hvor bor du?",
                      options: [
                        {
                          id: "living.type.hybel",
                          type: "Answer",
                          heading: "Hybel",
                          value: "hybel",
                        },
                        {
                          id: "living.type.leilighet",
                          type: "Answer",
                          heading: "Leilighet",
                          value: "leilighet",
                        },
                        {
                          id: "living.type.rekkehus",
                          type: "Answer",
                          heading: "Rekkehus",
                          value: "rekkehus",
                        },
                        {
                          id: "living.type.enebolig",
                          type: "Answer",
                          heading: "Enebolig",
                          value: "enebolig",
                        },
                        {
                          id: "living.type.annet",
                          type: "Answer",
                          heading: "Annet (men skal være input)",
                          value: "annet",
                        },
                      ],
                    },
                    {
                      id: "living.floor",
                      property: "living.floor",
                      type: "Select",
                      heading: "I hvilken etasje bor du?",
                      text: "Hvis du bor veldig høyt oppe kan katten falle ned og dø.",
                      hide: {
                        type: "or",
                        clauses: [
                          {
                            field: "living.type",
                            operator: "not",
                          },
                          {
                            field: "living.type",
                            operator: "eq",
                            value: "enebolig",
                          },
                          {
                            field: "living.type",
                            operator: "eq",
                            value: "rekkehus",
                          },
                          {
                            field: "living.type",
                            operator: "eq",
                            value: "annet",
                          },
                        ],
                      },
                      options: [
                        {
                          id: "living.floor.1",
                          type: "Answer",
                          heading: "1",
                          value: "1",
                        },
                        {
                          id: "living.floor.2",
                          type: "Answer",
                          heading: "2",
                          value: "2",
                        },
                        {
                          id: "living.floor.3",
                          type: "Answer",
                          heading: "3",
                          value: "3",
                        },
                        {
                          id: "living.floor.4",
                          type: "Answer",
                          heading: "4",
                          value: "4",
                        },
                        {
                          id: "living.floor.5",
                          type: "Answer",
                          heading: "5",
                          value: "5",
                        },
                        {
                          id: "living.floor.6",
                          type: "Answer",
                          heading: "6",
                          value: "6",
                        },
                        {
                          id: "living.floor.7",
                          type: "Answer",
                          heading: "7",
                          value: "7",
                        },
                        {
                          id: "living.floor.8",
                          type: "Answer",
                          heading: "8",
                          value: "8",
                        },
                        {
                          id: "living.floor.9",
                          type: "Answer",
                          heading: "9",
                          value: "9",
                        },
                        {
                          id: "living.floor.10",
                          type: "Answer",
                          heading: "10",
                          value: "10",
                        },
                        {
                          id: "living.floor.11",
                          type: "Answer",
                          heading: "11",
                          value: "11",
                        },
                        {
                          id: "living.floor.12",
                          type: "Answer",
                          heading: "12",
                          value: "12",
                        },
                        {
                          id: "living.floor.13",
                          type: "Answer",
                          heading: "13",
                          value: "13",
                        },
                        {
                          id: "living.floor.14",
                          type: "Answer",
                          heading: "14",
                          value: "14",
                        },
                        {
                          id: "living.floor.15",
                          type: "Answer",
                          heading: "15",
                          value: "15",
                        },
                      ],
                    },
                    {
                      id: "living.contract",
                      property: "living.contract",
                      type: "Radio",
                      heading: "Er dyrehold regulert av kontrakten din?",
                      hide: {
                        type: "or",
                        clauses: [
                          {
                            field: "living.type",
                            operator: "not",
                          },
                          {
                            field: "living.type",
                            operator: "eq",
                            value: "enebolig",
                          },
                          {
                            field: "living.type",
                            operator: "eq",
                            value: "annet",
                          },
                        ],
                      },
                      options: [
                        {
                          id: "living.contract.ja",
                          type: "Answer",
                          heading: "Ja",
                          value: "ja",
                        },
                        {
                          id: "living.contract.nei",
                          type: "Answer",
                          heading: "Nei",
                          value: "nei",
                        },
                      ],
                    },
                    {
                      id: "living.animals",
                      property: "living.animals",
                      type: "Radio",
                      heading: "Har du lov til å ha katt?",
                      hide: {
                        type: "or",
                        clauses: [
                          {
                            field: "living.contract",
                            operator: "not",
                          },
                          {
                            field: "living.contract",
                            operator: "eq",
                            value: "nei",
                          },
                        ],
                      },
                      options: [
                        {
                          id: "living.animals.ja",
                          type: "Answer",
                          heading: "Ja",
                          value: "ja",
                        },
                        {
                          id: "nliving.animals.ei",
                          type: "Answer",
                          heading: "Nei",
                          value: "nei",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "living.gone",
                  property: "living.gone",
                  type: "Number",
                  heading: "Hvor mange timer er du borte fra hjemmet hver dag?",
                  placeholder: "Timer",
                  minimum: 0,
                  maximum: 24,
                  step: 1,
                },
                {
                  id: "orgNr",
                  property: "orgnr",
                  type: "FetchOrg",
                  heading: "Organisasjonsnummer",
                  text: "<p>Eksempel: 992294035 eller 992 294 035</p>",
                  placeholder: "992 294 035",
                  source: "https://data.brreg.no/enhetsregisteret/api/enheter/",
                  information:
                    'Er firmaets navn eller adresse feil? Da må du endre denne informasjonen via skjemaet <a href="//www.altinn.no/no/Starte-og-drive-bedrift/Drive/Andre-driftsoppgaver/Flytting-og-omorganisering/Hvordan-meldes-flytting-og-andre-endringer/">Samordnet registermelding</a> i Altinn før du fortsetter.',
                  fetchSG: true,
                  SGheading:
                    "${name} er registrert med sentral godkjenning for følgende områder",
                  invalidapproval:
                    "Vi fant ikke godkjenningen din i systemet vårt",
                  invalidOrg:
                    "Vi fant ikke det organisasjonsnummeret. Kontroller at du har skrevet det riktig.",
                  SGsource: "https://sgregister.dibk.no/api/enterprises/",
                  validator: {
                    object: "orgid",
                    pattern: "^\\s*(\\d\\s*){9}$",
                    error: "Må være gyldig organisasjonsnummer",
                  },
                },
                {
                  id: "preferences.color",
                  property: "preferences.color",
                  type: "Radio",
                  heading: "Hva er yndlingsfargen din?",
                  text: "<p>Velg en farge</p>",
                  disabled: {
                    field: "living.gone",
                    operator: "lt",
                    value: 4,
                  },
                  options: [
                    {
                      id: "preferences.color.brun",
                      type: "Answer",
                      heading: "Brun",
                      value: "brun",
                    },
                    {
                      id: "preferences.color.svart",
                      type: "Answer",
                      heading: "Svart",
                      value: "svart",
                    },
                    {
                      id: "preferences.color.hvit",
                      type: "Answer",
                      heading: "Hvit",
                      value: "hvit",
                    },
                  ],
                },
              ],
            },
            {
              test: {
                field: "preferences.love",
                operator: "neq",
                value: "ja",
              },
              children: [
                {
                  id: "nocat",
                  type: "Result",
                  heading: "Du kan ikke ha katt 😿",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "features",
      type: "Page",
      heading: "Kattens egenskaper",
      lead: "Spørsmålene på denne siden er kanskje vanskelige å svare på hvis du ikke har vært så mye sammen med katter før. Det skjønner vi. Men katter er like forskjellige som deg og meg! Prøv å se for deg livet med en fin katt.",
      children: [
        {
          id: "cuddle",
          type: "Group",
          heading: "Katt og kos",
          text: "Noen katter hater kos. Noen katter liker å kose litt. Andre katter liker å kose veldig mye. Hva liker du?",
          children: [
            {
              id: "cuddle.hours",
              property: "cuddle.hours",
              type: "Number",
              heading: "Hvor mange timer kan du kose med katten hver dag?",
              placeholder: "Timer",
              minimum: 0,
              maximum: 24,
              step: 1,
              unit: "timer",
              text: 'Husk å beregne tid til å spise og sove for både deg og katten! <a href="/somewhere">Les mer om mat</a>',
            },
            {
              type: "Sum",
              id: "cuddle.hours.sum",
              property: "cuddle.sum",
              heading: "Dobbelt av kosetid",
              operations: ["-", "-"],
              values: ["cuddle.hours", 100],
            },
            {
              type: "Evaluation",
              id: "cuddle.hours.eval",
              happy: "Bra!",
              sad: "Det er ikke nok tid til å kose med katten",
              showValue: true,
              unit: "timer",
              testing: ["cuddle.hours", "cuddle.sum"],
            },
            {
              id: "cuddle.image",
              type: "Image",
              text: "Noen ganger er det kanskje behov for et bilde for å demonstrere. Det er det egentlig ikke her.",
              image: {
                url: fig1,
                alt: "alt for image",
              },
            },
            {
              id: "cuddle.fur",
              property: "cuddle.fur",
              type: "Radio",
              heading: "Hva slags pels liker du å kose med?",
              options: [
                {
                  id: "cuddle.fur.langharet",
                  type: "Answer",
                  heading: "Langhåret",
                  value: "langharet",
                },
                {
                  id: "cuddle.fur.kortharet",
                  type: "Answer",
                  heading: "Korthåret",
                  value: "kortharet",
                },
              ],
            },
          ],
        },
        {
          id: "preferences.predator",
          property: "preferences.predator",
          type: "Checkbox",
          heading: "Trenger du en katt som kan fange ekle dyr i huset ditt?",
          options: [
            {
              id: "preferences.predator.edderkopp",
              type: "Answer",
              heading: "Edderkopp",
              value: "edderkopp",
            },
            {
              id: "preferences.predator.mus",
              type: "Answer",
              heading: "Mus",
              value: "mus",
              disabled: {
                field: "preferences.predator.edderkopp",
                operator: "neq",
                value: true,
              },
            },
            {
              id: "preferences.predator.fluer",
              type: "Answer",
              heading: "Fluer",
              value: "fluer",
            },
            {
              id: "preferences.predator.rotter",
              type: "Answer",
              heading: "Rotter",
              value: "rotter",
            },
          ],
        },
      ],
    },
    {
      id: "optimalcat",
      type: "Page",
      heading: "Din optimale katt",
      lead: "Katter finnes i mange forskjellige farger, størrelser og sinnelag. Her kan du beskrive din optimale katt i størst mulig detalj. Vi skjønner at du er ivrig, men helst ikke skriv så mye at vi ikke gidder å lese det.",
      children: [
        {
          id: "optimal.cat",
          property: "optimal.cat",
          type: "Textarea",
          heading: "Beskriv din optimale katt",
          text: "Eksempel: En katt som liker å kose, men ikke for mye.",
        },
        {
          id: "cat.image",
          type: "Image",
          text: "Er det denne katten?",
          image: {
            url: "//www.pngmart.com/files/1/Cat-Jump-PNG.png",
            alt: "alt for image",
          },
        },
        {
          id: "example.cats",
          property: "example.cats",
          type: "Radio",
          heading: "Hvilken av disse kattene foretrekker du?",
          text: '<a href="//no.wikipedia.org/wiki/Kattefamilien" target="_blank">Les mer om katter</a>',
          options: [
            {
              id: "katt1",
              type: "Answer",
              heading: "Kjempesøt babykatt",
              text: "Denne katten er så liten at du kan ha den i lomma. Den er også kjempesøt og kjempeuskyldig. Det kan hende den bæsjer i senga di. Ingen vet hvor stor den blir, eller om den noensinne blir voksen.",
              image: {
                url: "//i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg",
                alt: "alt for image",
              },
              value: "katt1",
            },
            {
              id: "katt2",
              type: "Answer",
              heading: "Pølsekatt",
              text: "Dette er en veldig sjelden katt. Bare 1 av 8000 katter er pølsekatter. De krever ekstra mye kos og omsorg fordi de blir tvunget til å ha på seg den teite drakta. Det er en stor forpliktelse å få en slik katt.",
              image: {
                url: "//i.pinimg.com/736x/ae/51/9e/ae519e2800991519b1041a539747e0d4--food-costumes-costume-ideas.jpg",
                alt: "alt for image",
              },
              value: "katt2",
            },
            {
              id: "katt3",
              type: "Answer",
              heading: "Veldig smart katt",
              text: "Denne katten står bak hele denne veiviseren. Det er den smarteste katten i verden. Neida, vi bare tuller, katter kan jo ikke lage nettsider. Ennå, iallfall.",
              image: {
                url: "//lorempixel.com/156/156/cats",
                alt: "alt for image",
              },
              value: "katt3",
            },
            {
              id: "katt4",
              type: "Answer",
              heading: "Sint katt",
              text: "Dette er en veldig sint katt som hater alt. Den vil ikke kose, aller minst med deg. Du får definitivt være i fred hvis du skaffer deg denne katten.",
              image: {
                url: "//us.123rf.com/450wm/isselee/isselee1006/isselee100601392/7121151-close-up-di-chihuahua-arrabbiato-ringhio-2-anni-di-et--davanti-a-sfondo-bianco.jpg?ver=6",
                alt: "alt for image",
              },
              value: "katt4",
            },
          ],
        },
      ],
    },
    {
      id: "testtypes",
      type: "Page",
      heading: "Denne siden er for å teste alle de nye sidene",
      lead: "Ja denne siden har bare de nye typene vi trenger",
      children: [
        {
          id: "favourite.actor",
          property: "favourite.actor",
          type: "Input",
          validator: {
            pattern: "^\\d+(,\\d+)?$",
            error: "Oppgi på formatet 123,1239",
          },
          heading: "Hvem er din favorittskuespiller?",
          text: "Input burde kanskje ikke ha brødtekst som skiller spørsmål fra inputfelt?",
          placeholder: "Kit Harington",
        },
        {
          id: "behavior.with.animals",
          property: "behavior.with.animals",
          type: "Textarea",
          heading: "Skriv litt om hvordan du er med dyr",
          placeholder: "Hvordan oppfører du deg rundt dyr",
          image: {
            url: "//media.giphy.com/media/13f5iwTRuiEjjW/giphy.gif",
            alt: "alt for image",
            text: "Bildetekst her òg?",
          },
        },
        {
          id: "cat.information",
          type: "Text",
          heading: "Et lite notis med tekst",
          text: 'Kanskje man trenger å ha litt mer tekst innimellom, som ikke hører til et konkret felt. Det er greit det altså. Cat ipsum dolor sit amet, always hungry man running from cops stops to <a href="somewhere">pet cats</a>, goes to jail step on your keyboard while you\'re gaming and then turn in a circle . Pose purrfectly to show my beauty woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean. Lick butt, next to <a href="somewhere">human slave food dispenser</a>.',
        },
        {
          id: "cat.image",
          type: "Image",
          text: "Dette er en bildeblokk",
          image: {
            url: "//media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
            alt: "alt for image",
          },
        },
        {
          id: "tiltaksklasse",
          property: "tiltaksklasse",
          type: "Select",
          heading: "Hvilken tiltaksklasse er jobben?",
          text: '<a href="/somewhere">Les mer om tiltaksklasser</a>',
          options: [
            {
              id: "tiltaksklasse.tiltaksklasse1",
              type: "Answer",
              heading: "Tiltaksklasse 1",
              text: "Som regel vil alt arbeid med oppføring av eneboliger, tomannsboliger og rekkehus komme inn under tiltaksklasse 1. Deler av utførelsen av større boligbygninger innitil 3 etasjer kan også være tiltaksklasse 1. Likevel kan det hende at noe av arbeidet er spesielt vanskelig og må settes til tiltaksklasse 2 eller 3. ",
              image: {
                url: "//media.giphy.com/media/l0MYNYaAeaQwtlOta/giphy.gif",
                alt: "alt for image",
              },
              value: "tiltaksklasse1",
            },
            {
              id: "tiltaksklasse.tiltaksklasse2",
              type: "Answer",
              heading: "Tiltaksklasse 2",
              text: "Typiske bygninger i tiltaksklasse 2 er boligblokker og kontorbygg på 3-4 etasjer. Deler av utførelsen av større bygninger inntil 5 etasjer kan også være tiltaksklasse 2. Likevel kan det hende at noe av arbeidet er spesielt vanskelig og må settes til tiltaksklasse 3.",
              image: {
                url: "//media.giphy.com/media/3o6Ztrs0GnTt4GkFO0/giphy.gif",
                alt: "alt for image",
              },
              value: "tiltaksklasse2",
            },
            {
              id: "tiltaksklasse.tiltaksklasse3",
              type: "Answer",
              heading: "Tiltaksklasse 3",
              text: "Arbeid med store og kompliserte bygninger er i tiltaksklasse 3. Det kan også være enkelte ansvarsområder i mindre bygninger som må settes i tiltaksklasse 3 fordi det er spesielt vanskelig",
              image: {
                url: "//media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif",
                alt: "alt for image",
              },
              value: "tiltaksklasse3",
              disabled: {
                field: "samsvar.sende.1",
                operator: "eq",
                value: true,
              },
            },
          ],
        },
        {
          id: "samsvar.sende",
          property: "samsvar.sende",
          type: "Checkbox",
          heading: "Hvilken samsvarserklæring skal du sende?",
          options: [
            {
              id: "samsvar.sende.1",
              type: "Answer",
              heading: "1 Rammetillatelse",
              text: "Det første steget i en byggesak er en søknad om rammetillatelse. Her beskrives det hva man skal bygge, endre eller utbedre.",
              value: "1",
              image: {
                url: "//media.giphy.com/media/etSwiUkXNhTB6/giphy.gif",
                alt: "some alt",
              },
            },
            {
              id: "samsvar.sende.2",
              type: "Answer",
              heading: "2 Igangsettelse",
              text: "Dette er en søknad om hvorvidt man kan begynne selve byggearbeidet. Det er viktig å ikke ta ett eneste spadetak før man har fått godkjent denne!",
              value: "2",
              image: {
                url: "//media.giphy.com/media/2F5modVJ5dE9G/giphy.gif",
                alt: "some image alt",
              },
            },
            {
              id: "samsvar.sende.3",
              type: "Answer",
              heading: "2 Igangsettelse no image",
              text: "Dette er en søknad om hvorvidt man kan begynne selve byggearbeidet. Det er viktig å ikke ta ett eneste spadetak før man har fått godkjent denne!",
              value: "3",
            },
            {
              id: "samsvar.sende.4",
              type: "Answer",
              heading: "",
              text: "no heading Dette er en søknad om hvorvidt man kan begynne selve byggearbeidet. Det er viktig å ikke ta ett eneste spadetak før man har fått godkjent denne!",
              value: "4",
              image: {
                url: "//media.giphy.com/media/t8dPLNzwF5HMc/giphy.gif",
                alt: "some image alt",
              },
            },
          ],
        },
        {
          id: "produktType",
          property: "produktType",
          type: "Radio",
          grid: true,
          heading: "Hvilket produkt skal du føre tilsyn med?",
          text: "<p></p>",
          options: [
            {
              id: "produktType.brannsikkerFugemasse",
              type: "Answer",
              heading: "Brannsikker fugemasse",
              value: "brannsikkerFugemasse",
              image: {
                url: "//lorempixel.com/400/300/cats/",
                alt: "Brannsikker fugemasse",
              },
            },
            {
              id: "produktType.hulldekkeelementer",
              type: "Answer",
              heading: "Hulldekke-elementer",
              value: "hulldekkeelementer",
              image: {
                url: "//lorempixel.com/400/300/transport/",
                alt: "Hulldekke-element med CE-merke",
              },
            },
            {
              id: "produktType.laminertGlass",
              type: "Answer",
              heading: "Laminert glass",
              value: "laminertGlass",
              image: {
                url: "//lorempixel.com/400/300/animals/",
                alt: "Laminert glass med CE-merke",
              },
            },
            {
              id: "produktType.prefabrikertBaderomsmodul",
              type: "Answer",
              heading: "Prefabrikert baderomsmodul",
              value: "prefabrikertBaderomsmodul",
              image: {
                url: "//lorempixel.com/400/300/city/",
                alt: "Baderomsmodul",
              },
            },
            {
              id: "produktType.prefabrikertTrapp",
              type: "Answer",
              heading: "Prefabrikert trapp",
              value: "prefabrikertTrapp",
              image: {
                url: "//lorempixel.com/400/300/nature/",
                alt: "Trapp",
              },
            },
            {
              id: "produktType.prefabrikerteByggmodulerTre",
              type: "Answer",
              heading: "Prefabrikerte byggmoduler i tre",
              value: "prefabrikerteByggmodulerTre",
              image: {
                url: "//lorempixel.com/400/300/food/",
                alt: "Prefabrikert byggemodul i tre",
              },
            },
          ],
        },
      ],
    },
    {
      id: "hooray",
      type: "Result",
      exporter: "dataExport",
      heading: {
        complete: "Hurra - du kan ha katt 🌈",
        completeWithError: "Feil - rett opp svarene dine",
        incomplete: "Feil - du har ikke svart på alt",
        incompleteWithError: "Feil - rett opp svarene dine og svar på alt",
      },
      lead: {
        complete:
          "Les nøye gjennom svarene dine, og sjekk at alt stemmer før du tar med deg resultatene til ditt nærmeste adopsjonssenter for katter. Husk at du vil bli stilt til ansvar for at katten får det bra hos deg!",
        completeWithError: "Du kan ikke ha katt :( Se feilene dine under.",
        incomplete:
          "Vi kan ikke gi deg et råd med mindre du svarer på alle spørsmålene.",
        incompleteWithError:
          "Du kan ikke ha katt :( Se feil og manglende svar under.",
      },
    },
  ],
};

export default schema;
