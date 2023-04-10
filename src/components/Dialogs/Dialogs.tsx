import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props: any) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + ' ' + cl.active}>
                    <NavLink to={'/dialogs/1'}>Fedya</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to={'/dialogs/2'}>Sandra</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to={'/dialogs/3'}>John</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to={'/dialogs/4'}>Michael</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to={'/dialogs/5'}>Olga</NavLink>
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>Hi. How are you?</div>
                <div className={cl.message}>I'm fine. And you?</div>
            </div>
        </div>
    )
}

export default Dialogs;