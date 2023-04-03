import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            Hello, samurai! Let's go!
            <Header/>
            <Technologies/>
        </div>
    );
}

function Header() {
    return (
        <div>
            <a href='#'>Home</a>
            <a href='#'>News Feed</a>
            <a href='#'>Messages</a>
        </div>
    )
}

function Technologies() {
    return (
        <div>
            <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
