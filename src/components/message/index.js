import './style.css';
import PropTypes from 'prop-types';

export const Message = ({ message, author }) => {
    return (
      <h3 className='header'>{ author }: { message }</h3>
    );

    Message.propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }
};