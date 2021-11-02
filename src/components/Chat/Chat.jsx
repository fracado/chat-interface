import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    return (
        <div className="chat-container">
            {messages.length > 0 && messages.map((message) => message?.message)}
        </div>
    )
};

export default Chat;
