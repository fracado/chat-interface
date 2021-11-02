import React from 'react';

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
            <time className={`timestamp-${message?.author === "user" ? "right" : "left"} label-gray`}>{message?.timestamp}</time>
        </div>
    )
};

export default Message;
