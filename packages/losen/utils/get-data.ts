import { State } from "..";
import { NAME } from "../state/constants";

/**
 * Get wizard data
 */
export function getData(state: State): State["@WIZARD_STATE"] {
  return state[NAME] || {};
}
