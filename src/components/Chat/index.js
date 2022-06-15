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
import {
  onChildAdded,
  onChildRemoved,
  onValue,
  push,
  set,
} from 'firebase/database';
import {
  getMessageListRefByChatId,
  getMessagesRefByChatId,
  getMessagesRefById,
} from '../../services/firebase';

export function Chat() {
  const params = useParams();
  const { chatId } = params;

  const [messages, setMessages] = useState([]);

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.me);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    set(getMessagesRefById(chatId, newMsg.id), newMsg);
  };

  useEffect(() => {
    setMessages([]);
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildAdded(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
      }
    );
    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildRemoved(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        setMessages((prevMessages) =>
          prevMessages.filter(({ id }) => id !== snapshot.val()?.id)
        );
      }
    );
    return unsubscribe;
  }, [chatId]);
  if (!messages) {
    return <Navigate to='/chats' replace />;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <MessageList messages={messages[chatId]} /> */}
        <MessageList messages={messages} />
        {/* <Form onSubmit={ handleAddMessage } /> */}
        <FormMui onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}
