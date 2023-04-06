import React from 'react';
import cl from './Header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
            <img
                src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
                alt="logo"/>
        </header>
    )
}

export default Header;