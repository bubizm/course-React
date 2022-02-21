import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { addMessage, deleteMessage } from '../../store/messages/actions';
import { selectMessages } from '../../store/messages/selectors';
import { Chat } from '../Chat';
import { Chatlist } from '../ChatsList';
import { Profile } from '../Profile';

import './style.css';

const Home = () => <h2>Home page</h2>;

// const initialChats = [
//   {
//     name: 'chat1',
//     id: 1,
//   },
//   {
//     name: 'chat2',
//     id: 2,
//   },
//   {
//     name: 'chat3',
//     id: 3,
//   },
// ];

// const initialMessages = initialChats.reduce((acc, el) => {
//   acc[el.id] = [];
//   return acc;
// }, {});

export const Router = () => {
  // const [chatList, setChatList] = useState(initialChats);
  // const [messages, setMessages] = useState(initialMessages);
  const messages = useSelector(selectMessages);

  const chatList = useSelector(selectChats);

  const dispatch = useDispatch();

  const handleAddMessage = (chatId, newMsg) => {
    // setMessages((prevMessages) => ({
    //   ...prevMessages,
    //   [chatId]: [...prevMessages[chatId], newMsg],
    // }));
    dispatch(addMessage(chatId, newMsg));
  };

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

  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId));
    // setChatList((prevChatList) =>
    //   prevChatList.filter((chat) => chat.id !== chatId)
    // );
    // setMessages((prevMessages) => {
    //   const newMessages = { ...prevMessages };

    //   delete newMessages[chatId];
    //   return newMessages;
    // });
  };

  const handleDeleteMessage = (chatId, msgId) => {
    dispatch(deleteMessage(chatId, msgId));
  };

  return (
    <BrowserRouter>
      <div className='rout'>
        <div>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/chats'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Chats
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/profile'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Profile
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='chats'
            element={
              <Chatlist
                chats={chatList}
                onAddChat={addChatInChatlist}
                onDeleteChat={handleDeleteChat}
              />
            }
          >
            <Route
              path='chat:chatId'
              element={
                <Chat
                  messages={messages}
                  addMessage={handleAddMessage}
                  deleteMessage={handleDeleteMessage}
                />
              }
            />
          </Route>
          <Route path='*' element={<h2>404 not found</h2>} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
