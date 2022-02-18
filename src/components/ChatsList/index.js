import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AddChat } from '../AddChat';
import { Chat } from '../Chat';
import { DeleteButton } from '../DeleteChat';
import './style.css';

export const Chatlist = ({ chats, onAddChat, onDeleteChat }) => {
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

  const handleDeleteChat = (id) => {
    onDeleteChat(id);
  };

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
              <DeleteButton del={handleDeleteChat} id={chat.id} />
            </li>
          ))}
        </ul>
        <AddChat onSubmit={onAddChat} />
      </div>
      <Outlet />
    </>
  );
};
