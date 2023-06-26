import get from "lodash/get";
import { getData } from "./get-data";
import type { State } from "losen";

export function getCurrentLanguage(
  state: State,
  defaultValue: string | null = "no"
): string {
  return get(getData(state), "$language", defaultValue);
}
