export const SET_DATA = 'SET_DATA';

export function setData(key, value) {
  return {
    type: SET_DATA,
    payload: { key, value },
  };
}
