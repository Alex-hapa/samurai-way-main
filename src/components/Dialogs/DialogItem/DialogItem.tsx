import React from 'react';
import cl from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string
};

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let dialogPath = '/dialogs/' + props.id;
    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;