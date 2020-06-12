export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_TYPING_STATUS = 'SET_TYPING_STATUS';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: { message },
  };
}

export function setTypingStatus(isTyping) {
  return {
    type: SET_TYPING_STATUS,
    payload: { isTyping },
  };
}

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: { message },
  };
}
