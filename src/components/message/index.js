import './style.css';
import PropTypes from 'prop-types';

export const Message = ({ key, message, author }) => {
  const handleDeleteMessage = (msgId) => {};
  return (
    <div className='msg'>
      <h3 className='header'>
        {author}: {message}
      </h3>
      <button>X</button>
    </div>
  );

  Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
};
