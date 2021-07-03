import { bindActionCreators } from 'redux';

const actions = {
  addNotification: (message, level = 'info') => ({

    type: 'ADD_NOTIFICATION',
    message,
    level,

  }),
  clearNotification: () => ({ type: 'CLEAR_NOTIFICATION' }),
  confirmToDo: (message, onConfirm, onClear) => ({
    type: 'CONFIRM_TO_DO',
    message,
    onConfirm,
    onClear,
  }),
  clearConfirm: () => (
    {
      type: 'CLEAR_CONFIRM',
    }
  ),
  increaseLoaderCount: () => (
    {
      type: 'INCREASE_LOADER_COUNT',
    }
  ),
  decreaseLoaderCount: () => (
    {
      type: 'DECREASE_LOADER_COUNT',
    }
  ),
  resetLoaderCount: () => (
    {
      type: 'RESET_LOADER_COUNT',
    }
  ),
};

export default function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}
