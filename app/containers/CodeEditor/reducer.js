const {
  ADD_TAB,
  DELETE_TAB,
  SELECT_TAB,
  UPDATE_CODE,
  UPDATE_VALIDITY,
  SAVE_CODE,
} = require('./action');

const defaultState = {
  tabs: [
    {
      name: 'index.js',
      code: `/* This is index.js \n* Please don't modify/add any functions apart from respond function. \n*/ \nasync function respond(input) {
    const translatedText = await Campk12.translate(input, "spanish")
    return translatedText
}`,
      deletable: false,
      selected: true,
    },
  ],
  isValidCode: false,
  currentCode: `/* This is index.js \n* Please don't modify/add any functions apart from respond function. \n*/ \nasync function respond(input) {
    const translatedText = await Campk12.translate(input, "spanish")
    return translatedText
}`,
};

export default function codeReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TAB:
      return Object.assign({}, state, {
        tabs: [
          ...state.tabs.map(tab => {
            if (tab.selected) tab.selected = false;
            return tab;
          }),
          action.payload,
        ],
        isValidCode: state.isValidCode,
        currentCode: action.payload.code,
      });
    case DELETE_TAB:
      return Object.assign({}, state, {
        tabs: state.tabs
          .filter(tab => tab.name !== action.payload.name)
          .map((tab, index) => {
            if (index === 0) {
              tab.selected = true;
              currentCode = tab.code;
            }
            return tab;
          }),
        isValidCode: state.isValidCode,
        currentCode: currentCode,
      });
    case SELECT_TAB:
      let currentCode = '';
      return Object.assign({}, state, {
        tabs: state.tabs.map(tab => {
          if (tab.name === action.payload.name) {
            tab.selected = true;
            currentCode = tab.code;
          } else tab.selected = false;
          return tab;
        }),
        isValidCode: state.isValidCode,
        currentCode: currentCode,
      });
    case UPDATE_CODE:
      return Object.assign({}, state, {
        tabs: state.tabs,
        isValidCode: state.isValidCode,
        currentCode: action.payload.code,
      });
    case SAVE_CODE:
      return Object.assign({}, state, {
        tabs: state.tabs.map(tab => {
          if (tab.selected) tab.code = state.currentCode;
          return tab;
        }),
        isValidCode: state.isValidCode,
        currentCode: state.currentCode,
      });
    case UPDATE_VALIDITY:
      return Object.assign({}, state, {
        tabs: state.tabs,
        isValidCode: action.payload.isValidCode,
        currentCode: state.currentCode,
      });
    default:
      return state;
  }
}
