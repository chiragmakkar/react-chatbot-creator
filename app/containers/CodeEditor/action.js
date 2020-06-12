export const ADD_TAB = 'ADD_TAB';
export const DELETE_TAB = 'DELETE_TAB';
export const SELECT_TAB = 'SELECT_TAB';
export const UPDATE_CODE = 'UPDATE_CODE';
export const SAVE_CODE = 'SAVE_CODE';
export const UPDATE_VALIDITY = 'UPDATE_VALIDITY';

export function addTab(tab) {
  return {
    type: ADD_TAB,
    payload: tab,
  };
}

export function deleteTab(name) {
  return {
    type: DELETE_TAB,
    payload: { name },
  };
}

export function selectTab(name) {
  return {
    type: SELECT_TAB,
    payload: { name },
  };
}

export function updateCode(code) {
  return {
    type: UPDATE_CODE,
    payload: { code },
  };
}

export function saveCode() {
  return {
    type: SAVE_CODE,
  };
}

export function updateValidity(isValidCode) {
  return {
    type: UPDATE_VALIDITY,
    payload: { isValidCode },
  };
}
