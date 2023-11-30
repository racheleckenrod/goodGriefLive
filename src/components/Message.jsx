import React from 'react';
// import socket from '../utils/socket';
// import { userLang, userTimeZone } from '../utils/socket';


const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log("from Message.jsx userTimeZone=", userTimeZone);

const userLang = navigator.language || navigator.userLanguage;
console.log("userLang=", userLang)


const Message = ({ message }) => {
    const timestamp = new Date(message.time);
    const localTime = timestamp.toLocaleString(userLang, { timeZone: userTimeZone });

    return (
        <div className="message">
            <p className="meta">
                {message.username} <span>{localTime}</span>
            </p>
            <p className="text">{message.text}</p>
        </div>
    );
};

export default Message;