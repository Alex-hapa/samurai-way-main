import React from 'react';
import cl from './Dialogs.module.css';
import { v1 } from 'uuid';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

/*type DialogsItemPropsType = {
    name: string
    id: string
}*/
/*type MessagePropsType = {
    message: string
}*/
/*
type DialogsPtopsType = {
    message: MessagePropsType
}
*/


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