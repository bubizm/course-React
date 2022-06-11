import { AUTHORS } from '../../components/Utils/constants';

export const add_message = 'messages::add_message';
export const delete_message = 'messages::delete_message';
export const edit_message = 'messages::edit_message';

export const addMessage = (chatId, newMsg) => ({
  type: add_message,
  payload: {
    chatId,
    newMsg,
  },
});

export const deleteMessage = (chatId, msgId) => ({
  type: delete_message,
  payload: {
    chatId,
    msgId,
  },
});

export const editMessage = (chatId, msgId, newText) => ({
  type: edit_message,
  payload: {
    chatId,
    msgId,
    newText,
  },
});

let timeout;

export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
  dispatch(addMessage(chatId, newMsg));

  if (newMsg.author !== AUTHORS.robot) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const botMsg = {
        text: 'Are you OK!?',
        author: AUTHORS.robot,
        id: `msg-${Date.now()}`,
      };
      dispatch(addMessage(chatId, botMsg));
    }, 1000);
  }
};
