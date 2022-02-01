import { useEffect, useState } from 'react';
import './App.css';
// import { Counter } from './components/counter';
import { Form } from './components/form';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/messageList';


function App() {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
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
        <MessageList messages={ messageList }/>
        <Form onSubmit={ handleAddMessage }/>
        
      </header>
    </div>
  );
}

export default App;
