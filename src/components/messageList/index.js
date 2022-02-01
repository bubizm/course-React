import { Message } from '../message';
import './style.css';

export const MessageList = ({ messages }) => {
    return (
      <div className='modal'>
        {messages.map((message) => (
        <Message author={ message.author } message={ message.text } />))}
      </div>
    );
};