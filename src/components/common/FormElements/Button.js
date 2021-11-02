import React from 'react';
import './Form.css';

const Button = ({ type, label }) => {
    return (
        <button type={type}>
            <b>{label}</b>
        </button>
    )
};

export default Button;
