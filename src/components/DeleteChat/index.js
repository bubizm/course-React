import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteChat } from '../../store/chats/actions';
import './style.css';

export const DeleteButton = (id) => {
  // const deleteChat = useCallback(() => del(id));
  const dispatch = useDispatch();

  const handleDeleteChat = () => {
    dispatch(deleteChat(id));
    // setChatList((prevChatList) =>
    //   prevChatList.filter((chat) => chat.id !== chatId)
    // );
    // setMessages((prevMessages) => {
    //   const newMessages = { ...prevMessages };

    //   delete newMessages[chatId];
    //   return newMessages;
    // });
  };

  return <button onClick={handleDeleteChat}>Удалить</button>;
};
