import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

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
    let dialogsData = [
        {id: 1, name: 'Fedya'},
        {id: 2, name: 'Sandra'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Michael'},
        {id: 5, name: 'Olga'},
    ];
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi. How are you?'},
        {id: 3, message: 'I\'m fine. And you?'},
        {id: 4, message: 'I\'ve seen better days'},
    ];

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem name={'Fedya'} id={'1'}/>
                <DialogItem name={'Sandra'} id={'2'}/>
                <DialogItem name={'John'} id={'3'}/>
                <DialogItem name={'Michael'} id={'4'}/>
                <DialogItem name={'Olga'} id={'5'}/>
            </div>
            <div className={cl.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hi. How are you?'}/>
                <Message message={'I\'m fine. And you?'}/>
            </div>
        </div>
    )
}

export default Dialogs;