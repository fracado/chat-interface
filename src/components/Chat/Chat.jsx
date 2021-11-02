import React, { useState, useEffect } from 'react';
import { fetchMessages } from '../../helper/api';
import Message from '../Message/Message';
import Input from '../Input/Input';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const addNewMessage = (message) => {
        setMessages([...messages, message])
    };

    useEffect(() => {
        fetchMessages(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${process.env.REACT_APP_CHAT_API_TOKEN}`)
            .then((response) => {
                setMessages(response);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader" aria-label="Loading..." />
            </div>
        )
    }

    return (
        <div className="chat-container">
            {messages.length > 0 && messages.map((message) => typeof message.message === "string" && <Message message={message} key={message._id} />)}
            <Input addNewMessage={addNewMessage} />
        </div>
    )
};

export default Chat;
