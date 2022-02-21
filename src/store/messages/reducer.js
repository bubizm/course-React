import { add_chat, delete_chat } from '../chats/actions';
import {
  addMessage,
  add_message,
  deleteMessage,
  delete_message,
} from './actions';

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_message: {
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload.newMsg,
        ],
      };
    }
    case add_chat: {
      return {
        ...state,
        [action.payload.id]: [],
      };
    }
    case delete_chat: {
      const newMsgs = { ...state };
      delete newMsgs[action.payload];
      return newMsgs;
    }
    case delete_message: {
      return {
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload.newMsg,
        ],
      };
    }
    default:
      return state;
  }
};
