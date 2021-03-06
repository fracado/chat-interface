import React from 'react';
import './FormElements.css';

const InputField = ({ id, setInputValue, inputValue, placeholder }) => {
    return (
        <input
            id={id}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder={placeholder}
            required
            autoFocus
        />
    )
};

export default InputField;
