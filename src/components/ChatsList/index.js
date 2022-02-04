import { useState } from 'react';
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
      const addChatInChatlist = (name, id) => {
        const chat = {
          name,
          id,     //на будущее, когда будем добавлять чаты
        };
        setChat((prevChats) => [...prevChats, chat])
      }

    return (
        <div className='modal-chats'>
            <ul className='chats-list'>
            {chats.map((chat) => (
                <Chat 
                key={chat.id} 
                chatName={ chat.name } 
                />
            ))}
            </ul>
        </div>
    );
}