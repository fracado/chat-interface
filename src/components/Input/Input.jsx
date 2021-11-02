import React, {useState} from 'react';
import InputField from '../common/FormElements/InputField';
import Button from '../common/FormElements/Button';
import { sendMessage } from '../../helper/api';
import './Input.css';

const Input = ({ addNewMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(inputValue)
            .then((message) => {
                addNewMessage(message)
            })
            .then(() => {
                setInputValue('')
            });
    };

    return (
        <footer className="input-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputField id="messageInput" inputValue={inputValue} setInputValue={setInputValue} placeholder=" Message" />
                <Button type="submit" label="Send" />
            </form>
        </footer>
    )
};

export default Input;
