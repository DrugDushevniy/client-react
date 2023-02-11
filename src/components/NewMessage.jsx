import React, {useRef} from 'react';
import cl from './ComponentsCSS/NewMessage.module.css'


const NewMessage = ({author, message, date, messagesEndRef, connection}) => {

    return (
        (connection) ?
           (<div>{connection}</div>)
            :(<div ref={messagesEndRef} className={cl.messageContainer}>
            <div className={cl.messageInfo}>
                <div className={cl.author}>{author}</div>
                <div className={cl.date}>{date}</div>
            </div>
            <div className={cl.messageBody}>{message}</div>
        </div>)
    );
};

export default NewMessage;