import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import { v1 } from 'uuid';

type DialogItemPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message: string
}
type DialogsPtopsType = {
    message: MessagePropsType
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let dialogPath = '/dialogs/' + props.id;
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={cl.message}>{props.message}</div>
    )
}
const Dialogs/*: React.FC<DialogsPtopsType>*/ = (/*props*/) => {
    let dialogs = [
        {id: v1(), name: 'Fedya'},
        {id: v1(), name: 'Sandra'},
        {id: v1(), name: 'John'},
        {id: v1(), name: 'Michael'},
        {id: v1(), name: 'Olga'},
    ];
    let messages = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi. How are you?'},
        {id: v1(), message: 'I\'m fine. And you?'},
        {id: v1(), message: 'I\'ve seen better days'},
    ];
    let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map((message) => <Message message={message.message} />);

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;