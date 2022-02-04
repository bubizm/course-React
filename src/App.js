import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { AUTHORS } from './components/Utils/constants';
import { MessageList } from './components/MessageList';
import { FormMui } from './components/FormMUI';
import { Chatlist } from './components/ChatsList';


function App() {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    }
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  }

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.me);
  }
  
  useEffect(() => {
    let timeout; 
    if (messageList[messageList.length - 1]?.author === AUTHORS.me) {
      timeout = setTimeout(() => {
        sendMessage('Are you OK!?', AUTHORS.robot);
      },1000);
    }
    
    return (() => {
      clearTimeout(timeout);
    })
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <Chatlist />
        <MessageList messages={ messageList } />
        <Form onSubmit={ handleAddMessage } />
        {/* <FormMui onSubmit={ handleAddMessage } /> ПОЧЕМУ-ТО НЕ РАБОТАЕТ*/}
      </header>
    </div>
  );
}

export default App;
