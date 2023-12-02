import { State } from "losen";
import { Translations } from "./reduce-wizard";
import { get } from "lodash";
import { getCurrentLanguage } from "./get-current-language";

export function getTranslation(state: State, translations: Translations) {
  const currentLanguage = getCurrentLanguage(state);

  return get(translations, [currentLanguage, "tags"], {});
}
