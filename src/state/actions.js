export const SET_DATA = 'SET_DATA';
export const RESET_DATA = 'RESET_DATA';

export function setData(key, value) {
  return {
    type: SET_DATA,
    payload: { key, value },
  };
}

export function resetData() {
  return {
    type: RESET_DATA,
  };
}
