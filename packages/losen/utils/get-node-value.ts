import get from "lodash/get";
import { getData } from "./get-data";
import { State } from "losen";

export function getNodeValue(property: string, state: State) {
  return get(getData(state), property);
}
