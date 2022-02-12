import { useEffect, useState } from 'react';
import { Form } from '../../components/Form';
import { AUTHORS } from '../../components/Utils/constants';
import { MessageList } from '../../components/MessageList';
import { FormMui } from '../../components/FormMUI';
import { Chatlist } from '../../components/ChatsList';

import './style.css';
import { Navigate, useParams } from 'react-router-dom';

const chats = [{id: 'chat1'}];
const messages = {
    chat1: [],
}

export function Chat() {
    const params = useParams();
    const { chatId } = params;

    const [messageList, setMessageList] = useState({
        chat1: [],
        chat2: [],
        chat3: [],
    });

    const sendMessage = (text, author) => {
        const newMsg = {
        text,
        author,
        id: `msg-${Date.now()}`,
        }
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], newMsg]}));
    }

    const handleAddMessage = (text) => {
        sendMessage(text, AUTHORS.me);
    }
    
    useEffect(() => {
        let timeout; 
        if (messageList[chatId][messageList[chatId].length - 1]?.author ===
             AUTHORS.me) {
        timeout = setTimeout(() => {
            sendMessage('Are you OK!?', AUTHORS.robot);
        },1000);
        }
        
        return (() => {
        clearTimeout(timeout);
        })
    }, [messageList]);

    if (!messageList[chatId]) {
        return <Navigate to='/chats' replace />
    }

    return (
        <div className="App">
        <header className="App-header">
            <MessageList messages={ messageList[chatId] } />
            {/* <Form onSubmit={ handleAddMessage } /> */}
            <FormMui onSubmit={ handleAddMessage } />
        </header>
        </div>
    );
}
