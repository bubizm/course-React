import { useState } from "react";
import './style.css';

export const Counter = () => {
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h4>{ count }</h4>
            <button  onClick={handleClick}>Click On Me</button>
        </div>
    );
};