import { useState } from 'react';
import './style.css';

export const AddChat = ({ onSubmit, del }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
    event.target[0].value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nameChat'>Input name chat: </label>
      <br />
      <input
        onChange={handleChange}
        del={del}
        className='form-add-chat'
        type='text'
        id='nameChat'
        name='nameChat'
      />
      <br />
      <input type='submit' value='Submit' />
    </form>
  );
};
