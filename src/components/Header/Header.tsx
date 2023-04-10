import React from 'react';
import cl from './Header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
            <img
                src="https://www.designevo.com/res/templates/thumb_small/shape-and-letter-s.webp?v=1.0.0.2"
                alt="logo"/>
            <h1>LOGO SN</h1>
        </header>
    )
}

export default Header;