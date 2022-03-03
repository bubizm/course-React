import { useEffect, useState } from 'react';
import { Form } from '../../components/Form';
import { AUTHORS } from '../../components/Utils/constants';
import { MessageList } from '../../components/MessageList';
import { FormMui } from '../../components/FormMUI';

import './style.css';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessage, addMessageWithThunk } from '../../store/messages/actions';

// export function Chat({ messages, addMessage, deleteMessage }) {
export function Chat() {
  const params = useParams();
  const { chatId } = params;

  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    dispatch(addMessageWithThunk(chatId, newMsg));
  };

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.me);
  };

  // useEffect(() => {
  //   let timeout;
  //   if (
  //     messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.me
  //   ) {
  //     timeout = setTimeout(() => {
  //       sendMessage('Are you OK!?', AUTHORS.robot);
  //     }, 1000);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to='/chats' replace />;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <MessageList messages={messages[chatId]} />
        {/* <Form onSubmit={ handleAddMessage } /> */}
        <FormMui onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}
