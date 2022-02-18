import { change_name, change_register, change_show_name } from './actions';

const initialState = {
  name: 'Vlad',
  showName: false,
  checked: false,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case change_show_name: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case change_name: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case change_register: {
      return {
        ...state,
        name: action.payload,
        checked: !state.checked,
      };
    }
    default:
      return state;
  }
};
