import './style.css';
import { useEffect, useRef, useState } from 'react';

export const Form = ({ onSubmit }) => {

    const [value, setValue] = useState("");
    const inputFocus = useRef();

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue("");
    }

    useEffect(() => {
        inputFocus.current?.focus();
    })

    return (
        <>
        <h1>Messenger</h1>

        <form onSubmit={ handleSubmit }>
        <label htmlFor="message">Input your text: </label>
        <input 
        ref={ inputFocus }
        value={ value } 
        onChange={ handleChange } 
        className='formText' 
        type="text" id="message" name="message" />
        <br/>
        <input type="submit" value="Submit" />
        </form>
        </>
        
    );
};