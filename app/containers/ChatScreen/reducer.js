import { SET_MESSAGE, SET_TYPING_STATUS, SEND_MESSAGE } from './action';

const defaultState = {
  messages: [],
  isTyping: false,
  currentMessage: '',
};

export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return Object.assign({}, state, {
        messages: state.messages,
        isTyping: state.isTyping,
        currentMessage: action.payload.message,
      });
    case SET_TYPING_STATUS:
      return Object.assign({}, state, {
        messages: state.messages,
        isTyping: action.payload.isTyping,
        currentMessage: state.currentMessage,
      });
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.payload.message],
        isTyping: state.isTyping,
        currentMessage: '',
      });
    default:
      return state;
  }
}
