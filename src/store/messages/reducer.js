import { add_chat, delete_chat } from '../chats/actions';
import {
  addMessage,
  add_message,
  deleteMessage,
  delete_message,
  edit_message,
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
      delete newMsgs[action.payload.id];
      return newMsgs;
    }
    case delete_message: {
      return {
        ...state,
        [action.payload.chatId]: state[action.payload.chatId].filter(
          (message) => message.id !== action.payload.msgId
        ),
      };
    }
    case edit_message: {
      const { chatId, msgId, newText } = action.payload;
      const editIndex = state[chatId].findIndex(
        (message) => message.id === msgId
      );

      const newState = { ...state };
      // console.log(newState[chatId][editIndex]);
      newState[chatId][editIndex] = {
        ...newState[chatId][editIndex],
        text: newText,
      };
      return newState;
    }
    default:
      return state;
  }
};
