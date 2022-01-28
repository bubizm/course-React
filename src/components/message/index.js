import './style.css';

export const Message = ({ text, click }) => {
    return (
    <h3 className='header' onClick={ click }>This is message, { text }</h3>
    );
};