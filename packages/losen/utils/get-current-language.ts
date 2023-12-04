import { get } from "lodash";
import { getData } from "./get-data";
import type { State } from "..";

export function getCurrentLanguage(
  state: State,
  defaultValue: string | null = "no"
): string {
  return get(getData(state), "$language", defaultValue);
}
