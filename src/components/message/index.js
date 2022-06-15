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
import { remove } from 'firebase/database';
import { getMessagesRefById } from '../../services/firebase';
import { MessagePresentation } from '../MessagePresentation';

export const Message = ({ msgId, message, author }) => {
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleDelete = (id) => {
    remove(getMessagesRefById(chatId, id));
  };

  const handleEdit = (id) => {
    dispatch(editMessage(chatId, id, 'hi'));
  };

  return (
    <div className='msg'>
      <button onClick={() => handleEdit(msgId)}>Edit</button>
      <MessagePresentation author={author} message={message} />
      <button onClick={() => handleDelete(msgId)}>X</button>
    </div>
  );

  Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
};
