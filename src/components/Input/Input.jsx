import React, {useState} from 'react';
import InputField from '../common/FormElements/InputField';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <footer className="input-container">
            <form>
                <InputField id="messageInput" inputValue={inputValue} setInputValue={setInputValue} placeholder=" Message" />
            </form>
        </footer>
    )
};

export default Input;
