import React from 'react';
import headerImage from './../../assets/icon.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="head-container">
            <img src={headerImage} className="head-image" alt="header" />
            <h1>Name It!</h1>
        </div>
    );
};

export default Header;
