import './style.css';

export const Message = ({ message, author }) => {
    return (
      <h3 className='header'>{ author }: { message }</h3>
    );
};