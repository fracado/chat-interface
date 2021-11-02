import React, {useEffect, useRef} from 'react';
import moment from 'moment';
import './Message.css';

const Message = ({ message, ref }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        elementRef.current.scrollIntoView()
    }, [ref]);

    return (
        <div className={`message message-${message?.author === "user" ? "right" : "left"}`} ref={elementRef}>
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
