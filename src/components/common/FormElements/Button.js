import React from 'react';
import './FormElements.css';

const Button = ({ type, label }) => {
    return (
        <button type={type}>
            <b>{label}</b>
        </button>
    )
};

export default Button;
