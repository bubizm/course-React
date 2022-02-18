import { useCallback } from 'react';
import './style.css';

export const DeleteButton = ({ del, id }) => {
  const deleteChat = useCallback(() => del(id));

  return <button onClick={deleteChat}>Удалить</button>;
};
