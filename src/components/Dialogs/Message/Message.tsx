import React from 'react';
import cl from '../Dialogs.module.css';

type MessagePropsType = {
    message: string
};

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={cl.message}>{props.message}</div>
    )
};

export default Message;