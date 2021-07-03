import { combineReducers } from 'redux';

const reducer = (state = {
  addNotification: {
    message: '',
    level: '',
  },
  confirm: {
    open: false,
    message: '',
    onConfirm: () => {},
    onClear: () => {},
    onShowClear: true,
  },
  loaderCount: {
    count: 1,
  },
}, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        addNotification: {
          message: action.message,
          level: action.level,
        },
      };
    case 'CLEAR_NOTIFICATION': {
      return {
        ...state,
        addNotification: {
          message: '',
          level: '',
        },
      };
    }
    case 'CONFIRM_TO_DO': {
      const confirm = {
        ...state.confirm,
        open: true,
        message: action.message,
        onConfirm: action.onConfirm,
        onClear: action.onClear,
        onShowClear: !!action.onClear,
      };
      return { ...state, confirm };
    }
    case 'CLEAR_CONFIRM': {
      return {
        ...state,
        confirm: {
          open: false, message: '', onConfirm: () => {}, onClear: () => {},
        },
      };
    }
    case 'RESET_LOADER_COUNT': {
      const stateCount = 0;
      return { ...state, count: stateCount };
    }

    case 'INCREASE_LOADER_COUNT': {
      const stateCount = state.count + 1;
      return { ...state, count: stateCount };
    }

    case 'DECREASE_LOADER_COUNT': {
      const stateCount = state.count === 0 ? 0 : state.count - 1;
      return { ...state, count: stateCount };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  utilities: reducer,
});

export default rootReducer;
