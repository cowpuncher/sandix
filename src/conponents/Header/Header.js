import React from 'react';
import Logo from '../Header/Logo/Logo'
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <header className="App-header">
            <Logo />
            <Navigation />
        </header>
    );
}

export default Header;