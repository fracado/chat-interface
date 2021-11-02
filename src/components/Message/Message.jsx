import React from 'react';
import moment from 'moment';
import './Message.css';

const Message = ({ message }) => {

    return (
        <div className={`message message-${message?.author === "user" ? "right" : "left"}`}>
            {message?.author !== "user" && (
                <>
                    <div className="label-gray">{message?.author}</div>
                    <br />
                </>
            )}
            <div>{message?.message}</div>
            <br />
            <time className={`timestamp-${message?.author === "user" ? "right" : "left"} label-gray`}>{moment(Number(message?.timestamp)).format("Do MMM YYYY H:mm")}</time>
        </div>
    )
};

export default Message;
