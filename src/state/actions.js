import { NAME } from '.';

export const SET_DATA = `${NAME}/SET`;

export function setData(key, value) {
  return {
    type: SET_DATA,
    payload: { key, value },
  };
}
