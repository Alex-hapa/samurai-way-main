import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let dialogPath = '/dialogs/' + props.id;
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={cl.message}>{props.message}</div>
    )
}
const Dialogs = () => {
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