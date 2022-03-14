import { onChildAdded, onChildRemoved, onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  chatsRef,
  getChatsRefById,
  getMessagesRefByChatId,
  getMessagesRefById,
} from '../../services/firebase';
import {
  addChat,
  deleteChat,
  initChatsTracking,
} from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { AddChat } from '../AddChat';
import { Chat } from '../Chat';
import { DeleteButton } from '../DeleteChat';
import './style.css';

export const Chatlist = () => {
  // const chats = useSelector(selectChats);
  const [chats, setChats] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onValue(chatsRef, (snapshot) => {
  //     const newChats = [];
  //     snapshot.forEach((child) => {
  //       newChats.push(child.val());
  //     });
  //     setChats(newChats);
  //   });
  //   return () => unsubscribe;
  // }, []);

  useEffect(() => {
    const unsubscribe = onChildAdded(chatsRef, (snapshot) => {
      setChats((prevChats) => [...prevChats, snapshot.val()]);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onChildRemoved(chatsRef, (snapshot) => {
      setChats((prevChats) =>
        prevChats.filter(({ id }) => id !== snapshot.val()?.id)
      );
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   dispatch(initChatsTracking());
  // }, []);

  const addChatInChatlist = (name) => {
    const chat = {
      name,
      id: chats[chats.length - 1] ? chats[chats.length - 1].id + 1 : 1,
    };

    dispatch(addChat(chat.name, chat.id));

    set(getChatsRefById(chat.id), { id: chat.id, name: name });
    set(getMessagesRefByChatId(chat.id), { empty: true });

    // setChatList((chatList) => [...chatList, chat]);
    // setMessages((prevMessages) => ({
    //   ...prevMessages,
    //   [chat.id]: [],
    // }));
  };

  // const addChatInChatlist = (name) => {
  //   const chat = {
  //     name,
  //     id: chats[chats.length - 1].id + 1,
  //   };

  //   // setChat((prevInitialChats) => [...prevInitialChats, chat]);
  // };

  // const handleAddChat = (name) => {
  //   addChatInChatlist(name);
  // };

  // const handleDeleteChat = (id) => {
  //   onDeleteChat(id);
  // };

  return (
    <>
      <div className='modal-chats'>
        <ul className='chats-list'>
          {chats.map((chat) => (
            <li key={chat.id} className='chatlist'>
              <NavLink
                to={`/chats/chat${chat.id}`}
                style={({ isActive }) => ({
                  color: isActive ? 'orange' : 'red',
                })}
                className='chatlist-header'
              >
                {chat.name}
              </NavLink>
              {/* <DeleteButton del={handleDeleteChat} id={chat.id} /> */}
              <DeleteButton id={chat.id} />
            </li>
          ))}
        </ul>
        <AddChat onSubmit={addChatInChatlist} />
      </div>
      <Outlet />
    </>
  );
};
