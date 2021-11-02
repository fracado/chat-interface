import React, { useState, useEffect } from 'react';
import { fetchMessages } from '../../helper/api';
import Message from '../Message/Message';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${process.env.REACT_APP_CHAT_API_TOKEN}`)
            .then((response) => {
                setMessages(response);
            });
    }, []);

    return (
        <div className="chat-container">
            {messages.length > 0 && messages.map((message) => typeof message.message === "string" && <Message message={message} key={message._id} />)}
        </div>
    )
};

export default Chat;
