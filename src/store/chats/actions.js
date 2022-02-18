export const add_chat = 'chats::add_chat';
export const delete_chat = 'chats::delete_chat';

export const deleteChat = (id) => ({
  type: delete_chat,
  payload: id,
});

export const addChat = (name, id) => ({
  type: add_chat,
  payload: {
    name,
    id,
  },
});
