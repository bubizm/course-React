export const add_messages = 'messages::add_messages';
export const delete_messages = 'messages::delete_messages';

export const changeShowName = {
  type: change_show_name,
};

export const changeName = (name) => ({
  type: change_name,
  payload: name,
});
