import './style.css';

export const Chat = ({ chatName }) => {
    return (
        <li className='chatlist'>
            <h3 className='chatlist-header'>{ chatName }</h3>
        </li>
    );
}