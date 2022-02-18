import { add_chat, delete_chat } from './actions';

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_chat: {
      return [...state, { name: action.payload.name, id: action.payload.id }];
    }
    case delete_chat: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default:
      return state;
  }
};
