import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AddChat } from '../AddChat';
import { Chat } from '../Chat';
import './style.css';

export const Chatlist = () => {
  const [chats, setChat] = useState(
    [
      {
        name: 'chat1',
        id: 1,
      },
      {
        name: 'chat2',
        id: 2,
      },
      {
        name: 'chat3',
        id: 3,
      },
    ]
  );

  const addChatInChatlist = (name) => {
      const chat = {
        name,
        id: chats[chats.length - 1].id + 1,
      };
      
      setChat((prevChats) => [...prevChats, chat])
    };

  const handleAddChat = (name) => {
    addChatInChatlist(name);
  };

  const handleDeleteChat = (event) => {
    console.log(event);
};

  return (
    <>
    <div className='modal-chats'>
      <ul className='chats-list'>
        {chats.map((chat) => (
          <li key={ chat.id } className='chatlist'>
            <NavLink 
            to={`/chats/chat${chat.id}`}
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'red'})}
            className='chatlist-header'>{ chat.name }</NavLink>
            <button onClick={ handleDeleteChat }>Удалить</button>
          </li>
        ))}
      </ul>
      <AddChat 
      onSubmit={ handleAddChat }  
      />
    </div>
    <Outlet />
    </>
    );
}