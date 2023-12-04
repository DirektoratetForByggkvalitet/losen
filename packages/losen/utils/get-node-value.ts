import { get } from "lodash";
import { getData } from "./get-data";
import { State } from "..";

export function getNodeValue(property: string, state: State) {
  return get(getData(state), property);
}
