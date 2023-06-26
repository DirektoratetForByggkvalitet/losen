export const SET_DATA: "SET_DATA" = "SET_DATA";
export const RESET_DATA: "RESET_DATA" = "RESET_DATA";
export const SHOW_RESET_MODAL: "SHOW_RESET_MODAL" = "SHOW_RESET_MODAL";

export function setData(key: string, value: any) {
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

export function resetModal(show = true) {
  return {
    type: SHOW_RESET_MODAL,
    payload: { show },
  };
}

export function setLanguage(language: string) {
  return setData("$language", language);
}

export type Action =
  | ReturnType<typeof setData>
  | ReturnType<typeof resetData>
  | ReturnType<typeof resetModal>;
