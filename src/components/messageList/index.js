import { useEffect, useRef } from 'react';
import { Message } from '../Message';
import './style.css';

export const MessageList = ({ messages }) => {
  const messagesEnd = useRef();

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
  },[messages]);

    return (
      <div className='modal'>
        {messages.map((message) => (
        <Message 
        key={ message.id } 
        author={ message.author } 
        message={ message.text } 
        />))}
        <div ref={messagesEnd} />
      </div>
    );
};