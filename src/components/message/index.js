import './style.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  addMessageWithThunk,
  deleteMessage,
  editMessage,
} from '../../store/messages/actions';
import { useParams } from 'react-router-dom';
import { Form } from '../Form';

export const Message = ({ msgId, message, author }) => {
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleDelete = (id) => {
    dispatch(deleteMessage(chatId, id));
  };

  const handleEdit = (id) => {
    dispatch(editMessage(chatId, id, 'hi'));
  };

  // const handleAddMessage = (text) => handleEdit(text);

  // const handleEditMsg = (id) => {
  //   const handleAddMessage = (text) => handleEdit(text, id);
  //   console.log(handleAddMessage);
  //   // <Form onSubmit={handleAddMessage} />;
  //ПОПЫТКИ СДЕЛАТЬ ИЗМЕНЕНИЕ СООБЩЕНИЯ РАЗНЫМ ТЕКСТОМ
  // const handleEdit = (id, text) => {
  //   <Form onSubmit={handleAddMessage} />;
  //   // const handleNewText = <Form onSubmit={handleAddMessage} />;
  //   dispatch(editMessage(chatId, id, text));
  // };

  return (
    <div className='msg'>
      <button onClick={() => handleEdit(msgId)}>Edit</button>
      <h3 className='header'>
        {author}: {message}
      </h3>
      <button onClick={() => handleDelete(msgId)}>X</button>
    </div>
  );

  Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
};
