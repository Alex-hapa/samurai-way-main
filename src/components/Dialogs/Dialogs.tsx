import React from 'react';
import cl from './Dialogs.module.css';

const Dialogs = (props: any) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + ' ' + cl.active}>
                    Fedya
                </div>
                <div className={cl.dialog}>
                    Sandra
                </div>
                <div className={cl.dialog}>
                    John
                </div>
                <div className={cl.dialog}>
                    Michael
                </div>
                <div className={cl.dialog}>
                    Olga
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