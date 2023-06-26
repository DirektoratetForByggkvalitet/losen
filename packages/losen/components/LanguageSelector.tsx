import React from "react";
import { connect } from "react-redux";
import values from "lodash/values";

import { setLanguage } from "losen/state/actions";
import { SmallButton } from "losen/primitives/Button";
import { Simple as Grid } from "losen/primitives/grid";
import { getCurrentLanguage } from "losen/utils/get-current-language";
import type { State } from "losen";

type Props = {
  translations: Record<string, Record<string, any>>
  setLanguage: (languageKey: string) => void
  currentLanguage: string
}

function LanguageSelector({ translations: translationsObject, currentLanguage, setLanguage }: Props) {
  const handleLanguageSelect = (languageKey: string) => () => setLanguage(languageKey);

  // Get an array of the translations from the object values
  const translations = values(translationsObject);

  // Return no lang selector if we have no translations
  if (!translations || !translations.length) {
    return null;
  }

  // Return no lang selector if we have only norwegian
  if (translations.length === 1 && translationsObject.no) {
    return null;
  }

  return (
    <Grid padItems>
      {[
        /**
         * If we have translations, but no norwegian one we need
         * to add it in order to have a way to select the norwegian
         * original
         */
        ...(translationsObject.no ? [] : [{ key: "no", name: "Norsk" }]),
        ...translations,
      ].map(({ key, name }) => (
        <SmallButton
          key={key}
          disabled={key === currentLanguage}
          onClick={handleLanguageSelect(key)}
        >
          {name}
        </SmallButton>
      ))}
    </Grid>
  );
}

const mapStateToProps = (state: State) => ({
  currentLanguage: getCurrentLanguage(state),
});

export default connect(mapStateToProps, { setLanguage })(LanguageSelector);
