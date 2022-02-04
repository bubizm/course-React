import './style.css';
import { TextField, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const FormMui = ({ onSubmit }) => {

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
        <form onSubmit={ handleSubmit }>
            <TextField
            value={ value }
            ref={ inputFocus }
            onChange={ handleChange }
            id="outlined-multiline-flexible"
            label="Multiline"
            className='textField color coloryet color-line'
            multiline
            maxRows={4}
            />
            <Button
            className='button-form' 
            variant="contained"
            >
                Отправить</Button>
        </form>
    );
};