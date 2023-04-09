import React from 'react';
import cl from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={`${cl.item} ${cl.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={cl.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={cl.item}><a>News</a></div>
            <div className={cl.item}><a>Music</a></div>
            <div className={cl.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar;