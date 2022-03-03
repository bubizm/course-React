import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { AddChat } from '../AddChat';
import { Chat } from '../Chat';
import { DeleteButton } from '../DeleteChat';
import './style.css';

export const Chatlist = () => {
  const chats = useSelector(selectChats);
  const chatList = useSelector(selectChats);
  const dispatch = useDispatch();

  const addChatInChatlist = (name) => {
    const chat = {
      name,
      id: chatList[chatList.length - 1]
        ? chatList[chatList.length - 1].id + 1
        : 1,
    };

    dispatch(addChat(chat.name, chat.id));
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
