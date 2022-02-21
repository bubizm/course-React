export const add_message = 'messages::add_message';
export const delete_message = 'messages::delete_message';

export const addMessage = (chatId, newMsg) => ({
  type: add_message,
  payload: {
    chatId,
    newMsg,
  },
});

export const deleteMessage = ({ chatId, msgId }) => ({
  type: delete_message,
  payload: {
    chatId,
    msgId,
  },
});
